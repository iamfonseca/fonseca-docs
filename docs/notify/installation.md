# Installation

Follow these steps to install **Fonseca Notify** on your FiveM server.

## Prerequisites
- A FiveM Server (Qbox, ESX, QBCore, or Standalone).
- (Optional) `ox_lib` if you want to use advanced features (referenced in code, though strictly standalone for now).

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

## Protection (Asset Escrow)
If you purchased this script, it uses FiveM Asset Escrow.
- `config.lua` is open source.
- `manifest.lua` is open source.
- `client.lua`, `server.lua`, and `html` are encrypted.
