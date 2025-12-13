# Warps
## Description
Allows admins to set a warp positions the players can later teleport to and from.

When executing `/warp`, a configurable countdown of x seconds starts.<br/>
When the countdown is done, and the player hasn't moved in the meantime, the player gets teleported to the warp position.

When executing `/back`, the countdown starts as well.<br/>
When the countdown is done, and the player hasn't moved in the meantime, the player gets teleported to the position he was, before executing `/warp`.<br/>
Both commands have a configurable cooldown.

## Commands
### Player-Commands
- **`/warps`**<br/>
  Displays a list of all set' warps.
- **`/warp <name>`**<br/>
  **Example:** /warp Event<br/>
  Teleports to warp "Event".
- **`/back`**

### Admin-Commands
- **`/suppa qol enable/disable warps`**
- **`/setwarp <name>`**<br/>
  **Example:** /setwarp Event<br/>
  Sets a warp with the name "Event".
- **`/delwarp <name>`**<br/>
  **Example:** /delwarp Event<br/>
  Deletes the warp with the name "Event".

## Default Config
- **enabled:** false

## Version History
- **Introduced in** v0.4.0-beta