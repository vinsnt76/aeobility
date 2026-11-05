<#
.SYNOPSIS
    AEObility Google Search Console Diagnostic Audit: Branded Query Suppression & Entity Disambiguation
    Path: scripts/diagnose-brand-suppression.ps1
#>

$HostDomain = "aeobility.com.au"
$SiteUrl = "sc-domain:aeobility.com.au"
$KeyFilePath = Join-Path $PSScriptRoot "..\antigravity-cli-and-adk-500010-6c74add7d8e4.json"

if (-not (Test-Path $KeyFilePath)) {
    Write-Host "Service Account key file not found at: $KeyFilePath" -ForegroundColor Red
    exit 1
}

# 1. Authenticate with Google OAuth2 via Service Account JWT Bearer assertion
try {
    $sa = Get-Content $KeyFilePath -Raw | ConvertFrom-Json
    $keyText = $sa.private_key -replace "-----BEGIN PRIVATE KEY-----", "" -replace "-----END PRIVATE KEY-----", "" -replace "\r|\n", ""
    $keyBytes = [System.Convert]::FromBase64String($keyText)
    $cng = [System.Security.Cryptography.CngKey]::Import($keyBytes, [System.Security.Cryptography.CngKeyBlobFormat]::Pkcs8PrivateBlob)
    $rsa = New-Object System.Security.Cryptography.RSACng($cng)

    function Base64UrlEncode([byte[]]$bytes) {
        return [System.Convert]::ToBase64String($bytes).Replace('+', '-').Replace('/', '_').TrimEnd('=')
    }

    $headerJson = '{"alg":"RS256","typ":"JWT"}'
    $headerEncoded = Base64UrlEncode ([System.Text.Encoding]::UTF8.GetBytes($headerJson))

    $now = [int][double]::Parse((Get-Date (Get-Date).ToUniversalTime() -UFormat %s))
    $exp = $now + 3600

    $claims = @{
        iss   = $sa.client_email
        scope = "https://www.googleapis.com/auth/webmasters.readonly"
        aud   = "https://oauth2.googleapis.com/token"
        exp   = $exp
        iat   = $now
    } | ConvertTo-Json -Compress

    $claimsEncoded = Base64UrlEncode ([System.Text.Encoding]::UTF8.GetBytes($claims))
    $toSign = "$headerEncoded.$claimsEncoded"
    $toSignBytes = [System.Text.Encoding]::UTF8.GetBytes($toSign)
    $sigBytes = $rsa.SignData($toSignBytes, [System.Security.Cryptography.HashAlgorithmName]::SHA256, [System.Security.Cryptography.RSASignaturePadding]::Pkcs1)
    $sigEncoded = Base64UrlEncode $sigBytes
    $jwt = "$toSign.$sigEncoded"

    $tokenBody = "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=$jwt"
    $tokenRes = Invoke-RestMethod -Uri "https://oauth2.googleapis.com/token" -Method Post -Body $tokenBody -ContentType "application/x-www-form-urlencoded"
    $accessToken = $tokenRes.access_token
} catch {
    Write-Host "Failed to obtain Google OAuth2 access token: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

$authHeaders = @{
    "Authorization" = "Bearer $accessToken"
    "Content-Type"  = "application/json; charset=utf-8"
}

# 2. Date Range: Last 180 days (accounting for standard 3-day GSC reporting lag)
$EndDate = (Get-Date).AddDays(-3).ToString("yyyy-MM-dd")
$StartDate = (Get-Date).AddDays(-183).ToString("yyyy-MM-dd")

Write-Host "=================================================================" -ForegroundColor Cyan
Write-Host "GSC Telemetry Audit: $SiteUrl ($StartDate to $EndDate)" -ForegroundColor Cyan
Write-Host "=================================================================" -ForegroundColor Cyan
Write-Host ""

$outputData = @{
    dateRange = @{ startDate = $StartDate; endDate = $EndDate }
    propertyTotals = $null
    queryRowsSummary = $null
    anonymisationGap = $null
    homepagePages = @()
    brandRegexQueries = @()
    allBrandMatches = @()
    urlInspection = $null
}

# -----------------------------------------------------------------------------
# TASK 1: Measure Total Site-Level vs Query-Level Discrepancy (Anonymisation Gap)
# -----------------------------------------------------------------------------
Write-Host ">>> Executing Task 1: Measuring Total Property vs Query-Level Totals..." -ForegroundColor Yellow

# 1A. Property-level totals (dimensions = [])
$propBody = @{
    startDate = $StartDate
    endDate = $EndDate
    searchType = "web"
    dimensions = @()
} | ConvertTo-Json -Compress

$propUrl = "https://www.googleapis.com/webmasters/v3/sites/$([Uri]::EscapeDataString($SiteUrl))/searchAnalytics/query"
$propRes = Invoke-RestMethod -Uri $propUrl -Method Post -Headers $authHeaders -Body $propBody

$propClicks = 0
$propImpressions = 0
$propCtr = 0
$propPosition = 0

if ($propRes.rows -and $propRes.rows.Count -gt 0) {
    $r = $propRes.rows[0]
    $propClicks = [double]$r.clicks
    $propImpressions = [double]$r.impressions
    $propCtr = [double]$r.ctr
    $propPosition = [double]$r.position
}

Write-Host "  Property Totals: Clicks=$propClicks | Impressions=$propImpressions | CTR=$(("{0:P2}" -f $propCtr)) | Avg Pos=$(("{0:N1}" -f $propPosition))"

# 1B. Query-level dimension pull (dimensions = ["query"], rowLimit = 25000)
$queryBody = @{
    startDate = $StartDate
    endDate = $EndDate
    searchType = "web"
    dimensions = @("query")
    rowLimit = 25000
} | ConvertTo-Json -Compress

$queryRes = Invoke-RestMethod -Uri $propUrl -Method Post -Headers $authHeaders -Body $queryBody

$sumQueryClicks = 0
$sumQueryImpressions = 0
$queryRowCount = 0
$allQueryRows = @()

if ($queryRes.rows) {
    $queryRowCount = $queryRes.rows.Count
    $allQueryRows = $queryRes.rows
    foreach ($row in $queryRes.rows) {
        $sumQueryClicks += [double]$row.clicks
        $sumQueryImpressions += [double]$row.impressions
    }
}

Write-Host "  Query Rows Sum ($queryRowCount rows): Clicks=$sumQueryClicks | Impressions=$sumQueryImpressions"

$anonClicks = $propClicks - $sumQueryClicks
$anonImpressions = $propImpressions - $sumQueryImpressions
$anonClickPct = if ($propClicks -gt 0) { ($anonClicks / $propClicks) * 100 } else { 0 }
$anonImpPct = if ($propImpressions -gt 0) { ($anonImpressions / $propImpressions) * 100 } else { 0 }

Write-Host "  Anonymisation Discrepancy:" -ForegroundColor Magenta
Write-Host "    Anonymised Impressions: $anonImpressions ($("{0:N2}" -f $anonImpPct)%)"
Write-Host "    Anonymised Clicks:      $anonClicks ($("{0:N2}" -f $anonClickPct)%)"
Write-Host ""

$outputData.propertyTotals = @{
    clicks = $propClicks
    impressions = $propImpressions
    ctr = $propCtr
    position = $propPosition
}

$outputData.queryRowsSummary = @{
    rowCount = $queryRowCount
    sumClicks = $sumQueryClicks
    sumImpressions = $sumQueryImpressions
}

$outputData.anonymisationGap = @{
    anonymisedImpressions = $anonImpressions
    anonymisedImpressionsPercent = $anonImpPct
    anonymisedClicks = $anonClicks
    anonymisedClicksPercent = $anonClickPct
}

# -----------------------------------------------------------------------------
# TASK 2: Page-Level Diagnostic Pull
# -----------------------------------------------------------------------------
Write-Host ">>> Executing Task 2: Page-Level Diagnostic Pull..." -ForegroundColor Yellow

$pageBody = @{
    startDate = $StartDate
    endDate = $EndDate
    searchType = "web"
    dimensions = @("page")
    rowLimit = 1000
} | ConvertTo-Json -Compress

$pageRes = Invoke-RestMethod -Uri $propUrl -Method Post -Headers $authHeaders -Body $pageBody

$homepageRows = @()
$totalPageImpressions = 0
$totalPageClicks = 0

if ($pageRes.rows) {
    foreach ($pRow in $pageRes.rows) {
        $pageUrl = $pRow.keys[0]
        $totalPageClicks += [double]$pRow.clicks
        $totalPageImpressions += [double]$pRow.impressions
        
        # Check variations of root homepage
        if ($pageUrl -match "^https?://(www\.)?aeobility\.com\.au/?$") {
            $homepageRows += @{
                page = $pageUrl
                clicks = [double]$pRow.clicks
                impressions = [double]$pRow.impressions
                ctr = [double]$pRow.ctr
                position = [double]$pRow.position
            }
            Write-Host "  Homepage Match: $pageUrl | Clicks=$($pRow.clicks) | Imp=$($pRow.impressions) | CTR=$(("{0:P2}" -f [double]$pRow.ctr)) | Pos=$(("{0:N1}" -f [double]$pRow.position))" -ForegroundColor Green
        }
    }
}

if ($homepageRows.Count -eq 0) {
    Write-Host "  No impressions recorded for root homepage variations in the 180-day page-level report." -ForegroundColor Red
}

$outputData.homepagePages = $homepageRows
$outputData.totalPageImpressions = $totalPageImpressions
$outputData.totalPageClicks = $totalPageClicks
$outputData.allPages = $pageRes.rows | Select-Object -First 25 | ForEach-Object {
    @{
        page = $_.keys[0]
        clicks = $_.clicks
        impressions = $_.impressions
        ctr = $_.ctr
        position = $_.position
    }
}
Write-Host ""

# -----------------------------------------------------------------------------
# TASK 3: Regex Pattern Matching for Brand Variants
# -----------------------------------------------------------------------------
Write-Host ">>> Executing Task 3: Regex Matching for Brand Queries..." -ForegroundColor Yellow

$regexBody = @{
    startDate = $StartDate
    endDate = $EndDate
    searchType = "web"
    dimensions = @("query")
    dimensionFilterGroups = @(
        @{
            filters = @(
                @{
                    dimension = "query"
                    operator = "includingRegex"
                    expression = "(?i)(aeo|aeobility|seobility)"
                }
            )
        }
    )
    rowLimit = 1000
} | ConvertTo-Json -Depth 5 -Compress

try {
    $regexRes = Invoke-RestMethod -Uri $propUrl -Method Post -Headers $authHeaders -Body $regexBody
    if ($regexRes.rows) {
        Write-Host "  API Regex Returned $($regexRes.rows.Count) row(s):" -ForegroundColor Green
        foreach ($rRow in $regexRes.rows) {
            $q = $rRow.keys[0]
            Write-Host "    - Query: '$q' | Clicks=$($rRow.clicks) | Imp=$($rRow.impressions) | CTR=$(("{0:P2}" -f [double]$rRow.ctr)) | Pos=$(("{0:N1}" -f [double]$rRow.position))"
            $outputData.brandRegexQueries += @{
                query = $q
                clicks = [double]$rRow.clicks
                impressions = [double]$rRow.impressions
                ctr = [double]$rRow.ctr
                position = [double]$rRow.position
            }
        }
    } else {
        Write-Host "  API Regex Query Returned 0 matching rows." -ForegroundColor Yellow
    }
} catch {
    Write-Host "  Regex query failed via API: $($_.Exception.Message)" -ForegroundColor Red
}

# Cross-check memory from $allQueryRows
Write-Host "  In-memory cross-check across all $($allQueryRows.Count) unsuppressed queries..."
$matchedMemory = @()
foreach ($qRow in $allQueryRows) {
    $q = $qRow.keys[0]
    if ($q -match "aeo|aeobility|seobility|baker|vince") {
        $matchedMemory += @{
            query = $q
            clicks = [double]$qRow.clicks
            impressions = [double]$qRow.impressions
            ctr = [double]$qRow.ctr
            position = [double]$qRow.position
        }
        Write-Host "    - Memory Match: '$q' | Clicks=$($qRow.clicks) | Imp=$($qRow.impressions) | Pos=$(("{0:N1}" -f [double]$qRow.position))" -ForegroundColor Cyan
    }
}
$outputData.allBrandMatches = $matchedMemory
Write-Host ""

# -----------------------------------------------------------------------------
# TASK 4: URL Inspection API (Index & Canonical Verification)
# -----------------------------------------------------------------------------
Write-Host ">>> Executing Task 4: URL Inspection API on https://aeobility.com.au/ ..." -ForegroundColor Yellow

$inspectTarget = "https://aeobility.com.au/"
$inspectBody = @{
    inspectionUrl = $inspectTarget
    siteUrl       = $SiteUrl
} | ConvertTo-Json -Compress

try {
    $inspectRes = Invoke-RestMethod -Uri "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect" -Method Post -Headers $authHeaders -Body $inspectBody
    $idxResult = $inspectRes.inspectionResult.indexStatusResult

    $inspectSummary = @{
        verdict = $idxResult.verdict
        coverageState = $idxResult.coverageState
        indexingState = $idxResult.indexingState
        robotsTxtState = $idxResult.robotsTxtState
        pageFetchState = $idxResult.pageFetchState
        crawledAs = $idxResult.crawledAs
        userCanonical = $idxResult.userCanonical
        googleCanonical = $idxResult.googleCanonical
        lastCrawlTime = $idxResult.lastCrawlTime
        referringUrls = $idxResult.referringUrls
        sitemap = $idxResult.sitemap
    }

    Write-Host "  Verdict:          $($inspectSummary.verdict)"
    Write-Host "  Coverage State:   $($inspectSummary.coverageState)"
    Write-Host "  Indexing State:   $($inspectSummary.indexingState)"
    Write-Host "  Robots.txt State: $($inspectSummary.robotsTxtState)"
    Write-Host "  Page Fetch State: $($inspectSummary.pageFetchState)"
    Write-Host "  Crawled As:       $($inspectSummary.crawledAs)"
    Write-Host "  User Canonical:   $($inspectSummary.userCanonical)"
    Write-Host "  Google Canonical: $($inspectSummary.googleCanonical)"
    Write-Host "  Last Crawled:     $($inspectSummary.lastCrawlTime)"
    Write-Host "  Sitemaps:         $(($inspectSummary.sitemap -join ', '))"
    Write-Host "  Referring URLs:   $(($inspectSummary.referringUrls -join ', '))"

    $outputData.urlInspection = $inspectSummary
} catch {
    Write-Host "  URL Inspection failed: $($_.Exception.Message)" -ForegroundColor Red
}

# -----------------------------------------------------------------------------
# Save Raw JSON Telemetry Data
# -----------------------------------------------------------------------------
$rawJsonPath = Join-Path $PSScriptRoot "gsc-audit-results.json"
$outputData | ConvertTo-Json -Depth 6 | Set-Content -Path $rawJsonPath -Encoding utf8
Write-Host ""
Write-Host "=================================================================" -ForegroundColor Green
Write-Host "Telemetry export complete -> $rawJsonPath" -ForegroundColor Green
Write-Host "=================================================================" -ForegroundColor Green

