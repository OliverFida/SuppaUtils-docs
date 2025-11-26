# Spawn / Homes
## Description
Allows players to set a home position they can later teleport to and from.

When executing `/home`, a configurable countdown of x seconds starts.<br/>
When the countdown is done, and the player hasn't moved in the meantime, the player gets teleported to the home position.<br/>
Same goes for the `/spawn` command.

When executing `/back`, the countdown starts as well.<br/>
When the countdown is done, and the player hasn't moved in the meantime, the player gets teleported to the position he was, before executing `/home`.<br/>
Both commands have a configurable cooldown.

## Commands
### Player-Commands
- **`/homes`**<br/>
  Displays a list of all set' homes.
- **`/sethome`**<br/>
  Sets a home with the default name "Home".
- **`/sethome <name>`**<br/>
  **Example:** /sethome Cave
  Sets a home with the name "Cave".
- **`/home`**<br/>
  Teleports to default home "Home".
- **`/spawn`**<br/>
  Teleports to spawn.
- **`/home <name>`**<br/>
  **Example:** /home Cave
  Teleports to home "Cave".
- **`/back`**

### Admin-Commands
- **`/suppa qol enable/disable spawn`**
- **`/suppa qol enable/disable homes`**
- **`/suppa qol config homes cooldown <seconds>`**<br/>
  **Example:** /suppa qol config homes cooldown 30
- **`/suppa qol config homes countdown <seconds>`**<br/>
  **Example:** /suppa qol config homes countdown 5
- **`/suppa qol config homes max <amount>`**<br/>
  **Example:** /suppa qol config homes max 3
- **`/setspawn`**

## Default Config
- **cooldown:** 30 (seconds)
- **countdown:** 5 (seconds)

## Version History
- **Introduced in** v0.2.0-beta