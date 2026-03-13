# Focus Timer

A productivity timer that runs for configurable durations and plays an audio notification when complete.

## Features

- **Configurable durations**: short (15 min), medium (30 min), long (45 min)
- **Pause/Resume**: Press `p` to pause, `r` to resume
- **Session logging**: Automatically logs all focus sessions
- **Audio notification**: Plays custom message when timer completes
- **Custom message display**: Types out a motivational message

## Usage

From repository root or via PATH:
```bash
# Show help and available options
bin\focus.bat --help

# Default duration (30 minutes)
bin\focus.bat
bin\focus.bat medium

# Short session (15 minutes)
bin\focus.bat short

# Long session (45 minutes)
bin\focus.bat long
```

## Configuration

### Media Player
Set environment variable to use a different media player:
```
MEDIA_PLAYER_PATH="C:\Program Files\VLC\vlc.exe"
```

Default: Windows Media Player

## Files

- `index.js` - Main timer logic
- `assets/timeout-message.txt` - Message displayed when timer completes
- `assets/timeout-message-v2.m4a` - Audio file played at completion

## Logs

Session logs are saved to `logs/focus/YYYYMMDD.txt` with start and end times.
