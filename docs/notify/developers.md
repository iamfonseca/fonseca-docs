# Developer Guide

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
