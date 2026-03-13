@echo off
REM Change to the directory where this batch file is located
cd /d "%~dp0"

REM Check if an argument was provided. If not, default to 'medium'
IF "%1"=="" (
    call node timer.js medium
) ELSE (
    call node timer.js %1
)

REM The script will pause here, waiting for user input before closing
pause
