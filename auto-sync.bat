@echo off
chcp 65001 >nul
color 0A
echo.
echo ============================================
echo   NEXGEN SPORT - AUTO SYNC
echo   Surveillance des mises à jour GitHub
echo ============================================
echo.

cd /d "%~dp0"

:check_git
git rev-parse --git-dir >nul 2>&1
if errorlevel 1 (
    echo [ERREUR] Ce dossier n'est pas un repo Git !
    echo Initialisation requise...
    pause
    exit /b 1
)

echo [INFO] Démarrage de la surveillance...
echo [INFO] Appuyez sur Ctrl+C pour arrêter
echo.

:loop
    echo [%date% %time:~0,8%] Vérification des mises à jour...

    REM Récupérer les dernières infos du repo distant
    git fetch origin claude/remove-attacker-label-01MneqeauuAUhrjKKRJCHKQS --quiet 2>nul

    if errorlevel 1 (
        echo [ERREUR] Impossible de contacter le repo distant
        goto wait
    )

    REM Comparer la branche locale avec la distante
    for /f %%i in ('git rev-parse HEAD') do set LOCAL=%%i
    for /f %%i in ('git rev-parse origin/claude/remove-attacker-label-01MneqeauuAUhrjKKRJCHKQS') do set REMOTE=%%i

    if not "%LOCAL%"=="%REMOTE%" (
        echo.
        echo ============================================
        echo   MISE À JOUR DÉTECTÉE !
        echo ============================================
        echo.

        REM Afficher les changements
        echo [INFO] Changements détectés :
        git log HEAD..origin/claude/remove-attacker-label-01MneqeauuAUhrjKKRJCHKQS --oneline --decorate --color=always
        echo.

        REM Sauvegarder les modifications locales si nécessaire
        git diff --quiet
        if errorlevel 1 (
            echo [INFO] Sauvegarde des modifications locales...
            git stash push -m "Auto-stash avant sync %date% %time:~0,8%"
            set STASHED=1
        ) else (
            set STASHED=0
        )

        REM Mettre à jour
        echo [INFO] Téléchargement des mises à jour...
        git pull origin claude/remove-attacker-label-01MneqeauuAUhrjKKRJCHKQS --no-edit

        if errorlevel 1 (
            echo [ERREUR] Échec de la mise à jour
            if "%STASHED%"=="1" (
                echo [INFO] Restauration des modifications locales...
                git stash pop
            )
        ) else (
            echo.
            echo [SUCCÈS] Fichiers locaux mis à jour !
            echo.

            REM Lister les fichiers modifiés
            echo [INFO] Fichiers modifiés :
            git diff --name-status HEAD@{1} HEAD
            echo.

            if "%STASHED%"=="1" (
                echo [INFO] Restauration des modifications locales...
                git stash pop
            )
        )

        echo ============================================
        echo.
    ) else (
        echo [OK] Aucune mise à jour
    )

:wait
    echo [INFO] Prochaine vérification dans 10 secondes...
    echo.
    timeout /t 10 /nobreak >nul
    goto loop
