@echo off

:: Variables
set soundFile="C:\Users\ganesh.nr\Documents\Batch\assets\timeout.mp3"
set mediaApp="C:\Program Files (x86)\Windows Media Player\wmplayer.exe"

:: Existing Code: Get the start date and time
set currentDate=%date:~-4,4%%date:~-7,2%%date:~-10,2%
set currentTime=%time:~0,8%
set startTime="%currentDate% %currentTime%"
set logFile="C:\Users\ganesh.nr\Documents\Batch\logs\focus\%currentDate%.txt"

:: Display the timer
echo Starting a 30-minute timer...

:: Run the timer
for /l %%i in (10,-1,0) do (
    echo|set /p ="   ^r"  :: Clear the last three characters with spaces
    echo|set /p ="%%i^r"  :: Write the new time
    timeout /t 1 > NUL
)


:: Existing Code: Log the end time
set currentDate=%date:~-4,4%%date:~-7,2%%date:~-10,2%
set currentTime=%time:~0,8%
set endTime="%currentDate% %currentTime%"
echo %startTime%, %endTime% >> %logFile%

:: Play the sound after the timer
start %mediaApp% %soundFile%

:: Give it a few seconds to play
timeout /t 5 > NUL

:: Return the cursor
echo.

exit /b
