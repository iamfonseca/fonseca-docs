# Examples

<span class="badge success">Code Samples</span>

Real-world examples and use cases for Fonseca Notify.

---

## Basic Examples

### Simple Notification

```lua
-- Show a basic success message
exports['fonseca_notify']:ShowNotification(
    'success',
    'Welcome',
    'You have joined the server!',
    5000
)
```

### All Default Types

```lua
-- Success
exports['fonseca_notify']:ShowNotification('success', 'Success', 'Operation completed!', 5000)

-- Error
exports['fonseca_notify']:ShowNotification('error', 'Error', 'Something went wrong!', 5000)

-- Info
exports['fonseca_notify']:ShowNotification('info', 'Information', 'Here is some info.', 5000)

-- Warning
exports['fonseca_notify']:ShowNotification('warning', 'Warning', 'Be careful!', 5000)

-- Server
exports['fonseca_notify']:ShowNotification('server', 'Server', 'Server announcement', 5000)
```

---

## Framework Integration

### ESX Integration

```lua
-- In your ESX resource or config

-- Override ESX.ShowNotification
ESX.ShowNotification = function(msg, type, duration)
    local notifType = type or 'info'
    local notifDuration = duration or 5000
    
    exports['fonseca_notify']:ShowNotification(
        notifType,
        'Notification',
        msg,
        notifDuration
    )
end

-- Usage (works exactly like before):
ESX.ShowNotification('You received $500!', 'success')
```

### QBCore Integration

```lua
-- In qb-core/client/functions.lua

-- Replace QBCore.Functions.Notify
QBCore.Functions.Notify = function(text, texttype, length)
    local type = texttype or 'primary'
    local duration = length or 5000
    
    -- Map QBCore types to Fonseca types
    local typeMap = {
        ['primary'] = 'info',
        ['success'] = 'success',
        ['error'] = 'error',
        ['warning'] = 'warning',
        ['info'] = 'info'
    }
    
    local notifType = typeMap[type] or 'info'
    
    exports['fonseca_notify']:ShowNotification(
        notifType,
        'Notification',
        text,
        duration
    )
end

-- Usage (works exactly like before):
QBCore.Functions.Notify('Job started!', 'success')
```

### Standalone Usage

```lua
-- No framework needed!
RegisterCommand('notify', function()
    exports['fonseca_notify']:ShowNotification(
        'info',
        'Command',
        'This works without any framework!',
        5000
    )
end, false)
```

---

## Job System Examples

### Police Alert

```lua
-- config.lua
Config.Types = {
    ['police'] = {
        color = '#3b82f6',
        icon = 'shield',
        label = 'PD ALERT'
    }
}

-- Client script
RegisterNetEvent('police:alert')
AddEventHandler('police:alert', function(message)
    exports['fonseca_notify']:ShowNotification(
        'police',
        '10-99 - Officer Down',
        message,
        7000
    )
end)
```

### EMS Alert

```lua
-- config.lua
Config.Types = {
    ['ems'] = {
        color = '#ef4444',
        icon = 'heart',
        label = 'EMS'
    }
}

-- Client script
function SendEMSAlert(location)
    exports['fonseca_notify']:ShowNotification(
        'ems',
        'Medical Emergency',
        'Patient needs assistance at ' .. location,
        6000
    )
end
```

### Mechanic Job

```lua
-- config.lua
Config.Types = {
    ['mechanic'] = {
        color = '#f59e0b',
        icon = 'tool',
        label = 'MECHANIC'
    }
}

-- Client script
RegisterNetEvent('mechanic:notification')
AddEventHandler('mechanic:notification', function(type, message)
    if type == 'repair' then
        exports['fonseca_notify']:ShowNotification(
            'mechanic',
            'Repair Complete',
            message,
            5000
        )
    elseif type == 'call' then
        exports['fonseca_notify']:ShowNotification(
            'mechanic',
            'Service Call',
            message,
            7000
        )
    end
end)
```

---

## Game System Examples

### Banking System

```lua
-- config.lua
Config.Types = {
    ['bank'] = {
        color = '#10b981',
        icon = 'wallet',
        label = 'BANKING'
    }
}

-- Client script
RegisterNetEvent('bank:notify')
AddEventHandler('bank:notify', function(action, amount)
    if action == 'deposit' then
        exports['fonseca_notify']:ShowNotification(
            'bank',
            'Deposit Successful',
            string.format('$%s deposited to your account', amount),
            5000
        )
    elseif action == 'withdraw' then
        exports['fonseca_notify']:ShowNotification(
            'bank',
            'Withdrawal Successful',
            string.format('$%s withdrawn from your account', amount),
            5000
        )
    elseif action == 'transfer' then
        exports['fonseca_notify']:ShowNotification(
            'bank',
            'Transfer Complete',
            string.format('$%s transferred successfully', amount),
            5000
        )
    end
end)
```

### Inventory System

```lua
-- Item received
RegisterNetEvent('inventory:itemAdded')
AddEventHandler('inventory:itemAdded', function(itemLabel, count)
    exports['fonseca_notify']:ShowNotification(
        'success',
        'Item Received',
        string.format('You received %dx %s', count, itemLabel),
        4000
    )
end)

-- Item removed
RegisterNetEvent('inventory:itemRemoved')
AddEventHandler('inventory:itemRemoved', function(itemLabel, count)
    exports['fonseca_notify']:ShowNotification(
        'warning',
        'Item Removed',
        string.format('You lost %dx %s', count, itemLabel),
        4000
    )
end)

-- Inventory full
RegisterNetEvent('inventory:full')
AddEventHandler('inventory:full', function()
    exports['fonseca_notify']:ShowNotification(
        'error',
        'Inventory Full',
        'You cannot carry any more items!',
        3000
    )
end)
```

### Death System

```lua
-- config.lua
Config.Types = {
    ['death'] = {
        color = '#dc2626',
        icon = 'skull',
        label = 'WASTED'
    }
}

-- Client script
AddEventHandler('gameEventTriggered', function(name, args)
    if name == 'CEventNetworkEntityDamage' then
        local victim = args[1]
        local attacker = args[2]
        
        if victim == PlayerPedId() and IsPedDeadOrDying(victim, true) then
            exports['fonseca_notify']:ShowNotification(
                'death',
                'You Died',
                'You have been wasted!',
                5000
            )
        end
    end
end)
```

---

## Server-Side Examples

### Server Announcement

```lua
-- Server script
RegisterCommand('announce', function(source, args)
    local message = table.concat(args, ' ')
    
    TriggerClientEvent('fonseca_notify:show', -1, 
        'server',
        'Server Announcement',
        message,
        10000
    )
end, true) -- Restricted to admins
```

### Player Join Notification

```lua
-- Server script
AddEventHandler('playerJoining', function(oldID)
    local src = source
    local playerName = GetPlayerName(src)
    
    TriggerClientEvent('fonseca_notify:show', -1,
        'info',
        'Player Joined',
        playerName .. ' joined the server',
        5000
    )
end)
```

### Transaction Notification

```lua
-- Server script
RegisterServerEvent('transaction:complete')
AddEventHandler('transaction:complete', function(targetId, amount)
    local src = source
    local senderName = GetPlayerName(src)
    
    -- Notify sender
    TriggerClientEvent('fonseca_notify:show', src,
        'success',
        'Payment Sent',
        string.format('You sent $%s', amount),
        5000
    )
    
    -- Notify receiver
    TriggerClientEvent('fonseca_notify:show', targetId,
        'success',
        'Payment Received',
        string.format('You received $%s from %s', amount, senderName),
        5000
    )
end)
```

---

## Advanced Examples

### Conditional Notifications

```lua
-- Show different messages based on conditions
function NotifyHealth(health)
    if health <= 20 then
        exports['fonseca_notify']:ShowNotification(
            'error',
            'Critical Health',
            'You are badly injured!',
            5000
        )
    elseif health <= 50 then
        exports['fonseca_notify']:ShowNotification(
            'warning',
            'Low Health',
            'You should heal yourself.',
            4000
        )
    else
        exports['fonseca_notify']:ShowNotification(
            'success',
            'Healthy',
            'You are in good condition.',
            3000
        )
    end
end
```

### Cooldown System

```lua
local lastNotification = 0
local cooldown = 5000 -- 5 seconds

function NotifyWithCooldown(type, title, message)
    local currentTime = GetGameTimer()
    
    if currentTime - lastNotification >= cooldown then
        exports['fonseca_notify']:ShowNotification(type, title, message, 5000)
        lastNotification = currentTime
    end
end

-- Usage
NotifyWithCooldown('info', 'Spam Protection', 'This respects cooldown!')
```

### Dynamic Custom Types

```lua
-- Server script - Create job-specific notification on the fly
RegisterServerEvent('job:notify')
AddEventHandler('job:notify', function(jobName, message)
    local src = source
    
    -- Map job to notification type
    local jobTypes = {
        ['police'] = 'police',
        ['ambulance'] = 'ems',
        ['mechanic'] = 'mechanic',
        ['taxi'] = 'info'
    }
    
    local notifType = jobTypes[jobName] or 'info'
    
    TriggerClientEvent('fonseca_notify:show', src,
        notifType,
        string.upper(jobName),
        message,
        6000
    )
end)
```

---

## Testing Command

```lua
-- Useful for testing all notification types
RegisterCommand('testnotify', function()
    -- Test all default types
    exports['fonseca_notify']:ShowNotification('success', 'Success Test', 'This is a success message', 5000)
    Wait(1000)
    exports['fonseca_notify']:ShowNotification('error', 'Error Test', 'This is an error message', 5000)
    Wait(1000)
    exports['fonseca_notify']:ShowNotification('info', 'Info Test', 'This is an info message', 5000)
    Wait(1000)
    exports['fonseca_notify']:ShowNotification('warning', 'Warning Test', 'This is a warning message', 5000)
    Wait(1000)
    exports['fonseca_notify']:ShowNotification('server', 'Server Test', 'This is a server message', 5000)
end, false)
```

---

::: tip Need More Examples?
Check out our [Discord community](https://discord.gg/7FxW9JaDnx) for more examples shared by other developers!
:::

::: warning Remember
Always test your notifications on a development server first before deploying to production!
:::
