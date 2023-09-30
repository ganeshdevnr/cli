@echo off

if "%1"=="personal" (
    start obsidian://open?vault=Personal
) else if "%1"=="office" (
    start obsidian://open?vault=Office
) else (
    echo Invalid parameter.
)
