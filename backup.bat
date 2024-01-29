@echo off
setlocal

:: Check for the command line argument
if "%~1"=="" (
    echo Usage: %0 [personal/office]
    exit /b 1
)

:: Set paths for personal and office
set "personalPath=C:\github\Personal_Vault"
set "officePath=C:\github\Office_Vault""

:: Determine the selected option based on the command-line argument
if /i "%~1"=="personal" (
    set "repoPath=%personalPath%"
) else if /i "%~1"=="office" (
    set "repoPath=%officePath%"
) else (
    echo Invalid argument. Use 'personal' or 'office'.
    exit /b 1
)

:: Check if git is available
where git >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo 'git' command is not available. Please check if Git is installed and added to PATH.
    exit /b 1
)

:: Perform the backup in the selected directory
echo Performing daily backup in the %~1 repository...
cd /d "%repoPath%" || (
    echo Failed to change directory to %repoPath%
    exit /b 1
)

:: Executing Git commands
git add .
git commit -m "daily backup"
git push

echo Backup completed successfully.
endlocal
