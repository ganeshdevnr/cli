@echo off
setlocal EnableDelayedExpansion

:: Destination folder
set "destFolder=C:\Users\ganesh.nr\Documents\Generated Passwords"
if not exist "!destFolder!" mkdir "!destFolder!"

:: User input for password length with default 12
set /p "length=Enter password length (Default is 12): "
if "%length%"=="" set "length=12"

:: User input for password purpose
set /p "purpose=Enter the purpose for this password: "

:: Checkbox selections with default y
set /p "uppercase=Include Uppercase letters (y/n, default is y)? "
if "%uppercase%"=="" set "uppercase=y"
set /p "lowercase=Include Lowercase letters (y/n, default is y)? "
if "%lowercase%"=="" set "lowercase=y"
set /p "numbers=Include Numbers (y/n, default is y)? "
if "%numbers%"=="" set "numbers=y"
set /p "symbols=Include Symbols (y/n, default is y)? "
if "%symbols%"=="" set "symbols=y"

:: Defining characters based on selections
set "charset="
if /i "%uppercase%"=="y" set "charset=!charset!ABCDEFGHIJKLMNOPQRSTUVWXYZ"
if /i "%lowercase%"=="y" set "charset=!charset!abcdefghijklmnopqrstuvwxyz"
if /i "%numbers%"=="y" set "charset=!charset!0123456789"
if /i "%symbols%"=="y" set "charset=!charset!@#$%^&*()-_=+<>?[]{}|;:.,~"

:: Get the length of the charset
set "charsetLength=0"
:countLoop
if not "!charset:~%charsetLength%,1!"=="" (
    set /a "charsetLength+=1"
    goto countLoop
)

:: Generating password
set "password="
for /l %%i in (1,1,%length%) do (
    set /a "rand=!random! %% !charsetLength!"
    for %%a in (!rand!) do set "password=!password!!charset:~%%a,1!"
)

echo Generated password: !password!
echo !purpose! !password! >> "!destFolder!\passwords.txt"
echo Password for '!purpose!' saved to "!destFolder!\passwords.txt"
pause
