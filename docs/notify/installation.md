# Installation

<span class="badge success">v1.0.0</span> <span class="badge info">Stable</span>

Follow these steps to install **Fonseca Notify** on your FiveM server.

<div class="perf-indicator">⚡ 0.00ms Resmon Impact - Zero performance impact on your server</div>

## Prerequisites

::: info Framework Compatibility
Works with **Qbox**, **ESX**, **QBCore**, or **Standalone** servers.
:::

- ✅ A FiveM Server (Qbox, ESX, QBCore, or Standalone)
- ✅ Basic knowledge of FiveM resource management
- ⚠️ (Optional) `ox_lib` if you want to use advanced features

## Steps

1. **Download & Extract**
   - Download the `fonseca_notify` resource from your Keymaster/Tebex.
   - Extract it to your `resources` folder.

2. **Add to server.cfg**
   Add the following line to your `server.cfg`:

   ```bash
   ensure fonseca_notify
   ```

3. **Verify Installation**
   - Start your server.
   - Type `/testnotify` in your client console (F8) or chat (if enabled).
   - You should see a series of notifications.

::: details 🛡️ Asset Protection (Escrow)
This script uses **FiveM Asset Escrow** protection:

**Open Source Files:**
- ✅ `config.lua` - Fully customizable
- ✅ `manifest.lua` - Visible for debugging

**Protected Files:**
- 🔒 `client.lua` - Encrypted
- 🔒 `server.lua` - Encrypted  
- 🔒 `html/` - Encrypted

This ensures your purchase is protected while keeping configuration accessible.
:::
