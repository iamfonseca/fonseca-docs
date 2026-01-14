# Configuration

<span class="badge success">Highly Customizable</span>

The resource is highly configurable via `config.lua`. All settings are well-documented and easy to modify.

::: tip Quick Start
Most users can start with the default settings. Only modify what you need!
:::

## Global Settings

| Setting | Description | Default |
| :--- | :--- | :--- |
| `Config.Position` | Where notifications appear. Options: `'top-right'`, `'top-left'`, `'bottom-right'`, `'bottom-left'`, `'bottom-center'`, `'center-right'`, `'center-left'` | `'top-right'` |

## Sound Settings

```lua
Config.Sound = {
    Enabled = true, -- Enable/Disable sound effects
    Volume = 0.5    -- Volume (0.0 to 1.0)
}
```

## Colors

::: warning Color Customization
You can override the default colors for the standard types. Use hex color codes for best results.
:::

Available notification types: `success`, `error`, `info`, `warning`, `server`

```lua
Config.Colors = {
    success = '#34d399', -- Emerald Green
    error = '#f43f5e',   -- Rose Red
    info = '#60a5fa',    -- Blue
    warning = '#f59e0b', -- Amber
    server = '#c084fc'   -- Purple
}
```

::: tip Color Picker
Use a hex color picker to find your perfect colors: [coolors.co](https://coolors.co)
:::
