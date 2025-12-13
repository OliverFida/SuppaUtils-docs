# TPA
## Description
Allows players to send a teleport request to another player using the `/tpa` command.

The targeted player can then use `/accept` or `/deny` to do either with the request.

When the targeted player accepts the request, a configurable countdown of x seconds starts.<br/>
When the countdown is done, and the player hasn't moved in the meantime, the player gets teleported to the targeted player.

When executing `/back`, the countdown starts as well.<br/>
When the countdown is done, and the player hasn't moved in the meantime, the player gets teleported to the position he was, before executing `/tpa`.<br/>
Both commands have a configurable cooldown.

## Commands
### Player-Commands
- **`/tpa <player>`**<br/>
  **Example:** /tpa XortiX_ORG<br/>
  Sends a teleport request to XortiX_ORG.
- **`/accept`**<br/>
  Accepts the last received request.
- **`/deny`**<br/>
  Denies the last received request.
- **`/back`**

### Admin-Commands
- **`/suppa qol enable/disable tpa`**

## Default Config
- **enabled:** false

## Version History
- **Introduced in** v0.4.0-beta