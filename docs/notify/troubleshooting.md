# Troubleshooting

<span class="badge warning">Solutions</span>

Common issues and their solutions for Fonseca Notify.

::: tip Quick Fix
Most issues can be resolved by ensuring the resource is started correctly and the configuration is valid.
:::

## Installation Issues

### Resource not starting

::: danger Error: "Resource fonseca_notify failed to start"

**Possible Causes:**
- Incorrect folder name
- Missing or corrupted files
- Server version too old

**Solutions:**

1. **Check folder name** - Must be exactly `fonseca_notify`
   ```bash
   # Correct:
   resources/fonseca_notify/
   
   # Wrong:
   resources/fonseca_notify-main/
   resources/fonseca-notify/
   ```

2. **Verify all files exist**
   ```
   fonseca_notify/
   ├── fxmanifest.lua
   ├── config.lua
   ├── client.lua (encrypted)
   ├── server.lua (encrypted)
   └── html/ (encrypted)
   ```

3. **Update your server** to build 5000+ (latest recommended)

4. **Check server console** for specific error messages
:::

### "ensure fonseca_notify" not working

Make sure the line is added to `server.cfg`:

```cfg
ensure fonseca_notify

# NOT:
start fonseca_notify  # This also works but 'ensure' is recommended
```

Restart your server completely after editing `server.cfg`.

## Notification Issues

### Notifications not showing

::: warning Notifications Don't Appear

**Troubleshooting Steps:**

1. **Test the notification system**
   ```lua
   -- In client console (F8):
   exports['fonseca_notify']:ShowNotification('success', 'Test', 'If you see this, it works!', 5000)
   ```

2. **Check if the resource is running**
   ```
   # In server console:
   status fonseca_notify
   
   # Or in client console (F8):
   resmon
   ```

3. **Verify the export syntax**
   ```lua
   -- Correct:
   exports['fonseca_notify']:ShowNotification('success', 'Title', 'Message', 5000)
   
   -- Wrong:
   exports['fonseca-notify']:ShowNotification(...)  -- Wrong resource name
   TriggerEvent('fonseca_notify', ...)  -- Wrong method
   ```

4. **Check for UI conflicts**
   - Temporarily disable other UI resources
   - Check browser console (F8) for JavaScript errors

5. **Ensure you're on the client side**
   ```lua
   -- Server-side (use TriggerClientEvent):
   TriggerClientEvent('fonseca_notify:show', source, 'success', 'Title', 'Message', 5000)
   
   -- Client-side (use export):
   exports['fonseca_notify']:ShowNotification('success', 'Title', 'Message', 5000)
   ```
:::

### Notifications appear in wrong position

1. **Check `config.lua`**
   ```lua
   Config.Position = 'top-right'  -- Make sure this is set correctly
   ```

2. **Valid positions:**
   - `'top-right'`
   - `'top-left'`
   - `'bottom-right'`
   - `'bottom-left'`
   - `'bottom-center'`
   - `'center-right'`
   - `'center-left'`

3. **Restart the resource** after changing config
   ```
   # In server console:
   restart fonseca_notify
   ```

### Notifications disappear too quickly/slowly

Adjust the duration parameter (in milliseconds):

```lua
-- 3 seconds
exports['fonseca_notify']:ShowNotification('info', 'Title', 'Message', 3000)

-- 7 seconds
exports['fonseca_notify']:ShowNotification('info', 'Title', 'Message', 7000)

-- Default (5 seconds) if omitted
exports['fonseca_notify']:ShowNotification('info', 'Title', 'Message')
```

## Sound Issues

### Sounds not playing

::: warning No Sound

**Solutions:**

1. **Enable sounds in config**
   ```lua
   Config.Sound = {
       Enabled = true,  -- Make sure this is true
       Volume = 0.5     -- 0.0 to 1.0
   }
   ```

2. **Check volume isn't muted**
   ```lua
   Config.Sound.Volume = 0.5  -- Should be > 0
   ```

3. **Verify game audio isn't muted**
   - Check GTA V sound settings
   - Check Windows volume mixer

4. **Restart the resource**
   ```
   restart fonseca_notify
   ```
:::

### Sounds too loud/quiet

Adjust in `config.lua`:

```lua
Config.Sound = {
    Enabled = true,
    Volume = 0.3  -- Lower = quieter (0.0 to 1.0)
}
```

## Custom Type Issues

### Custom type not showing correct icon/color

::: danger Custom Type Not Working

1. **Check the type is defined in config**
   ```lua
   Config.Types = {
       ['mytype'] = {
           color = '#10b981',
           icon = 'wallet',
           label = 'MY TYPE'
       }
   }
   ```

2. **Use the exact key name**
   ```lua
   -- Correct (matches the key):
   exports['fonseca_notify']:ShowNotification('mytype', 'Title', 'Message')
   
   -- Wrong:
   exports['fonseca_notify']:ShowNotification('MyType', ...)  -- Case sensitive!
   ```

3. **Verify icon name is supported** - See [Custom Types](/notify/custom-types) for valid icons

4. **Use valid hex color**
   ```lua
   color = '#10b981'  -- ✅ Correct
   color = '10b981'   -- ❌ Missing #
   color = 'green'    -- ❌ Not hex
   ```
:::

## Performance Issues

### High resmon usage

::: tip Normal Performance
Fonseca Notify should show **0.00ms** when idle and **0.01-0.02ms** when displaying notifications.
:::

If you're seeing high usage:

1. **Check for conflicts with other resources**
   - Disable other UI resources temporarily
   - Check for scripts that spam notifications

2. **Verify you're running latest version**

3. **Check for notification spam**
   ```lua
   -- Bad (creates infinite notifications):
   Citizen.CreateThread(function()
       while true do
           exports['fonseca_notify']:ShowNotification('info', 'Spam', 'This spams!')
           Citizen.Wait(0)  -- Too fast!
       end
   end)
   
   -- Good:
   Citizen.CreateThread(function()
       while true do
           exports['fonseca_notify']:ShowNotification('info', 'Good', 'Reasonable rate')
           Citizen.Wait(5000)  -- 5 seconds between notifications
       end
   end)
   ```

## Integration Issues

### ESX/QB integration not working

**For ESX:**
```lua
-- Replace ESX notifications with Fonseca Notify
ESX.ShowNotification = function(msg, type, duration)
    local notifType = type or 'info'
    exports['fonseca_notify']:ShowNotification(notifType, 'Notification', msg, duration or 5000)
end
```

**For QBCore:**
```lua
-- In qb-core/client/functions.lua, replace QBCore.Functions.Notify
QBCore.Functions.Notify = function(text, texttype, length)
    local type = texttype or 'info'
    local duration = length or 5000
    exports['fonseca_notify']:ShowNotification(type, 'Notification', text, duration)
end
```

## Browser/UI Issues

### UI not visible or glitched

1. **Clear FiveM cache**
   - Close FiveM completely
   - Navigate to `%localappdata%/FiveM/FiveM Application Data/cache`
   - Delete everything in the cache folder
   - Restart FiveM

2. **Check for JavaScript errors**
   - Press F8 in game
   - Look for red errors in console
   - Screenshot and send to support

3. **Verify NUI is enabled**
   - Make sure you don't have NUI disabled in any other resources

## Still Having Issues?

::: tip Get Help
If none of these solutions work:

1. **Join our Discord** - [discord.gg/7FxW9JaDnx](https://discord.gg/7FxW9JaDnx)
2. **Open a support ticket** with:
   - Your server.cfg line for fonseca_notify
   - Server console logs
   - Client F8 console screenshot
   - Description of the issue
   - Steps to reproduce

We're here to help! 💚
:::
