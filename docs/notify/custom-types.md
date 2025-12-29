# Custom Types

You can define your own notification types in `config.lua`. This allows you to create specific notifications for jobs (Police, EMS), systems (Bank, Inventory), or events.

## How to Add a Type

Add a new entry to the `Config.Types` table. The key (e.g., `['bank']`) is the name you use in the export.

```lua
Config.Types = {
    ['bank'] = {
        color = '#10b981', -- Hex Color
        icon = 'wallet',   -- Icon Name
        label = 'BANKING'  -- Small label text
    },
    ['police'] = {
        color = '#3b82f6',
        icon = 'shield',
        label = 'PD ALERT'
    }
}
```

## Supported Icons

The following icon names are supported (from Lucide React):

- `wallet`, `money`
- `shield`, `police`
- `car`, `vehicle`
- `skull`, `death`
- `heart`
- `tool`, `mechanic`
- `lock`
- `map`
- `user`
- `home`
- `radio`
- `file`
- `bell`
- `success`, `error`, `info`, `warning`, `server`
