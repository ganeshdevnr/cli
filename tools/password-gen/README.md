# Password Generator

Generate secure random passwords with customizable options.

## Features

- Customizable password length
- Include/exclude character types (uppercase, lowercase, numbers, symbols)
- Purpose tracking
- Automatic saving to file
- Interactive prompts with defaults

## Usage

```bash
bin\password.bat
```

Follow the interactive prompts:
1. Enter password length (default: 12)
2. Enter purpose/description
3. Choose character types (y/n for each)

## Configuration

Set output directory via environment variable:
```
PASSWORD_OUTPUT_DIR=C:\path\to\passwords
```

Default: `%USERPROFILE%\Documents\Generated Passwords`

## Output

All generated passwords are appended to `passwords.txt` in the output directory with their purpose.

**Note**: Keep this file secure!
