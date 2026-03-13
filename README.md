# CLI Timer Application

A simple, portable timer application that runs for configurable durations (15, 30, or 45 minutes) and plays a recorded message when complete.

## Features

- Configurable timer durations (short: 15 min, medium: 30 min, long: 45 min)
- Pause/resume functionality
- Automatic logging of focus sessions
- Audio notification with custom message when timer completes
- Fully portable - no hardcoded paths!

## Setup

1. **Clone or download** this repository to any location on your system
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Optional: Configure media player** (if not using Windows Media Player):
   - Copy `.env.example` to `.env`
   - Set `MEDIA_PLAYER_PATH` to your preferred media player

## Usage

Simply run the batch file from anywhere:

```bash
# Run with default duration (30 minutes)
focus.bat

# Run with short duration (15 minutes)
focus.bat short

# Run with long duration (45 minutes)
focus.bat long
```

### During Timer:
- Press `p` to pause
- Press `r` to resume
- Press `Ctrl+C` to exit

## Project Structure

```
cli/
├── focus.bat              # Main launcher script
├── timer.js               # Timer application logic
├── assets/                # Audio and message files
│   ├── timeout-message.txt
│   └── timeout-message-v2.m4a
└── logs/focus/            # Session logs (auto-created)
```

## Environment Variables

- `MEDIA_PLAYER_PATH` (optional): Path to your preferred media player executable. Defaults to Windows Media Player if not set.

## How It Works

1. The batch file changes to its own directory automatically using `%~dp0`
2. All paths in the Node.js script are relative to `__dirname`
3. Logs are automatically created in the `logs/focus/` directory
4. No manual path configuration needed! 
