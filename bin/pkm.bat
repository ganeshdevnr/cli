@echo off

if "%1"=="personal" (
    start obsidian://open?vault=Personal_Vault
) else if "%1"=="office" (
    start obsidian://open?vault=Office_Vault
) else (
    echo Invalid parameter.
)
