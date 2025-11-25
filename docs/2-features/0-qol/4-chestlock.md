# Chest-Lock
## Description
Allows players to lock a configured amount of chest.<br/>
Locking prohibits access to the chest's contents through players other than the owner and OPs.<br/>
Also breaking the chest will be prohibited. TNT or Creepers (and so on) will ?not? be able to break the chest? ?If the chest is broken, but not by the owner, the contents wont drop.?

## Commands
### Player-Commands
- **`/lock`**<br/>
  Locks the chest, the player is looking at.
- **`/unlock`**<br/>
  Unlocks the chest, the player is looking at.

### Admin-Commands
- **`/suppa qol config chestlock max <amount>`**<br/>
  **Example:** /suppa qol config chestlock max 5
- **`/unlock`**<br/>
  Unlocks the chest, the player is looking at, even, if not the owner.

### Default Config
- **enabled:** false
- **max:** 5

## Version History
- **Introduced in** v???