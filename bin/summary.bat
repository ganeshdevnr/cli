@echo off
REM Change to the repository root directory
cd /d "%~dp0\.."

REM Run the Node.js summary script
node tools/time-summary/index.js
