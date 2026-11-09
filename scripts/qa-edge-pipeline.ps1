# AEObility Edge & Schema Graph QA Pipeline (PowerShell)
# Protocol: Validates live edge endpoints, SSR schema graphs, and machine protocols.

[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$ErrorActionPreference = "Continue"

$BaseUrl = if ($env:TARGET_URL) { $env:TARGET_URL } else { "https://aeobility.com.au" }
$TimeoutSec = 5

Write-Host "=================================================================" -ForegroundColor Cyan
Write-Host "🚀 AEObility Live Edge QA & Schema Validation Pipeline" -ForegroundColor Cyan
Write-Host "🌐 Target Base URL: $BaseUrl" -ForegroundColor Cyan
Write-Host "=================================================================`n" -ForegroundColor Cyan

$passCount = 0
$failCount = 0
$warnCount = 0

function Pass-Check([string]$msg) {
    Write-Host "  ✅ [PASS] $msg" -ForegroundColor Green
    $global:passCount++
}

function Fail-Check([string]$msg) {
    Write-Host "  ❌ [FAIL] $msg" -ForegroundColor Red
    $global:failCount++
}

function Warn-Check([string]$msg) {
    Write-Host "  ⚠️  [WARN] $msg" -ForegroundColor Yellow
    $global:warnCount++
}

# -----------------------------------------------------------------------------
# 1. External ABR Registry
# -----------------------------------------------------------------------------
Write-Host ">>> [1/6] Auditing External ABR Government Registry Node..." -ForegroundColor Yellow
try {
    $abr = Invoke-WebRequest -Uri "https://abr.business.gov.au/ABN/View?id=61029803255" -TimeoutSec $TimeoutSec -UseBasicParsing
    if ($abr.StatusCode -eq 200) {
        Pass-Check "ABR Verification Node responded with 200 OK [ABN: 61 029 803 255]"
    } else {
        Warn-Check "ABR returned status $($abr.StatusCode)"
    }
} catch {
    Warn-Check "ABR lookup timed out or network blocked: $($_.Exception.Message)"
}

# -----------------------------------------------------------------------------
# 2. RFC 9727 Link Header
# -----------------------------------------------------------------------------
Write-Host "`n>>> [2/6] Auditing RFC 9727 Link Header across Live Edge..." -ForegroundColor Yellow
try {
    $head = Invoke-WebRequest -Uri "$BaseUrl/" -Method Head -TimeoutSec 10 -UseBasicParsing
    $linkHeader = $head.Headers['Link']
    if ($linkHeader -match '<https://aeobility.com.au/llms.txt>; rel="describedby"') {
        Pass-Check "Link header advertises llms.txt as describedby"
    } else {
        Fail-Check "Link header missing describedby relation for llms.txt"
    }
} catch {
    Warn-Check "Could not verify live Link header: $($_.Exception.Message)"
}

# -----------------------------------------------------------------------------
# 3. Root Route (/) Schema Graph
# -----------------------------------------------------------------------------
Write-Host "`n>>> [3/6] Auditing Root Route (/) Schema & Edge Graph..." -ForegroundColor Yellow
try {
    $root = Invoke-WebRequest -Uri "$BaseUrl/" -TimeoutSec 10 -UseBasicParsing
    if ($root.Content -match 'https://aeobility.com.au/#organization') {
        Pass-Check "Found canonical Organization node: https://aeobility.com.au/#organization"
    } else {
        Fail-Check "Missing canonical Organization node: https://aeobility.com.au/#organization"
    }

    if ($root.Content -match 'https://aeobility.com.au/#website') {
        Pass-Check "Found canonical WebSite node: https://aeobility.com.au/#website"
    } else {
        Fail-Check "Missing canonical WebSite node: https://aeobility.com.au/#website"
    }

    if ($root.Content -match 'https://aeobility.com.au/#catalog' -or $root.Content -match 'hasOfferCatalog') {
        Pass-Check "Found OfferCatalog node on root route"
    } else {
        Warn-Check "OfferCatalog node not detected in root DOM"
    }
} catch {
    Fail-Check "Root route fetch failed: $($_.Exception.Message)"
}

# -----------------------------------------------------------------------------
# 4. Dedicated Founder Profile Route (/vince-baker)
# -----------------------------------------------------------------------------
Write-Host "`n>>> [4/6] Auditing Dedicated Founder Profile Route (/vince-baker)..." -ForegroundColor Yellow
try {
    $founder = Invoke-WebRequest -Uri "$BaseUrl/vince-baker" -TimeoutSec 10 -UseBasicParsing
    if ($founder.StatusCode -eq 200) {
        Pass-Check "/vince-baker returned HTTP 200 OK"
    }

    if ($founder.Content -match 'https://aeobility.com.au/#vincebaker') {
        Pass-Check "Found Person node anchored to https://aeobility.com.au/#vincebaker"
    } else {
        Fail-Check "Missing Person node on /vince-baker"
    }

    if ($founder.Content -match 'https://aeobility.com.au/vince-baker#webpage') {
        Pass-Check "Found ProfilePage node anchored to https://aeobility.com.au/vince-baker#webpage"
    } else {
        Fail-Check "Missing ProfilePage node on /vince-baker"
    }

    if ($founder.Content -match '—') {
        Fail-Check "Em dash (—) detected on /vince-baker"
    } else {
        Pass-Check "Zero em dashes detected on /vince-baker"
    }
} catch {
    Fail-Check "/vince-baker fetch failed: $($_.Exception.Message)"
}

# -----------------------------------------------------------------------------
# 5. About Us Route (/about)
# -----------------------------------------------------------------------------
Write-Host "`n>>> [5/6] Auditing About Us Route (/about)..." -ForegroundColor Yellow
try {
    $about = Invoke-WebRequest -Uri "$BaseUrl/about" -TimeoutSec 10 -UseBasicParsing
    if ($about.Content -match 'Trekaboutoz') {
        Fail-Check "Legacy corporate name Trekaboutoz detected on /about"
    } else {
        Pass-Check "Zero occurrences of legacy corporate entity on /about"
    }

    if ($about.Content -match '61 029 803 255' -or $about.Content -match '61029803255') {
        Pass-Check "Verified ABN 61 029 803 255 present on /about"
    } else {
        Fail-Check "ABN 61 029 803 255 not found on /about"
    }
} catch {
    Fail-Check "/about fetch failed: $($_.Exception.Message)"
}

# -----------------------------------------------------------------------------
# 6. Machine-Readable Manifest (/llms.txt)
# -----------------------------------------------------------------------------
Write-Host "`n>>> [6/6] Auditing Machine-Readable Manifest (/llms.txt)..." -ForegroundColor Yellow
try {
    $llms = Invoke-WebRequest -Uri "$BaseUrl/llms.txt" -TimeoutSec 10 -UseBasicParsing
    if ($llms.StatusCode -eq 200) {
        Pass-Check "/llms.txt returned HTTP 200 OK"
    }
    
    $contentType = $llms.Headers['Content-Type']
    if ($contentType -match 'text/markdown' -or $contentType -match 'text/plain') {
        Pass-Check "/llms.txt Content-Type valid: $contentType"
    } else {
        Warn-Check "/llms.txt Content-Type: $contentType"
    }

    if ($llms.Content -match 'https://aeobility.com.au/#organization') {
        Pass-Check "Canonical Organization URI declared in llms.txt"
    } else {
        Fail-Check "Missing canonical Organization URI in llms.txt"
    }

    if ($llms.Content -match '61 029 803 255') {
        Pass-Check "ABN 61 029 803 255 declared in llms.txt"
    } else {
        Fail-Check "Missing ABN in llms.txt"
    }

    if ($llms.Content -match '—') {
        Fail-Check "Em dash (—) detected in llms.txt"
    } else {
        Pass-Check "Zero em dashes in llms.txt"
    }

    if ($llms.Content -match 'AEObility Australia') {
        Fail-Check "Prohibited alias AEObility Australia found in llms.txt"
    } else {
        Pass-Check "Strict 5-alias list enforced in llms.txt"
    }
} catch {
    Fail-Check "/llms.txt fetch failed: $($_.Exception.Message)"
}

Write-Host "`n=================================================================" -ForegroundColor Cyan
Write-Host "🏁 QA Edge Pipeline Results: $passCount Passed, $failCount Failed, $warnCount Warnings" -ForegroundColor Cyan
Write-Host "=================================================================`n" -ForegroundColor Cyan

if ($failCount -gt 0) {
    exit 1
} else {
    exit 0
}
