# Inventory Watcher
## Description
Watches all players (if not excepted for global rules) and removes items from their inventory, according to configured rules.<br/>
Also player-specific rules are possible.

## Commands
### Player-Commands
- **`/allowed <item>`**<br/>
  **Example:** /allowed tnt<br/>
  Tells the player, how many of a specific item he is allowed to carry.

### Admin-Commands
- **`/suppa safety config inventory <"global"/player> <item> <amount/"clear">`**<br/>
  **Example:** /suppa safety config inventory global tnt 8<br/>
  Allows every player to carry at max 8 tnt.<br/>
  **Example:** /suppa safety config inventory XortiX_ORG tnt 64<br/>
  Allows XortiX_ORG to carry at max 64 tnt. (Player-Rules override global ones.)<br/>
  **Example:** /suppa safety config inventory XortiX_ORG tnt clear<br/>
  Allows XortiX_ORG to carry at max 8 tnt. (Player-Rules has been cleared -> Applying global rule.)
- **`/suppa safety config inventory <player> ignore <"true"/"false">`**<br/>
  **Example:** /suppa safety config inventory XortiX_ORG ignore true<br/>
  Stops applying Inventory-Watcher rules to XortiX_ORG.

## Default Config
- **enables:** false
- **rules:** empty

## Version History
- **Introduced in** v???