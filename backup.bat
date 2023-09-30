@echo off
setlocal enabledelayedexpansion


:: Menu Options
set "options=personal office"
set "selected=personal"

:menu
cls
echo Choose an option:
echo [1] Personal
echo [2] Office

choice /c 12 /n /m "Select an option (1/2): "
if errorlevel 2 (
    set "selected=office"
) else if errorlevel 1 (
    set "selected=personal"
)

:: Confirm the selection
echo You've selected: !selected!
choice /c yn /m "Are you sure you want to proceed? (y/n): "
if errorlevel 2 goto :menu

goto :end

:end
if "!selected!"=="personal" (
    cd "C:\Users\ganesh.nr\Documents\Obsidian Vault\Personal"
) else if "!selected!"=="office" (
    cd "C:\Users\ganesh.nr\Documents\Obsidian Vault\Office"
)

echo Performing daily backup in "!selected!" directory...

git add .
git commit -m "daily backup"
git push

:: Reset text color to default
color

echo Backup completed successfully.
pause
endlocal
