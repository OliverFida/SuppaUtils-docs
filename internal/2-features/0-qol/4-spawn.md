# Spawn
## Description
Allows admins to set a spawn position the players can later teleport to.

When executing `/spawn`, a configurable countdown of x seconds starts.<br/>
When the countdown is done, and the player hasn't moved in the meantime, the player gets teleported to the spawn position.<br/>
The command has a configurable cooldown.

## Commands
### Player-Commands
- **`/spawn`**<br/>
  Teleports to spawn.

### Admin-Commands
- **`/suppa qol enable/disable spawn`**
- **`/setspawn`**

## Default Config
- **enabled:** false
- **cooldown:** 30 (seconds)
- **countdown:** 5 (seconds)
- **interDim:** false

## Version History
- **Introduced in** v0.4.0-beta