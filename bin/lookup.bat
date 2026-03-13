@echo off
REM Change to the repository root directory
cd /d "%~dp0\.."
node tools/dictionary/index.js %*
exit
