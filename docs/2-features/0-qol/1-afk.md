# AFK
## Description
After a configured time of no movement and no chat messages, a player gets flagged as AFK.<br />
In the player list, a `[AFK]` tag is added, and the player is shown in gray.<br />
Also, a chat message gets sent, if configured.

## Commands
### Player-Commands
- **`/afk`**<br />
  Flags the player as AFK immediately

### Admin-Commands
- **`/suppa qol enable/disable afk`**
- **`/suppa qol config afk timeout <seconds>`**<br />
  **Example:** /suppa qol config afk timeout 300

## Default Config
- **enabled:** false
- **timeout:** 300 seconds (5 minutes)

## Version History
- **Introduced in** v0.1.0-beta
- **v0.2.0-beta**:
  - Added configurability using commands.