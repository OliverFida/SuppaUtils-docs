# Spawn
## Description
Allows admins to set a spawn position the players can later teleport to.

When executing `/spawn`, a configurable countdown of x seconds starts.<br/>
When the countdown is done, and the player hasn't moved in the meantime, the player gets teleported to the spawn position.<br/>

When executing `/back`, the countdown starts as well.<br/>
When the countdown is done, and the player hasn't moved in the meantime, the player gets teleported to the position he was, before executing `/spawn`.<br/>
Both commands have a configurable cooldown.

## Commands
### Player-Commands
- **`/spawn`**<br/>
  Teleports to spawn.
- **`/back`**

### Admin-Commands
- **`/suppa qol enable/disable spawn`**
- **`/setspawn`**

## Default Config
- **enabled:** false

## Version History
- **Introduced in** v0.4.0-beta