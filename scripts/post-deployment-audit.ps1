param(
    [string]$SiteUrl = "sc-domain:aeobility.com.au",
    [string]$TargetUrl = "https://aeobility.com.au/"
)

[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$ErrorActionPreference = "Stop"

Write-Host "=================================================================" -ForegroundColor Cyan
Write-Host "AEObility Post-Deployment Technical SEO & Entity QA Audit" -ForegroundColor Cyan
Write-Host "Target: $TargetUrl | Property: $SiteUrl" -ForegroundColor Cyan
Write-Host "=================================================================" -ForegroundColor Cyan

# -------------------------------------------------------------------------
# Step 1: Live DOM & Rendered Schema Validation
# -------------------------------------------------------------------------
Write-Host "`n>>> Step 1: Fetching Live Production DOM..." -ForegroundColor Yellow
$liveHtml = ""
try {
    $rawCurl = curl.exe -s -L "https://aeobility.com.au/"
    $liveHtml = [System.Text.Encoding]::UTF8.GetString([System.Text.Encoding]::Default.GetBytes($rawCurl))
} catch {
    Write-Host "Failed to fetch live DOM via curl: $($_.Exception.Message)" -ForegroundColor Red
}

$titleMatch = [regex]::Match($liveHtml, '<title>(.*?)</title>')
$liveTitle = if ($titleMatch.Success) { $titleMatch.Groups[1].Value.Trim() } else { "NOT FOUND" }

$canonicalMatch = [regex]::Match($liveHtml, '<link[^>]*rel="canonical"[^>]*href="([^"]*)"[^>]*>')
$liveCanonical = if ($canonicalMatch.Success) { $canonicalMatch.Groups[1].Value.Trim() } else { "NOT FOUND" }

$scriptMatches = [regex]::Matches($liveHtml, '<script[^>]*type="application/ld\+json"[^>]*>(.*?)</script>', [System.Text.RegularExpressions.RegexOptions]::Singleline)
Write-Host "Found $($scriptMatches.Count) application/ld+json script block(s) in live DOM." -ForegroundColor Gray

$parsedSchemas = @()
$profService = $null
$personNode = $null
$foundDeletedWikidata = @()

foreach ($sm in $scriptMatches) {
    try {
        $jsonStr = $sm.Groups[1].Value.Trim()
        $jsonObj = $jsonStr | ConvertFrom-Json
        $parsedSchemas += $jsonObj

        # Check for deleted Wikidata IDs
        if ($jsonStr -match 'Q140775249|Q140775311|User:AEObility') {
            $foundDeletedWikidata += $matches[0]
        }

        # Inspect graph nodes
        if ($jsonObj.'@graph') {
            foreach ($node in $jsonObj.'@graph') {
                $nodeType = @($node.'@type')
                if ($nodeType -contains 'ProfessionalService' -or $nodeType -contains 'Organization') {
                    if ($node.'@id' -match '#organization' -or $node.name -eq 'AEObility') {
                        $profService = $node
                    }
                }
                if ($nodeType -contains 'Person' -and ($node.'@id' -match '#vincebaker|#person' -or $node.name -match 'Baker')) {
                    $personNode = $node
                }
            }
        } else {
            $nodeType = @($jsonObj.'@type')
            if ($nodeType -contains 'ProfessionalService' -or $nodeType -contains 'Organization') {
                $profService = $jsonObj
            }
        }
    } catch {
        Write-Host "Error parsing JSON-LD block: $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host "DOM Validation Results:" -ForegroundColor White
Write-Host "  Live Title:      $liveTitle"
Write-Host "  Live Canonical:  $liveCanonical"
Write-Host "  Deleted Q-items: $(if ($foundDeletedWikidata.Count -eq 0) { 'ZERO [PASS]' } else { 'FAILED: ' + ($foundDeletedWikidata -join ', ') })"

if ($profService) {
    Write-Host "  ProfessionalService Node: FOUND" -ForegroundColor Green
    Write-Host "    @id:                       $($profService.'@id')"
    Write-Host "    name:                      $($profService.name)"
    Write-Host "    legalName:                 $($profService.legalName)"
    Write-Host "    alternateName:             $(($profService.alternateName) -join ', ')"
    Write-Host "    disambiguatingDescription: $($profService.disambiguatingDescription)"
    Write-Host "    sameAs count:              $($profService.sameAs.Count)"
} else {
    Write-Host "  ProfessionalService Node: NOT FOUND" -ForegroundColor Red
}

if ($personNode) {
    Write-Host "  Person Node: FOUND" -ForegroundColor Green
    Write-Host "    @id:           $($personNode.'@id')"
    Write-Host "    name:          $($personNode.name)"
    Write-Host "    alternateName: $(($personNode.alternateName) -join ', ')"
    Write-Host "    worksFor:      $($personNode.worksFor.'@id')"
    Write-Host "    sameAs:        $(($personNode.sameAs) -join ', ')"
} else {
    Write-Host "  Person Node: NOT FOUND" -ForegroundColor Red
}

# -------------------------------------------------------------------------
# Step 2 & 3: Google Search Console API Authorization
# -------------------------------------------------------------------------
Write-Host "`n>>> Authorizing Google Search Console API via Service Account..." -ForegroundColor Yellow
$saPath = "antigravity-cli-and-adk-500010-6c74add7d8e4.json"
$sa = Get-Content $saPath -Raw | ConvertFrom-Json

$now = [DateTimeOffset]::UtcNow.ToUnixTimeSeconds()
$exp = $now + 3600

$header = @{ alg = "RS256"; typ = "JWT" }
$claim = @{
    iss   = $sa.client_email
    scope = "https://www.googleapis.com/auth/webmasters https://www.googleapis.com/auth/webmasters.readonly"
    aud   = "https://oauth2.googleapis.com/token"
    exp   = $exp
    iat   = $now
}

function Base64UrlEncode([byte[]]$bytes) {
    return [Convert]::ToBase64String($bytes).Replace('+', '-').Replace('/', '_').TrimEnd('=')
}

$headerBytes = [System.Text.Encoding]::UTF8.GetBytes(($header | ConvertTo-Json -Compress))
$claimBytes = [System.Text.Encoding]::UTF8.GetBytes(($claim | ConvertTo-Json -Compress))
$unsignedToken = (Base64UrlEncode $headerBytes) + "." + (Base64UrlEncode $claimBytes)

$lines = ($sa.private_key -split "`n") | Where-Object { $_ -notmatch '-----' -and $_.Trim() -ne '' } | ForEach-Object { $_.Trim() }
$b64 = $lines -join ''
$der = [Convert]::FromBase64String($b64)
$cng = [System.Security.Cryptography.CngKey]::Import($der, [System.Security.Cryptography.CngKeyBlobFormat]::Pkcs8PrivateBlob)
$rsa = New-Object System.Security.Cryptography.RSACng($cng)
$sigBytes = $rsa.SignData([System.Text.Encoding]::UTF8.GetBytes($unsignedToken), [System.Security.Cryptography.HashAlgorithmName]::SHA256, [System.Security.Cryptography.RSASignaturePadding]::Pkcs1)
$signedJwt = $unsignedToken + "." + (Base64UrlEncode $sigBytes)

$tokenRes = Invoke-RestMethod -Uri "https://oauth2.googleapis.com/token" -Method Post -Body @{
    grant_type = "urn:ietf:params:oauth:grant-type:jwt-bearer"
    assertion  = $signedJwt
}
$accessToken = $tokenRes.access_token
$authHeaders = @{
    Authorization = "Bearer $accessToken"
    "Content-Type" = "application/json"
}
Write-Host "OAuth2 Access Token acquired successfully." -ForegroundColor Green

# -------------------------------------------------------------------------
# Step 2: URL Inspection API
# -------------------------------------------------------------------------
Write-Host "`n>>> Step 2: Executing URL Inspection API for $TargetUrl..." -ForegroundColor Yellow
$inspectBody = @{
    inspectionUrl = $TargetUrl
    siteUrl       = $SiteUrl
} | ConvertTo-Json

$inspectResult = Invoke-RestMethod -Uri "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect" -Method Post -Headers $authHeaders -Body $inspectBody
$idx = $inspectResult.inspectionResult.indexStatusResult

Write-Host "URL Inspection Results:" -ForegroundColor White
$verdictColor = if ($idx.verdict -eq 'PASS') { 'Green' } else { 'Red' }
Write-Host "  Verdict:          $($idx.verdict)" -ForegroundColor $verdictColor
Write-Host "  Last Crawl Time:  $($idx.lastCrawlTime)" -ForegroundColor Cyan
Write-Host "  Coverage State:   $($idx.coverageState)"
Write-Host "  Indexing State:   $($idx.indexingState)"
Write-Host "  Crawled As:       $($idx.crawledAs)"
Write-Host "  User Canonical:   $($idx.userCanonical)"
Write-Host "  Google Canonical: $($idx.googleCanonical)"
Write-Host "  Canonical Match:  $(if ($idx.userCanonical -eq $idx.googleCanonical) { '100% PARITY [PASS]' } else { 'MISMATCH [FAIL]' })"

# -------------------------------------------------------------------------
# Step 3: Search Analytics API (Last 28 Days and Last 7 Days)
# -------------------------------------------------------------------------
Write-Host "`n>>> Step 3: Search Analytics API (Baseline Recheck & Token Queries)..." -ForegroundColor Yellow

function Run-SearchAnalytics($days, $label) {
    Write-Host "`n--- Running Search Analytics: $label ($days Days) ---" -ForegroundColor Cyan
    $endDateStr = [DateTime]::UtcNow.AddDays(-2).ToString("yyyy-MM-dd")
    $startDateStr = [DateTime]::UtcNow.AddDays(-2 - $days).ToString("yyyy-MM-dd")

    # 1. Overall Property Totals (dimensions: [])
    $propBody = @{
        startDate  = $startDateStr
        endDate    = $endDateStr
        dimensions = @()
        searchType = "web"
    } | ConvertTo-Json

    $encodedSiteUrl = [System.Uri]::EscapeDataString($SiteUrl)
    $propRes = Invoke-RestMethod -Uri "https://searchconsole.googleapis.com/webmasters/v3/sites/$encodedSiteUrl/searchAnalytics/query" -Method Post -Headers $authHeaders -Body $propBody
    $propTotal = if ($propRes.rows) { $propRes.rows[0] } else { @{ clicks = 0; impressions = 0; ctr = 0; position = 0 } }

    # 2. Query Level Breakdown (dimensions: ["query"])
    $queryBody = @{
        startDate  = $startDateStr
        endDate    = $endDateStr
        dimensions = @("query")
        rowLimit   = 5000
        searchType = "web"
    } | ConvertTo-Json

    $queryRes = Invoke-RestMethod -Uri "https://searchconsole.googleapis.com/webmasters/v3/sites/$encodedSiteUrl/searchAnalytics/query" -Method Post -Headers $authHeaders -Body $queryBody
    $queryRows = if ($queryRes.rows) { $queryRes.rows } else { @() }

    $queryClicksSum = ($queryRows | Measure-Object -Property clicks -Sum).Sum
    if (-not $queryClicksSum) { $queryClicksSum = 0 }
    $queryImpSum = ($queryRows | Measure-Object -Property impressions -Sum).Sum
    if (-not $queryImpSum) { $queryImpSum = 0 }

    $anonClicks = $propTotal.clicks - $queryClicksSum
    $anonClicksPct = if ($propTotal.clicks -gt 0) { [math]::Round(($anonClicks / $propTotal.clicks) * 100, 2) } else { 0 }
    $anonImp = $propTotal.impressions - $queryImpSum
    $anonImpPct = if ($propTotal.impressions -gt 0) { [math]::Round(($anonImp / $propTotal.impressions) * 100, 2) } else { 0 }

    Write-Host "  Property Totals: Clicks=$($propTotal.clicks) | Impressions=$($propTotal.impressions) | CTR=$([math]::Round($propTotal.ctr * 100, 2))% | AvgPos=$([math]::Round($propTotal.position, 1))"
    Write-Host "  Sum of Queries:  Clicks=$queryClicksSum | Impressions=$queryImpSum (Rows: $($queryRows.Count))"
    $anonColor = if ($anonClicksPct -gt 50) { 'Yellow' } else { 'White' }
    Write-Host "  Anonymisation:   Clicks=$anonClicks ($anonClicksPct%) | Imp=$anonImp ($anonImpPct%)" -ForegroundColor $anonColor

    # 3. Targeted Token Filters
    $patterns = @(
        @{ Name = "Pattern 1 (Brand: aeobility / aeo bility)"; Regex = "(?i)(aeo\s*bility|aeo\.bility|aeobility)" },
        @{ Name = "Pattern 2 (Founder: vince baker / vinnie baker)"; Regex = "(?i)(vince\s*baker|vinnie\s*baker)" },
        @{ Name = "Pattern 3 (Conflation: seobility)"; Regex = "(?i)(seobility)" }
    )

    $patternResults = @{}

    foreach ($pat in $patterns) {
        $filterBody = @{
            startDate = $startDateStr
            endDate   = $endDateStr
            dimensions = @("query")
            dimensionFilterGroups = @(
                @{
                    filters = @(
                        @{
                            dimension = "query"
                            operator  = "includingRegex"
                            expression = $pat.Regex
                        }
                    )
                }
            )
            rowLimit = 500
        } | ConvertTo-Json -Depth 5

        $filtRes = Invoke-RestMethod -Uri "https://searchconsole.googleapis.com/webmasters/v3/sites/$encodedSiteUrl/searchAnalytics/query" -Method Post -Headers $authHeaders -Body $filterBody
        $rows = if ($filtRes.rows) { $filtRes.rows } else { @() }
        $patternResults[$pat.Name] = $rows

        Write-Host "  $($pat.Name): Found $($rows.Count) matching query row(s)" -ForegroundColor Magenta
        foreach ($r in $rows) {
            Write-Host "    - '$($r.keys[0])' | Clicks=$($r.clicks) | Imp=$($r.impressions) | CTR=$([math]::Round($r.ctr*100,2))% | Pos=$([math]::Round($r.position,1))" -ForegroundColor Gray
        }
    }

    return @{
        label          = $label
        days           = $days
        startDate      = $startDateStr
        endDate        = $endDateStr
        propTotal      = $propTotal
        queryClicksSum = $queryClicksSum
        queryImpSum    = $queryImpSum
        anonClicks     = $anonClicks
        anonClicksPct  = $anonClicksPct
        anonImp        = $anonImp
        anonImpPct     = $anonImpPct
        patternResults = $patternResults
    }
}

$qa28 = Run-SearchAnalytics 28 "Last 28 Days"
$qa7  = Run-SearchAnalytics 7 "Last 7 Days"

# Export report JSON
$auditExport = @{
    timestamp        = [DateTime]::UtcNow.ToString("o")
    liveDom          = @{
        title               = $liveTitle
        canonical           = $liveCanonical
        deletedWikidataHits = $foundDeletedWikidata
        profService         = $profService
        personNode          = $personNode
        totalScriptBlocks   = $scriptMatches.Count
    }
    urlInspection    = @{
        verdict          = $idx.verdict
        lastCrawlTime    = $idx.lastCrawlTime
        crawledAs        = $idx.crawledAs
        userCanonical    = $idx.userCanonical
        googleCanonical  = $idx.googleCanonical
        coverageState    = $idx.coverageState
    }
    analytics28Days  = $qa28
    analytics7Days   = $qa7
}

$exportPath = "scripts/post-deployment-audit-results.json"
$auditExport | ConvertTo-Json -Depth 10 | Set-Content $exportPath -Encoding UTF8
Write-Host "`nAudit complete! Exported full telemetry to $exportPath" -ForegroundColor Green
