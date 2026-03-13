@echo off
REM Change to the repository root directory
cd /d "%~dp0\.."

REM Check if an argument was provided. If not, default to 'medium'
IF "%1"=="" (
    call node tools/focus-timer/index.js medium
) ELSE (
    call node tools/focus-timer/index.js %1
)

REM The script will pause here, waiting for user input before closing
pause
