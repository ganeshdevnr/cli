@echo off
setlocal
set "word=%~1"

if "%word%"=="" (
    echo You must provide a word as a parameter.
    goto :EOF
)

set "url=https://dictionary.cambridge.org/dictionary/english/%word%"

start chrome "%url%"
