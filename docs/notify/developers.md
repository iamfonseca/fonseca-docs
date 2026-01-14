# Developer Guide

<span class="badge success">API Reference</span> <span class="badge info">v1.0.0</span>

::: tip For Developers
This guide covers all exports and events available in Fonseca Notify. Perfect for integrating with your custom scripts.
:::

## Client Export

Use this export in any client-side script to show a notification.

```lua
exports['fonseca_notify']:ShowNotification(type, title, message, duration)
```

### Arguments

| Argument | Type | Description |
| :--- | :--- | :--- |
| `type` | string | `'success'`, `'error'`, `'info'`, `'warning'`, `'server'` OR a custom type (e.g., `'bank'`). |
| `title` | string | The main title text. |
| `message` | string | The body message. |
| `duration` | number | (Optional) Duration in ms. Default is 5000. |

### Example

```lua
exports['fonseca_notify']:ShowNotification(
    'success',
    'System Access',
    'Welcome back, user.',
    5000
)
```

## Server Event

You can trigger notifications directly from the server.

```lua
TriggerClientEvent('fonseca_notify:show', source, type, title, message, duration)
```

### Example (Server-Side)

```lua
RegisterCommand('hello', function(source)
    TriggerClientEvent('fonseca_notify:show', source, 'info', 'Hello', 'World from Server!', 3000)
end)
```

::: warning Best Practices
- ✅ Always validate user input before showing notifications
- ✅ Use appropriate durations (3000-7000ms recommended)
- ✅ Don't spam notifications - users will miss important ones
- ✅ Use custom types for better organization
- ❌ Avoid showing notifications in tight loops
:::

## 📝 Complete Example

Here's a real-world example integrating Fonseca Notify with a banking system:

```lua
-- Client-side banking transaction
RegisterNetEvent('bank:transaction', function(type, amount)
    local title = type == 'deposit' and 'Bank Deposit' or 'Bank Withdrawal'
    local message = ('$%s has been %s your account'):format(amount, type == 'deposit' and 'added to' or 'withdrawn from')
    
    exports['fonseca_notify']:ShowNotification(
        type == 'deposit' and 'success' or 'warning',
        title,
        message,
        5000
    )
end)
```
