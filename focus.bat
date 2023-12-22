@echo off
cd C:\github\cli

REM Check if an argument was provided. If not, default to 'medium'
IF "%1"=="" (
    node timer.js medium
) ELSE (
    node timer.js %1
)

exit
