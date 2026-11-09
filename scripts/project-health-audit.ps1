# AEObility Comprehensive Project Health Audit
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$ErrorActionPreference = "Continue"

Write-Host "=================================================================" -ForegroundColor Cyan
Write-Host "             AEOBILITY PROJECT HEALTH AUDIT                     " -ForegroundColor Cyan
Write-Host "             Generated: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')              " -ForegroundColor Cyan
Write-Host "=================================================================`n" -ForegroundColor Cyan

$auditResults = [ordered]@{
    GitStatus = @{}
    LiveRoutes = @()
    SchemaCheck = @{}
    BrandCompliance = @{}
    AssetIntegrity = @{}
    MachineEndpoints = @()
}

# -------------------------------------------------------------------------
# 1. Git Repository & Remote Status
# -------------------------------------------------------------------------
Write-Host ">>> [1/6] Inspecting Git Repository & Sync Status..." -ForegroundColor Yellow

$branch = git rev-parse --abbrev-ref HEAD
$commit = git rev-parse --short HEAD
$commitMsg = git log -1 --pretty=%B | Select-Object -First 1
$gitStatus = git status --porcelain

$isClean = [string]::IsNullOrWhiteSpace($gitStatus)
Write-Host "  Current Branch:  $branch" -ForegroundColor Gray
Write-Host "  Latest Commit:   $commit - $commitMsg" -ForegroundColor Gray
Write-Host "  Working Tree:    $(if ($isClean) { 'Clean [PASS]' } else { 'Dirty [WARNING]' })" -ForegroundColor $(if ($isClean) { 'Green' } else { 'Yellow' })

$auditResults.GitStatus = @{
    Branch = $branch
    Commit = $commit
    Message = $commitMsg
    Clean = $isClean
}

# -------------------------------------------------------------------------
# 2. Live Production Route Rendering Check
# -------------------------------------------------------------------------
Write-Host "`n>>> [2/6] Auditing Live Production Route Rendering (aeobility.com.au)..." -ForegroundColor Yellow

$routesToTest = @(
    @{ Name = "Homepage"; Path = "/" },
    @{ Name = "About Us"; Path = "/about" },
    @{ Name = "Brand Facts Ledger"; Path = "/brand-facts" },
    @{ Name = "Diagnostic Engine"; Path = "/diagnostic" },
    @{ Name = "Core AEO Service"; Path = "/services/aeo" },
    @{ Name = "Solutions & Sprints"; Path = "/solutions" },
    @{ Name = "Founder Bio"; Path = "/vince-baker" },
    @{ Name = "Contact & Booking"; Path = "/contact" }
)

foreach ($r in $routesToTest) {
    $url = "https://aeobility.com.au$($r.Path)"
    try {
        $res = Invoke-WebRequest -Uri $url -Method Get -UseBasicParsing -TimeoutSec 15
        $html = $res.Content
        $status = $res.StatusCode
        $hasChildrenRendered = ($html -match '<main' -or $html -match 'id="about-us-content"' -or $html -match 'class="min-h-screen')
        $isFullBailout = (-not $hasChildrenRendered) -or ($html.Length -lt 20000 -and $html -match 'data-dgst="BAILOUT_TO_CLIENT_SIDE_RENDERING"')
        $hasTitle = $html -match '<title>(.*?)</title>'
        $title = if ($hasTitle) { $matches[1] } else { "NO TITLE" }
        
        $pass = ($status -eq 200) -and (-not $isFullBailout) -and $hasChildrenRendered
        $color = if ($pass) { 'Green' } else { 'Red' }

        Write-Host "  $($r.Name.PadRight(22)) [$status] $(if ($pass) { 'Rendered [PASS]' } else { 'Bailout/Missing Content [FAIL]' }) | Size: $($html.Length) bytes" -ForegroundColor $color

        $auditResults.LiveRoutes += @{
            Name = $r.Name
            Path = $r.Path
            Status = $status
            Rendered = $pass
            HasChildren = $hasChildrenRendered
            Size = $html.Length
            Title = $title
        }
    } catch {
        Write-Host "  $($r.Name.PadRight(22)) [ERROR: $($_.Exception.Message)]" -ForegroundColor Red
        $auditResults.LiveRoutes += @{
            Name = $r.Name
            Path = $r.Path
            Status = "ERROR"
            Error = $_.Exception.Message
        }
    }
}

# -------------------------------------------------------------------------
# 3. Homepage Schema & Tri-Graph Audit
# -------------------------------------------------------------------------
Write-Host "`n>>> [3/6] Auditing Live Homepage Schema Tri-Graph..." -ForegroundColor Yellow

try {
    $homeRes = Invoke-WebRequest -Uri "https://aeobility.com.au/" -Method Get -UseBasicParsing -TimeoutSec 15
    $homeHtml = $homeRes.Content
    
    $schemaMatches = [regex]::Matches($homeHtml, '<script[^>]*type="application/ld\+json"[^>]*>([\s\S]*?)</script>')
    Write-Host "  Found $($schemaMatches.Count) application/ld+json script block(s)" -ForegroundColor Gray

    $parsedGraph = $null
    foreach ($sm in $schemaMatches) {
        try {
            $json = $sm.Groups[1].Value.Trim() | ConvertFrom-Json
            if ($json.'@graph') {
                $hasOrg = $json.'@graph' | Where-Object { $_.'@id' -match '#organization' }
                if ($hasOrg) {
                    $parsedGraph = $json.'@graph'
                    break
                }
            }
        } catch {}
    }

    if ($parsedGraph) {
        $org = $parsedGraph | Where-Object { $_.'@id' -eq 'https://aeobility.com.au/#organization' }
        $website = $parsedGraph | Where-Object { $_.'@id' -eq 'https://aeobility.com.au/#website' }
        $webpage = $parsedGraph | Where-Object { $_.'@id' -eq 'https://aeobility.com.au/#webpage' }
        $person = $parsedGraph | Where-Object { $_.'@id' -eq 'https://aeobility.com.au/#vincebaker' }
        $catalog = $org.hasOfferCatalog
        $services = $parsedGraph | Where-Object { @($_.'@type') -contains 'Service' }
        $app = $parsedGraph | Where-Object { $_.'@id' -eq 'https://aeobility.com.au/#ai-bill' }
        $video = $parsedGraph | Where-Object { $_.'@id' -eq 'https://aeobility.com.au/#video-explainer' }

        Write-Host "  - Node 1: Organization / Brand:" -ForegroundColor Gray
        Write-Host "      Type:       $(($org.'@type') -join ', ')" -ForegroundColor $(if ($org.'@type' -contains 'Organization') { 'Green' } else { 'Yellow' })
        Write-Host "      Brand:      $($org.brand.name) - '$($org.brand.slogan)'" -ForegroundColor $(if ($org.brand) { 'Green' } else { 'Yellow' })
        Write-Host "      Legal Name: $($org.legalName)" -ForegroundColor Green

        Write-Host "  - Node 2: Value Proposition:" -ForegroundColor Gray
        Write-Host "      Slogan:     $($org.slogan)" -ForegroundColor $(if ($org.slogan) { 'Green' } else { 'Yellow' })
        Write-Host "      Disambig:   $(if ($org.disambiguatingDescription) { 'Present [PASS]' } else { 'Missing [FAIL]' })" -ForegroundColor $(if ($org.disambiguatingDescription) { 'Green' } else { 'Red' })

        Write-Host "  - Node 3: Service Offerings:" -ForegroundColor Gray
        Write-Host "      Catalog:    $($catalog.name) ($($catalog.itemListElement.Count) items)" -ForegroundColor $(if ($catalog.itemListElement.Count -ge 4) { 'Green' } else { 'Red' })
        Write-Host "      Services:   $($services.Count) Service node(s) in graph" -ForegroundColor $(if ($services.Count -ge 4) { 'Green' } else { 'Red' })

        Write-Host "  - Node 4: Geographic Anchor:" -ForegroundColor Gray
        Write-Host "      Address:    $($org.address.addressLocality), $($org.address.addressRegion) $($org.address.postalCode) $($org.address.addressCountry)" -ForegroundColor Green
        Write-Host "      Geo:        lat: $($org.geo.latitude), long: $($org.geo.longitude)" -ForegroundColor Green

        Write-Host "  - Node 5: Authority & Trust Signals:" -ForegroundColor Gray
        Write-Host "      Tax ID:     $($org.taxID)" -ForegroundColor Green
        Write-Host "      Founded:    $($org.foundingDate)" -ForegroundColor Green
        Write-Host "      sameAs:     $($org.sameAs.Count) verified links" -ForegroundColor $(if ($org.sameAs.Count -ge 7) { 'Green' } else { 'Yellow' })
        Write-Host "      Founder:    $($org.founder.'@id')" -ForegroundColor Green
        Write-Host "      subjectOf:  $($org.subjectOf.Count) inlined proof node(s)" -ForegroundColor $(if ($org.subjectOf.Count -ge 2) { 'Green' } else { 'Red' })

        Write-Host "  - Tri-Graph Nodes:" -ForegroundColor Gray
        Write-Host "      WebPage:    $(if ($webpage) { 'Present [PASS]' } else { 'Missing [WARN]' })" -ForegroundColor $(if ($webpage) { 'Green' } else { 'Yellow' })
        Write-Host "      WebSite:    $(if ($website) { 'Present [PASS]' } else { 'Missing [WARN]' })" -ForegroundColor $(if ($website) { 'Green' } else { 'Yellow' })
        Write-Host "      Person:     $(if ($person) { 'Present [PASS]' } else { 'Missing [WARN]' })" -ForegroundColor $(if ($person) { 'Green' } else { 'Yellow' })
        Write-Host "      AI Bill:    $(if ($app) { 'Present [PASS]' } else { 'Missing [WARN]' })" -ForegroundColor $(if ($app) { 'Green' } else { 'Yellow' })
        Write-Host "      Video:      $(if ($video) { 'Present [PASS]' } else { 'Missing [WARN]' })" -ForegroundColor $(if ($video) { 'Green' } else { 'Yellow' })

        $auditResults.SchemaCheck = @{
            GraphFound = $true
            OrgTypes = $org.'@type'
            HasBrand = ($null -ne $org.brand)
            HasSlogan = ($null -ne $org.slogan)
            Disambiguation = ($null -ne $org.disambiguatingDescription)
            OfferCatalogItems = $catalog.itemListElement.Count
            ServiceNodes = $services.Count
            Address = "$($org.address.addressLocality), $($org.address.postalCode)"
            TaxID = $org.taxID
            FoundingDate = $org.foundingDate
            SameAsCount = $org.sameAs.Count
            SubjectOfCount = $org.subjectOf.Count
            WebPageFound = ($null -ne $webpage)
            WebSiteFound = ($null -ne $website)
            PersonFound = ($null -ne $person)
        }
    } else {
        Write-Host "  No unified @graph found in live HTML!" -ForegroundColor Red
        $auditResults.SchemaCheck = @{ GraphFound = $false }
    }
} catch {
    Write-Host "  Error checking homepage schema: $($_.Exception.Message)" -ForegroundColor Red
}

# -------------------------------------------------------------------------
# 4. Brand & Copy Guidelines Compliance
# -------------------------------------------------------------------------
Write-Host "`n>>> [4/6] Verifying Brand Tone & Copy Rules..." -ForegroundColor Yellow

# A. Em-dash scan in source files
$allSourceFiles = Get-ChildItem -Path src -Recurse -Include *.tsx, *.ts
$emDashOccurrences = @()
foreach ($f in $allSourceFiles) {
    $content = [System.IO.File]::ReadAllText($f.FullName)
    if ($content -match [char]0x2014) {
        $emDashOccurrences += $f.FullName.Replace((Get-Location).Path + "\", "")
    }
}
$emDashPass = ($emDashOccurrences.Count -eq 0)
Write-Host "  Em-Dash Check (Brand Don't: No em-dash): $(if ($emDashPass) { 'ZERO FOUND [PASS]' } else { 'FOUND in ' + $emDashOccurrences.Count + ' file(s) [WARN]' })" -ForegroundColor $(if ($emDashPass) { 'Green' } else { 'Yellow' })

# B. Negative keyword check: "wheelchair" or affirmative "mobility equipment"
$mobilityCheck = @()
foreach ($f in $allSourceFiles) {
    $content = [System.IO.File]::ReadAllText($f.FullName)
    # Exclude negative disambiguation statements
    $stripped = $content -replace 'zero affiliation with physical mobility equipment', '' `
                         -replace 'zero relationship to physical mobility equipment', '' `
                         -replace 'Distinct from Seobility software and physical mobility equipment', '' `
                         -replace 'distinctFrom:[^,\n]*mobility equipment', ''
    if ($stripped -match 'wheelchair|mobility equipment') {
        $mobilityCheck += $f.FullName.Replace((Get-Location).Path + "\", "")
    }
}
$mobilityPass = ($mobilityCheck.Count -eq 0)
Write-Host "  Mobility Decoupling (No affirmative mobility): $(if ($mobilityPass) { 'CLEAN [PASS]' } else { 'FOUND in ' + $mobilityCheck.Count + ' file(s) [FAIL]' })" -ForegroundColor $(if ($mobilityPass) { 'Green' } else { 'Red' })

# C. Seobility mentions check (should only appear factually for disambiguation)
$seobilityOccurrences = @()
foreach ($f in $allSourceFiles) {
    $matchesCount = ([regex]::Matches(([System.IO.File]::ReadAllText($f.FullName)), 'Seobility')).Count
    if ($matchesCount -gt 0) {
        $seobilityOccurrences += "$($f.Name): $matchesCount occurrence(s)"
    }
}
Write-Host "  Seobility Mentions (Factual only):    $($seobilityOccurrences -join '; ')" -ForegroundColor Gray

$auditResults.BrandCompliance = @{
    EmDashClean = $emDashPass
    MobilityClean = $mobilityPass
    SeobilityFiles = $seobilityOccurrences
}

# -------------------------------------------------------------------------
# 5. Asset Integrity Audit
# -------------------------------------------------------------------------
Write-Host "`n>>> [5/6] Verifying Static Asset Integrity..." -ForegroundColor Yellow

$assetRegex = '[\x22\x27\x60](?:https:\/\/aeobility\.com\.au)?(\/(?:images|icons|files)\/[a-zA-Z0-9_\-\/%.]+\.(?:webp|png|jpg|jpeg|svg|gif|ico|pdf|vcf))[\x22\x27\x60]'
$checkedAssets = New-Object System.Collections.Generic.HashSet[string]
$missingAssets = @()
$validAssetsCount = 0

foreach ($f in $allSourceFiles) {
    $txt = [System.IO.File]::ReadAllText($f.FullName)
    $assetMatches = [regex]::Matches($txt, $assetRegex)
    foreach ($m in $assetMatches) {
        $clean = [System.Uri]::UnescapeDataString($m.Groups[1].Value).TrimStart('/')
        if ($checkedAssets.Add($clean)) {
            $diskPath = Join-Path "public" $clean
            if (Test-Path $diskPath) {
                $validAssetsCount++
            } else {
                $missingAssets += @{
                    Asset = $clean
                    ReferencedIn = $f.Name
                }
            }
        }
    }
}

$assetPass = ($missingAssets.Count -eq 0)
Write-Host "  Assets Scanned:  $($checkedAssets.Count)" -ForegroundColor Gray
Write-Host "  Verified Assets: $validAssetsCount [PASS]" -ForegroundColor Green
if (-not $assetPass) {
    Write-Host "  Missing Assets:  $($missingAssets.Count) [FAIL]" -ForegroundColor Red
    foreach ($ma in $missingAssets) {
        Write-Host "    - $($ma.Asset) (in $($ma.ReferencedIn))" -ForegroundColor Red
    }
} else {
    Write-Host "  Missing Assets:  0 [PASS]" -ForegroundColor Green
}

$auditResults.AssetIntegrity = @{
    TotalChecked = $checkedAssets.Count
    Verified = $validAssetsCount
    MissingCount = $missingAssets.Count
    Missing = $missingAssets
}

# -------------------------------------------------------------------------
# 6. Machine-Readable Endpoints & AI Agent Manifests
# -------------------------------------------------------------------------
Write-Host "`n>>> [6/6] Auditing Machine-Readable Protocols & Agent Manifests..." -ForegroundColor Yellow

$endpoints = @(
    @{ Name = "AGENTS.md"; Path = "/AGENTS.md"; Expected = "text/markdown" },
    @{ Name = "llms.txt"; Path = "/llms.txt"; Expected = "text" },
    @{ Name = "llms-full.txt"; Path = "/llms-full.txt"; Expected = "text" },
    @{ Name = "robots.txt"; Path = "/robots.txt"; Expected = "text" },
    @{ Name = "sitemap.xml"; Path = "/sitemap.xml"; Expected = "xml" },
    @{ Name = "site.webmanifest"; Path = "/site.webmanifest"; Expected = "manifest" },
    @{ Name = "AI Catalog"; Path = "/.well-known/ai-catalog.json"; Expected = "json" },
    @{ Name = "Poppy Agent"; Path = "/.well-known/poppy.json"; Expected = "json" }
)

foreach ($ep in $endpoints) {
    $url = "https://aeobility.com.au$($ep.Path)"
    try {
        $res = Invoke-WebRequest -Uri $url -Method Get -UseBasicParsing -TimeoutSec 10
        $status = $res.StatusCode
        $len = $res.Content.Length
        $ok = ($status -eq 200) -and ($len -gt 0)
        $color = if ($ok) { 'Green' } else { 'Red' }
        Write-Host "  $($ep.Name.PadRight(18)) [$status] $(if ($ok) { 'OK [PASS]' } else { 'FAIL' }) | Size: $len bytes" -ForegroundColor $color
        $auditResults.MachineEndpoints += @{
            Name = $ep.Name
            Path = $ep.Path
            Status = $status
            Size = $len
        }
    } catch {
        Write-Host "  $($ep.Name.PadRight(18)) [ERROR: $($_.Exception.Message)]" -ForegroundColor Red
        $auditResults.MachineEndpoints += @{
            Name = $ep.Name
            Path = $ep.Path
            Status = "ERROR"
            Error = $_.Exception.Message
        }
    }
}

# Save structured audit results
$jsonOut = $auditResults | ConvertTo-Json -Depth 5
[System.IO.File]::WriteAllText("scripts/health-audit-results.json", $jsonOut)
Write-Host "`n=================================================================" -ForegroundColor Cyan
Write-Host "Health Audit Complete! Saved report to scripts/health-audit-results.json" -ForegroundColor Cyan
Write-Host "=================================================================" -ForegroundColor Cyan
