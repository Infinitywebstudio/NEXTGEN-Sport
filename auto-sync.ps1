# NEXGEN SPORT - Auto Sync Script
# Surveillance automatique des mises à jour GitHub

$host.UI.RawUI.WindowTitle = "NEXGEN SPORT - Auto Sync"

# Couleurs
$colorPrimary = "Cyan"
$colorSuccess = "Green"
$colorWarning = "Yellow"
$colorError = "Red"
$colorInfo = "White"

# Configuration
$interval = 10  # Intervalle en secondes entre chaque vérification
$repo = "origin"
$branch = "main"

# Banner
Clear-Host
Write-Host ""
Write-Host "============================================" -ForegroundColor $colorPrimary
Write-Host "   NEXGEN SPORT - AUTO SYNC" -ForegroundColor $colorPrimary
Write-Host "   Surveillance des mises à jour GitHub" -ForegroundColor $colorPrimary
Write-Host "============================================" -ForegroundColor $colorPrimary
Write-Host ""

# Vérifier si c'est un repo Git
Set-Location $PSScriptRoot

if (-not (Test-Path ".git")) {
    Write-Host "[ERREUR] Ce dossier n'est pas un repo Git !" -ForegroundColor $colorError
    Write-Host "Veuillez d'abord initialiser le repo avec 'git init'" -ForegroundColor $colorError
    pause
    exit 1
}

Write-Host "[INFO] Démarrage de la surveillance..." -ForegroundColor $colorInfo
Write-Host "[INFO] Vérification toutes les $interval secondes" -ForegroundColor $colorInfo
Write-Host "[INFO] Appuyez sur Ctrl+C pour arrêter" -ForegroundColor $colorWarning
Write-Host ""

# Fonction pour obtenir le hash du commit
function Get-CommitHash {
    param($ref)
    return (git rev-parse $ref 2>$null)
}

# Fonction pour afficher un timestamp
function Get-Timestamp {
    return Get-Date -Format "yyyy-MM-dd HH:mm:ss"
}

# Fonction pour envoyer une notification Windows (optionnel)
function Send-Notification {
    param($title, $message)

    try {
        $null = [Windows.UI.Notifications.ToastNotificationManager, Windows.UI.Notifications, ContentType = WindowsRuntime]
        # Note: Notifications Windows 10+ nécessitent plus de configuration
        # On se contente d'un beep pour l'instant
        [Console]::Beep(800, 200)
    } catch {
        # Ignore si pas supporté
    }
}

# Boucle de surveillance
$checkCount = 0

while ($true) {
    $checkCount++
    $timestamp = Get-Timestamp

    Write-Host "[$timestamp] " -NoNewline -ForegroundColor $colorInfo
    Write-Host "Vérification #$checkCount..." -ForegroundColor $colorInfo

    # Fetch les dernières modifications
    try {
        $fetchResult = git fetch $repo $branch 2>&1

        if ($LASTEXITCODE -ne 0) {
            Write-Host "[ERREUR] Impossible de contacter le repo distant" -ForegroundColor $colorError
            Write-Host "        Vérifiez votre connexion Internet" -ForegroundColor $colorWarning
        } else {
            # Comparer local vs distant
            $localHash = Get-CommitHash "HEAD"
            $remoteHash = Get-CommitHash "$repo/$branch"

            if ($localHash -ne $remoteHash) {
                Write-Host ""
                Write-Host "============================================" -ForegroundColor $colorSuccess
                Write-Host "   🔔 MISE À JOUR DÉTECTÉE !" -ForegroundColor $colorSuccess
                Write-Host "============================================" -ForegroundColor $colorSuccess
                Write-Host ""

                # Beep de notification
                [Console]::Beep(1000, 300)
                Start-Sleep -Milliseconds 100
                [Console]::Beep(1200, 300)

                # Afficher les changements
                Write-Host "[INFO] Nouveaux commits :" -ForegroundColor $colorInfo
                git log HEAD..$repo/$branch --oneline --decorate --color=always
                Write-Host ""

                # Vérifier s'il y a des modifications locales
                $hasLocalChanges = git diff --quiet; $LASTEXITCODE -ne 0

                if ($hasLocalChanges) {
                    Write-Host "[INFO] Sauvegarde des modifications locales..." -ForegroundColor $colorWarning
                    git stash push -m "Auto-stash $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
                    $stashed = $true
                } else {
                    $stashed = $false
                }

                # Mettre à jour
                Write-Host "[INFO] Téléchargement des mises à jour..." -ForegroundColor $colorInfo
                $pullResult = git pull $repo $branch --no-edit 2>&1

                if ($LASTEXITCODE -eq 0) {
                    Write-Host ""
                    Write-Host "[✓ SUCCÈS] Fichiers locaux mis à jour !" -ForegroundColor $colorSuccess
                    Write-Host ""

                    # Afficher les fichiers modifiés
                    Write-Host "[INFO] Fichiers modifiés :" -ForegroundColor $colorInfo
                    git diff --name-status HEAD@{1} HEAD
                    Write-Host ""

                    # Restaurer les modifications locales si nécessaire
                    if ($stashed) {
                        Write-Host "[INFO] Restauration des modifications locales..." -ForegroundColor $colorInfo
                        git stash pop
                    }

                    # Notification sonore de succès
                    [Console]::Beep(800, 150)
                    Start-Sleep -Milliseconds 50
                    [Console]::Beep(1000, 150)
                    Start-Sleep -Milliseconds 50
                    [Console]::Beep(1200, 300)

                } else {
                    Write-Host "[✗ ERREUR] Échec de la mise à jour" -ForegroundColor $colorError
                    Write-Host $pullResult -ForegroundColor $colorError

                    if ($stashed) {
                        Write-Host "[INFO] Restauration des modifications locales..." -ForegroundColor $colorInfo
                        git stash pop
                    }
                }

                Write-Host "============================================" -ForegroundColor $colorSuccess
                Write-Host ""

            } else {
                Write-Host "        [✓ OK] Aucune mise à jour" -ForegroundColor $colorSuccess
            }
        }

    } catch {
        Write-Host "[ERREUR] Une erreur s'est produite : $_" -ForegroundColor $colorError
    }

    # Attendre avant la prochaine vérification
    Write-Host "        Prochaine vérification dans $interval secondes..." -ForegroundColor DarkGray
    Write-Host ""
    Start-Sleep -Seconds $interval
}
