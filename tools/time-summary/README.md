# Time Summary Calculator

Calculate total time spent from focus session logs for today.

## Features

- ✨ **Automatically shows today's summary** - No date needed!
- 📊 **Individual session breakdown** - See each focus session
- 🎯 **Total time calculation** - Hours and minutes format
- 🚀 **Written in Node.js** - Cross-platform, reliable
- 💬 **Friendly messages** - Clear, helpful output

## Usage

```bash
bin\summary.bat
```

The script automatically:
1. Gets the current date
2. Looks for the log file in `logs/focus/YYYYMMDD.txt`
3. Shows the summary if sessions exist
4. Displays a helpful message if no sessions found for today

## Example Output

**When you have sessions:**
```
📊 Focus Summary for 20260313
================================

Session 1: 30 minutes
Session 2: 25 minutes
Session 3: 45 minutes

================================
Total Sessions: 3
Total Time: 1 hours 40 minutes
================================
```

**When no sessions today:**
```
No focus sessions found for today (20260313).
Expected log file: C:\path\to\cli\logs\focus\20260313.txt

Start a focus session with: bin\focus.bat
```

## Input Format

Expects log files with format:
```
YYYYMMDD HH:MM:SS, YYYYMMDD HH:MM:SS
```

Each line represents one focus session with start and end times.

## Files

- `index.js` - Node.js implementation for reliable date handling
