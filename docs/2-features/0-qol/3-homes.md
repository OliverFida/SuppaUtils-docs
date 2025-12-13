# Homes
## Description
Allows players to set a home position they can later teleport to and from.

When executing `/home`, a configurable countdown of x seconds starts.<br/>
When the countdown is done, and the player hasn't moved in the meantime, the player gets teleported to the home position.

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
  **Example:** /sethome Cave<br/>
  Sets a home with the name "Cave".
- **`/home`**<br/>
  Teleports to default home "Home".
- **`/home <name>`**<br/>
  **Example:** /home Cave<br/>
  Teleports to home "Cave".
- **`/delhome`**<br/>
  Deletes the home with the default name "Home", except there are more than just the default "Home" available.
- **`/delhome <name>`**<br/>
  **Example:** /delhome Cave<br/>
  Deletes the home with the name "Cave".
- **`/back`**

### Admin-Commands
- **`/suppa qol enable/disable homes`**
- **`/suppa qol config homes max <amount>`**<br/>
  **Example:** /suppa qol config homes max 3
- **`/suppa qol config homes allowNether true/false`**<br/>
  **Example:** /suppa qol config homes allowNether true<br/>
  If enabled, allows players to set homes in the Nether.
- **`/suppa qol config homes allowEnd true/false`**<br/>
  **Example:** /suppa qol config homes allowEnd true<br/>
  If enabled, allows players to set homes in the End dimension.

## Default Config
- **enabled:** false
- **maxHomes:** 3
- **allowNether:** false
- **allowEnd:** false

## Version History
- **Introduced in** v0.4.0-beta