@echo off
REM Raccourci pour lancer Auto-Sync en PowerShell (Recommandé)
REM Double-cliquez sur ce fichier pour démarrer la synchronisation automatique

echo.
echo Lancement de Auto-Sync en PowerShell...
echo.

powershell.exe -ExecutionPolicy Bypass -File "%~dp0auto-sync.ps1"

pause
