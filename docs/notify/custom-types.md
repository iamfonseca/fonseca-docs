# Custom Types

<span class="badge success">Unlimited Possibilities</span>

You can define your own notification types in `config.lua`. This allows you to create specific notifications for jobs (Police, EMS), systems (Bank, Inventory), or events.

::: tip Use Cases
- 👮 Job-specific alerts (Police, EMS, Mechanic)
- 💰 System notifications (Banking, Inventory, Housing)
- 🎮 Game events (Death, Level Up, Achievements)
- 📱 Custom integrations (Phone, Radio, GPS)
:::

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

::: details 🎨 Available Icon Library
The following icon names are supported (from **Lucide React**):

**Finance & Commerce:**
- `wallet`, `money`

**Emergency Services:**
- `shield`, `police`

**Vehicles & Transportation:**
- `car`, `vehicle`

**Health & Medical:**
- `skull`, `death`, `heart`

**Jobs & Services:**
- `tool`, `mechanic`

**Security & Access:**
- `lock`

**Navigation & Location:**
- `map`, `home`

**Communication:**
- `radio`, `bell`

**General:**
- `user`, `file`

**Default Types:**
- `success`, `error`, `info`, `warning`, `server`

💡 **Want more icons?** Request them on our Discord!
:::
