<#
.SYNOPSIS
    AEObility Google Search Console Telemetry & URL Inspection Tool (PowerShell)
    Path: scripts/gsc-audit.ps1

.DESCRIPTION
    Authenticates via Google Cloud Service Account OAuth2 JWT Bearer assertion
    and inspects canonical routes using the Google Search Console URL Inspection API.

.PARAMETER All
    Inspects all canonical sitemap URLs.

.PARAMETER Url
    Inspects a single specified URL.

.EXAMPLE
    .\scripts\gsc-audit.ps1
    .\scripts\gsc-audit.ps1 -All
    .\scripts\gsc-audit.ps1 -Url "https://aeobility.com.au/book"
#>

param(
    [switch]$All,
    [string]$Url
)

# 1. Resolve Environment & Service Account Key
$HostDomain = "aeobility.com.au"
$SiteUrl = "sc-domain:aeobility.com.au"
$KeyFilePath = Join-Path $PSScriptRoot "..\antigravity-cli-and-adk-500010-6c74add7d8e4.json"

if (-not (Test-Path $KeyFilePath)) {
    Write-Host "Service Account key file not found at: $KeyFilePath" -ForegroundColor Red
    exit 1
}

$DefaultTargetRoutes = @(
    "https://$HostDomain/",
    "https://$HostDomain/knowledge-hub/articles/structured-data-query-fan-out",
    "https://$HostDomain/knowledge-hub/articles/telemetry-diagnostic-architecture",
    "https://$HostDomain/services/aeo",
    "https://$HostDomain/services/aeo/comparison",
    "https://$HostDomain/services/geo-marketing",
    "https://$HostDomain/diagnostic"
)

# Canonical list (imported from submit-indexnow.ps1 if available)
$CanonicalUrls = @()
$IndexNowPs1 = Join-Path $PSScriptRoot "submit-indexnow.ps1"
if (Test-Path $IndexNowPs1) {
    $scriptContent = Get-Content $IndexNowPs1 -Raw
    $matches = [regex]::Matches($scriptContent, '"https://\$HostDomain([^"]*)"')
    foreach ($m in $matches) {
        $CanonicalUrls += "https://$HostDomain$($m.Groups[1].Value)"
    }
    $CanonicalUrls = $CanonicalUrls | Select-Object -Unique
}

if ($CanonicalUrls.Count -eq 0) {
    $CanonicalUrls = $DefaultTargetRoutes
}

# Determine routes to inspect
$RoutesToInspect = $DefaultTargetRoutes
if ($Url) {
    $RoutesToInspect = @($Url)
} elseif ($All) {
    $RoutesToInspect = $CanonicalUrls
} elseif ($args.Count -gt 0 -and $args[0] -match "^https?://") {
    $RoutesToInspect = @($args[0])
} elseif ($args -contains "--all") {
    $RoutesToInspect = $CanonicalUrls
}

Write-Host ""
Write-Host "======================================================" -ForegroundColor Cyan
Write-Host "AEObility Google Search Console Telemetry Audit" -ForegroundColor Cyan
Write-Host "Key File: $(Split-Path -Leaf $KeyFilePath)" -ForegroundColor Cyan
Write-Host "======================================================" -ForegroundColor Cyan

# 2. Authenticate with Google OAuth2 via Service Account JWT Bearer assertion
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

# 3. Verify accessible GSC properties
$activeProperty = $SiteUrl
try {
    $sitesRes = Invoke-RestMethod -Uri "https://www.googleapis.com/webmasters/v3/sites" -Method Get -Headers $authHeaders
    $siteEntries = $sitesRes.siteEntry
    if (-not $siteEntries -or $siteEntries.Count -eq 0) {
        Write-Host ""
        Write-Host "Service Account has not been granted access in GSC yet." -ForegroundColor Yellow
        Write-Host ""
        Write-Host "Please complete this one-time step:" -ForegroundColor Cyan
        Write-Host "   1. Open Google Search Console (https://search.google.com/search-console)"
        Write-Host "   2. Select your property ($HostDomain)"
        Write-Host "   3. Go to: Settings -> Users and permissions -> Add User"
        Write-Host "   4. Enter email: $($sa.client_email)"
        Write-Host "   5. Set Permission: Full (or Owner) and click Add."
        Write-Host ""
        Write-Host "Once added, re-run this audit to stream live telemetry." -ForegroundColor Green
        Write-Host ""
        exit 0
    }

    $matched = $siteEntries | Where-Object { $_.siteUrl -eq $SiteUrl } | Select-Object -First 1
    if (-not $matched) {
        $matched = $siteEntries[0]
    }
    if ($matched -and $matched.siteUrl) {
        $activeProperty = $matched.siteUrl
    }
    Write-Host "Connected Property: $activeProperty (Permission: $($matched.permissionLevel))" -ForegroundColor Green
} catch {
    Write-Host "Could not list sites: $($_.Exception.Message). Using fallback: $activeProperty" -ForegroundColor Yellow
}

Write-Host "Inspecting $($RoutesToInspect.Count) target route(s)..." -ForegroundColor Cyan
Write-Host ""

# 4. Inspect URLs
$passCount = 0
$failCount = 0
$errorCount = 0

for ($i = 0; $i -lt $RoutesToInspect.Count; $i++) {
    $inspectUrl = $RoutesToInspect[$i]
    try {
        $reqBody = @{
            inspectionUrl = $inspectUrl
            siteUrl       = $activeProperty
        } | ConvertTo-Json -Compress

        $res = Invoke-RestMethod -Uri "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect" -Method Post -Headers $authHeaders -Body $reqBody

        $result = $res.inspectionResult.indexStatusResult
        $userCanonical = if ($result.userCanonical) { $result.userCanonical } else { "Not detected" }
        $googleCanonical = if ($result.googleCanonical) { $result.googleCanonical } else { "Not detected" }
        
        $canonicalMatch = ($result.userCanonical -and $result.googleCanonical -and 
            ($result.userCanonical.TrimEnd('/') -eq $result.googleCanonical.TrimEnd('/')))

        if ($canonicalMatch) {
            $passCount++
        } else {
            $failCount++
        }

        $verdict = if ($result.verdict) { $result.verdict } else { "UNKNOWN" }
        $coverage = if ($result.coverageState) { $result.coverageState } else { "UNKNOWN" }
        $matchLabel = if ($canonicalMatch) { "PASS" } else { "MISMATCH / PENDING" }
        $robots = if ($result.robotsTxtState) { $result.robotsTxtState } else { "ALLOWED" }
        $indexing = if ($result.indexingState) { $result.indexingState } else { "UNKNOWN" }
        $lastCrawled = if ($result.lastCrawlTime) { $result.lastCrawlTime } else { "Never" }

        Write-Host "[$($i + 1)/$($RoutesToInspect.Count)] $inspectUrl" -ForegroundColor Cyan
        Write-Host "  Verdict:          $verdict"
        Write-Host "  Coverage State:   $coverage"
        Write-Host "  User Canonical:   $userCanonical"
        Write-Host "  Google Canonical: $googleCanonical"
        Write-Host "  Canonical Match:  $matchLabel"
        Write-Host "  Robots.txt State: $robots"
        Write-Host "  Indexing State:   $indexing"
        Write-Host "  Last Crawled:     $lastCrawled"
        Write-Host ""

        if ($RoutesToInspect.Count -gt 1) {
            Start-Sleep -Milliseconds 300
        }
    } catch {
        $errorCount++
        Write-Host "[$($i + 1)/$($RoutesToInspect.Count)] Error inspecting ${inspectUrl}:" -ForegroundColor Red
        Write-Host "   $($_.Exception.Message)" -ForegroundColor Red
        Write-Host ""
    }
}

$summaryLine = "Audit Summary: $passCount Passed, $failCount Mismatches/Pending, $errorCount Errors"
Write-Host "======================================================" -ForegroundColor Cyan
Write-Host $summaryLine -ForegroundColor Green
Write-Host "======================================================" -ForegroundColor Cyan
Write-Host ""
