# Git Backup Tool

Automated git backup for personal and office vaults (Obsidian or other repositories).

## Features

- Quick backup with single command
- Separate personal and office vaults
- Automatic git add, commit, and push
- Error handling and validation

## Usage

```bash
# Backup personal vault
bin\backup.bat personal

# Backup office vault
bin\backup.bat office
```

## Configuration

Set environment variables for vault locations:
```
PERSONAL_VAULT_PATH=C:\path\to\Personal_Vault
OFFICE_VAULT_PATH=C:\path\to\Office_Vault
```

Default paths:
- Personal: `C:\github\Personal_Vault`
- Office: `C:\github\Office_Vault`

## Requirements

- Git must be installed and available in PATH
