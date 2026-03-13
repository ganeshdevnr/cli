# Dictionary Lookup

Quickly look up word definitions in Cambridge Dictionary and log searched words.

## Features

- Opens Cambridge Dictionary in Chrome browser
- Logs all searched words to JSON file
- Simple command-line interface

## Usage

```bash
bin\lookup.bat [word]
```

Example:
```bash
bin\lookup.bat serendipity
```

## Logs

All searched words are saved to `logs/dictionary/words.json` for reference.

## Files

- `index.js` - Main dictionary lookup logic
