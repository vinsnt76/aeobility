<#
.SYNOPSIS
    AEObility IndexNow Dispatcher for PowerShell
    Submits modified or canonical entity pages to IndexNow (Bing, Yandex, IndexNow.org).

.DESCRIPTION
    Automatically detects modified pages via git diff or dispatches explicit/canonical URL lists.
    Protocol: https://www.indexnow.org/documentation

.PARAMETER Changed
    Inspects recent git commits (default: HEAD~1) and submits only URLs that changed.

.PARAMETER All
    Submits all canonical site URLs regardless of git status.

.PARAMETER Urls
    Explicit array of URLs to submit to IndexNow.

.PARAMETER Since
    Git reference or commit to diff against when detecting changes (default: "HEAD~1").

.EXAMPLE
    .\scripts\submit-indexnow.ps1 -Changed
    .\scripts\submit-indexnow.ps1 -Urls "https://aeobility.com.au/brand-facts"
    .\scripts\submit-indexnow.ps1 -All
#>

param(
    [switch]$Changed,
    [switch]$All,
    [string[]]$Urls,
    [string]$Since = "HEAD~1"
)

$HostDomain = "aeobility.com.au"
$Key = "99f72a3935774040b8814ad6a76e6e59"
$KeyLocation = "https://$HostDomain/$Key.txt"

$IndexNowEndpoints = @(
    "https://api.indexnow.org/indexnow",
    "https://www.bing.com/indexnow",
    "https://yandex.com/indexnow"
)

# Canonical URL list (1:1 with sitemap.ts)
$CanonicalUrls = @(
    "https://$HostDomain",
    "https://$HostDomain/diagnostic",
    "https://$HostDomain/brand-facts",
    "https://$HostDomain/services",
    "https://$HostDomain/services/aeo",
    "https://$HostDomain/services/aeo/definition",
    "https://$HostDomain/services/aeo/comparison",
    "https://$HostDomain/services/aeo/procedures",
    "https://$HostDomain/services/aeo/constraints",
    "https://$HostDomain/services/aeo/costs-timing",
    "https://$HostDomain/services/aeo/shopify",
    "https://$HostDomain/services/aeo/local-business",
    "https://$HostDomain/services/ai-search-agency",
    "https://$HostDomain/services/ai-search-marketing",
    "https://$HostDomain/services/ai-search-marketing/perth",
    "https://$HostDomain/services/ai-search-marketing/sydney",
    "https://$HostDomain/services/ai-search-marketing/melbourne",
    "https://$HostDomain/services/ai-search-marketing/adelaide",
    "https://$HostDomain/services/ai-search-marketing/brisbane",
    "https://$HostDomain/services/perth/seo-specialist",
    "https://$HostDomain/services/geo-marketing",
    "https://$HostDomain/solutions",
    "https://$HostDomain/solutions/aeo-blueprint",
    "https://$HostDomain/solutions/aeo-sprint",
    "https://$HostDomain/knowledge-hub",
    "https://$HostDomain/knowledge-hub/aeo",
    "https://$HostDomain/knowledge-hub/ai-seo-tools",
    "https://$HostDomain/knowledge-hub/what-is-aeo",
    "https://$HostDomain/knowledge-hub/guides",
    "https://$HostDomain/knowledge-hub/guides/aeo",
    "https://$HostDomain/knowledge-hub/tutorials",
    "https://$HostDomain/knowledge-hub/tutorials/how-to-audit-and-build-entity-density-for-aeo",
    "https://$HostDomain/knowledge-hub/semantic-seo",
    "https://$HostDomain/knowledge-hub/geo",
    "https://$HostDomain/knowledge-hub/what-is-seo-optimisation",
    "https://$HostDomain/knowledge-hub/case-studies",
    "https://$HostDomain/knowledge-hub/case-studies/baby-bento",
    "https://$HostDomain/knowledge-hub/case-studies/aeo-geo-blueprint-90-days",
    "https://$HostDomain/knowledge-hub/articles",
    "https://$HostDomain/knowledge-hub/articles/how-to-fix-ai-brand-hallucinations-and-evidence-gaps",
    "https://$HostDomain/knowledge-hub/articles/optimising-for-different-ai-search-engines",
    "https://$HostDomain/knowledge-hub/articles/competitor-overlap-semantic-dominance-framework",
    "https://$HostDomain/knowledge-hub/articles/positional-bias-in-retrieval",
    "https://$HostDomain/knowledge-hub/articles/entity-authority-building",
    "https://$HostDomain/knowledge-hub/articles/aeo-vs-seo",
    "https://$HostDomain/knowledge-hub/articles/retrieval-augmented-generation",
    "https://$HostDomain/knowledge-hub/articles/structured-data-query-fan-out",
    "https://$HostDomain/knowledge-hub/articles/telemetry-diagnostic-architecture",
    "https://$HostDomain/knowledge-hub/articles/machine-legibility-data-provenance",
    "https://$HostDomain/knowledge-hub/articles/seo-vs-geo-red-flags",
    "https://$HostDomain/about",
    "https://$HostDomain/about/freelance-digital-specialist-perth",
    "https://$HostDomain/about/freelance-seo-consultant-perth",
    "https://$HostDomain/about/freelance-google-ads-consultant-perth",
    "https://$HostDomain/about/freelance-ai-consultant-perth",
    "https://$HostDomain/vince-baker",
    "https://$HostDomain/contact",
    "https://$HostDomain/book",
    "https://$HostDomain/docs/api",
    "https://$HostDomain/privacy",
    "https://$HostDomain/terms",
    "https://$HostDomain/llms.txt"
)

function Resolve-FileToUrl([string]$filePath) {
    $norm = $filePath.Replace("\", "/").Trim()



    if ($norm -match "^src/app/page\.(tsx|jsx|js|ts)$") {
        return "https://$HostDomain"
    }

    if ($norm -match "^src/app/(.+)/page\.(tsx|jsx|js|ts)$") {
        $route = $matches[1]
        $route = ($route -split '/' | Where-Object { $_ -notmatch '^\(.*\)$' }) -join '/'
        return "https://$HostDomain/$route"
    }

    if ($norm -eq "src/lib/brandFacts.ts" -or $norm -eq "src/app/api/brand-facts/route.ts" -or $norm -eq "public/brand-facts.json") {
        return "https://$HostDomain/brand-facts"
    }

    if ($norm -match "^public/(.+\.(md|txt|json|xml|html))$") {
        return "https://$HostDomain/$($matches[1])"
    }

    return $null
}

$TargetUrls = @()

if ($Urls -and $Urls.Count -gt 0) {
    $TargetUrls = $Urls
}
elseif ($Changed) {
    Write-Host "Detecting changed pages via git diff against $Since..." -ForegroundColor Cyan
    try {
        $diffFiles = git diff --name-only $Since
        $uncommitted = git status --porcelain | ForEach-Object {
            if ($_.Length -gt 3) { $_.Substring(3).Trim() }
        }
        $allChangedFiles = @($diffFiles) + @($uncommitted) | Select-Object -Unique

        $detectedUrls = @()
        $globalTrigger = $false

        foreach ($file in $allChangedFiles) {
            if ($file -match "^src/app/layout\.tsx$" -or $file -match "AEObility -IA & SLM\.csv" -or $file -match "next\.config\.ts") {
                $globalTrigger = $true
                break
            }

            $url = Resolve-FileToUrl $file
            if ($url) {
                $detectedUrls += $url
            }

        }

        if ($globalTrigger) {
            Write-Host "  Detected global site layout / IA change: Submitting all canonical URLs." -ForegroundColor Yellow
            $TargetUrls = $CanonicalUrls
        }
        elseif ($detectedUrls.Count -gt 0) {
            $TargetUrls = $detectedUrls | Select-Object -Unique
        }
        else {
            Write-Host "  No route-specific files modified in git diff. Defaulting to canonical directory matrix." -ForegroundColor Gray
            $TargetUrls = $CanonicalUrls
        }
    }
    catch {
        Write-Host "  Failed to query git diff. Defaulting to canonical matrix." -ForegroundColor Red
        $TargetUrls = $CanonicalUrls
    }
}
elseif ($All) {
    $TargetUrls = $CanonicalUrls
}
else {
    try {
        $recentChanges = git diff --name-only HEAD~1
        $detected = @()
        foreach ($f in $recentChanges) {
            $u = Resolve-FileToUrl $f
            if ($u) { $detected += $u }
        }

        if ($detected.Count -gt 0) {
            Write-Host "Auto-detected $($detected.Count) recently modified page(s) in HEAD~1." -ForegroundColor Cyan
            $TargetUrls = $detected | Select-Object -Unique
        }
        else {
            $TargetUrls = $CanonicalUrls
        }
    }
    catch {
        $TargetUrls = $CanonicalUrls
    }
}

$TargetUrls = $TargetUrls | Select-Object -Unique

Write-Host ""
Write-Host "======================================================" -ForegroundColor Cyan
Write-Host " Dispatching IndexNow Push for $HostDomain" -ForegroundColor Cyan
Write-Host " Payload: $($TargetUrls.Count) URL(s)" -ForegroundColor Cyan
Write-Host " Key Verification: $KeyLocation" -ForegroundColor Cyan
Write-Host "======================================================" -ForegroundColor Cyan
Write-Host ""

foreach ($u in $TargetUrls) {
    Write-Host "  -> $u" -ForegroundColor Gray
}
Write-Host ""

$Payload = @{
    host        = $HostDomain
    key         = $Key
    keyLocation = $KeyLocation
    urlList     = @($TargetUrls)
} | ConvertTo-Json -Depth 5

$successCount = 0
$totalEndpoints = $IndexNowEndpoints.Count

foreach ($endpoint in $IndexNowEndpoints) {
    $epHostname = ([System.Uri]$endpoint).Host
    try {
        Write-Host "Pinging $epHostname..." -NoNewline
        $req = @{
            Uri             = $endpoint
            Method          = "Post"
            Body            = $Payload
            ContentType     = "application/json; charset=utf-8"
            UserAgent       = "AEObility-IndexNow-Dispatcher/1.0"
            UseBasicParsing = $true
            TimeoutSec      = 15
        }
        $response = Invoke-WebRequest @req

        if ($response.StatusCode -eq 200 -or $response.StatusCode -eq 202) {
            Write-Host " [PASS: $($response.StatusCode) $($response.StatusDescription)]" -ForegroundColor Green
            $successCount++
        }
        else {
            Write-Host " [STATUS: $($response.StatusCode)]" -ForegroundColor Yellow
        }
    }
    catch {
        Write-Host " [FAIL: $($_.Exception.Message)]" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "IndexNow cycle complete: $successCount of $totalEndpoints endpoints responded successfully." -ForegroundColor Green
Write-Host ""
Write-Host ""
