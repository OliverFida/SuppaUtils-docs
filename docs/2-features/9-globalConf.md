# Global Config
## Description
Some configurations are done on a global-layer, instead of a feature-layer.

## Commands
### Admin-Commands
- **`/suppa global config <key> <value>`**<br/>
  **Example:** /suppa global config tpCooldown 30
- **`/suppa export`**<br/>
  Exports the current config to a json file in the `config` directory.
- **`/suppa import`**<br/>
  Imports the json file in the `config` directory as current config.

## Default Config
- **tpCooldown:** 30 (seconds)
  - Defines the cooldown between teleport commands like `/home` or `/spawn`.
- **tpCountdown:** 5 (seconds)
  - Defines the countdown for teleport commands like `/home` or `/spawn`.
- **tpInterDim:** false
  - Defines, if a player is allowed to teleport between dimensions.

## Version History
- **Introduced in** v0.4.0-beta