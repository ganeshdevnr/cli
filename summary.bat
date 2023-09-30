@echo off
setlocal enabledelayedexpansion

if "%~1"=="" (
    echo No file path provided.
    goto :eof
)

set /a total_seconds=0

for /f "tokens=1,2 delims=," %%a in ('type "%~1"') do (
    set start_time=%%a
    set end_time=%%b

    for /f "tokens=2,3,4 delims=: " %%i in ("!start_time!") do (
        set hh1=%%i
        set mm1=%%j
        set ss1=%%k
    )

    for /f "tokens=2,3,4 delims=: " %%i in ("!end_time!") do (
        set hh2=%%i
        set mm2=%%j
        set ss2=%%k
    )

    :: Calculate the hour, minute, and second differences separately
    set /a hour_diff = hh2 - hh1
    set /a hour_diff = hour_diff * 3600
    set /a min_diff = mm2 - mm1
    set /a min_diff = min_diff * 60
    set /a sec_diff = ss2 - ss1

    :: Sum up the differences to get the total difference in seconds
    set /a diff_seconds = hour_diff + min_diff + sec_diff

    :: Add to total time
    set /a total_seconds += diff_seconds

    set /a diff_minutes = diff_seconds / 60

    :: Output block-wise time difference
    echo Block difference: !diff_minutes! minutes
)

:: Calculate total hours and remaining minutes
set /a total_hours = total_seconds / 3600
set /a remaining_seconds = total_seconds %% 3600
set /a remaining_minutes = remaining_seconds / 60

:: Output the total time
echo Total time: !total_hours! hours !remaining_minutes! minutes


:eof
