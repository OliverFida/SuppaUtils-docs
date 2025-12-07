# Initials
## Description
Configurable initials are displayed in front of the players name.<br />
`XortiX_ORG` becomes `[OF] XortiX_ORG`

## Commands
### Admin-Commands
- **`/suppa qol enable/disable initials`**
- **`/suppa initials set <player> <initials>`**<br />
  **Example:** /suppa initials set XortiX_ORG OF
- **`/suppa initials remove <player>`**<br />
  **Example:** /suppa initials remove XortiX_ORG
- **`/suppa initials import`**<br/>
  Updates initials based on `suppautils-initials.csv` file, if it exists.
- **`/suppa initials clear`**<br/>

## Import
Initials can be imported in bulk via a `suppautils-initials.csv` file in the `config` directory of the server.<br/>
If the file is present, it will be imported automatically on server start.<br/>
Alternatively, the import can be started via an admin command.

Fill the file with entries like this:

```
Username1;U1
Username2;U2
XortiX_ORG;OF
```

If a player has no initials yet, they get added from the file.<br/>
If a player already has initials, they get updated from the file.

After successful import, the file gets renamed to `suppautils-initials_done.csv`, so it wont get imported again.

## Default Config
- **enabled:** false
- **Initials List:** empty

## Version History
- **Introduced in** v0.1.0-beta
- **v0.2.0-beta**:
  - Added commands.
- **v0.3.0-beta**:
  - Added configurability using commands.
  - Added import.