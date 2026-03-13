# CLI Tools Collection

A collection of portable, productivity-focused CLI tools for Windows. All tools are modular, well-organized, and completely portable - no hardcoded paths!

## 🚀 Quick Start

1. **Clone this repository** to any location on your system
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Add to PATH** (optional but recommended):
   - Add `<repo-path>\bin` to your system PATH
   - Access all tools from anywhere!
4. **Configure** (optional):
   - Copy `.env.example` to `.env`
   - Set environment variables for your preferences

## 📦 Available Tools

| Tool | Command | Description |
|------|---------|-------------|
| **Focus Timer** | `bin\focus.bat [duration]` | Productivity timer with audio notification |
| **Dictionary** | `bin\lookup.bat [word]` | Quick Cambridge Dictionary lookup |
| **Backup** | `bin\backup.bat [vault]` | Git backup automation for vaults |
| **Password Gen** | `bin\password.bat` | Secure password generator |
| **PKM Launcher** | `bin\pkm.bat [vault]` | Quick Obsidian vault launcher |
| **Time Summary** | `bin\summary.bat` | Calculate today's focus time |

## 📖 Detailed Documentation

Each tool has its own README with detailed usage instructions:

- [Focus Timer](tools/focus-timer/README.md)
- [Dictionary Lookup](tools/dictionary/README.md)
- [Backup Tool](tools/backup/README.md)
- [Password Generator](tools/password-gen/README.md)
- [PKM Launcher](tools/pkm-launcher/README.md)
- [Time Summary](tools/time-summary/README.md)

## 🗂️ Project Structure

```
cli/
├── bin/                          # Root launchers (add to PATH)
│   ├── focus.bat
│   ├── backup.bat
│   ├── lookup.bat
│   ├── password.bat
│   ├── pkm.bat
│   └── summary.bat
│
├── tools/                        # Individual tool implementations
│   ├── focus-timer/
│   │   ├── index.js
│   │   ├── README.md
│   │   └── assets/
│   ├── dictionary/
│   │   ├── index.js
│   │   └── README.md
│   ├── backup/
│   ├── password-gen/
│   ├── pkm-launcher/
│   └── time-summary/
│
├── logs/                         # Shared logs directory
│   ├── focus/
│   └── dictionary/
│
├── shared/                       # Shared utilities
├── archive/                      # Old versions
├── .env.example                  # Configuration template
├── package.json
└── README.md
```

## ⚙️ Environment Variables

Optional configuration via `.env` file:

```bash
# Focus Timer - Media Player
MEDIA_PLAYER_PATH="C:\Program Files\VLC\vlc.exe"

# Backup Tool - Vault Paths
PERSONAL_VAULT_PATH=C:\path\to\Personal_Vault
OFFICE_VAULT_PATH=C:\path\to\Office_Vault

# Password Generator - Output Directory
PASSWORD_OUTPUT_DIR=C:\path\to\passwords
```

## 🎯 Usage Examples

```bash
# Show help for focus timer
bin\focus.bat --help

# Start a 30-minute focus session
bin\focus.bat

# Start a 15-minute short session
bin\focus.bat short

# Look up a word
bin\lookup.bat serendipity

# Backup personal vault
bin\backup.bat personal

# Generate a secure password
bin\password.bat

# Show today's focus time summary
bin\summary.bat
```

## 🔧 Adding New Tools

1. Create new directory in `tools/`
2. Add launcher script in `bin/`
3. Update this README
4. Add tool-specific README

## 📝 Notes

- All tools use relative paths - fully portable!
- Logs are stored in `logs/` directory
- Each tool is self-contained and modular
- Environment variables are optional with sensible defaults 
