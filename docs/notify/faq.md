# Frequently Asked Questions

<span class="badge info">FAQ</span>

Common questions about Fonseca Notify answered.

## General Questions

### What frameworks does Fonseca Notify support?

Fonseca Notify is **framework agnostic** and works with:
- ✅ **Qbox**
- ✅ **ESX**
- ✅ **QBCore**
- ✅ **Standalone** (no framework required)

### Does it really have 0.00ms resmon?

Yes! Fonseca Notify is built with React and optimized to have **zero idle performance impact**. The UI only activates when notifications are shown, and even then, the performance impact is negligible (typically 0.01-0.02ms during active notifications).

### Can I use this on multiple servers?

The license is per-server. If you own multiple servers, you'll need a license for each one. Contact us for bulk discounts.

### Is the source code included?

The script uses **FiveM Asset Escrow** protection:
- 🔓 **config.lua** - Fully open for customization
- 🔓 **manifest.lua** - Open source
- 🔒 **client.lua, server.lua, html/** - Encrypted

This protects your purchase while giving you full control over configuration.

## Installation & Setup

### Do I need to install any dependencies?

No! Fonseca Notify is completely **standalone** and has no dependencies. It works out of the box.

### Can I use it with my existing notification system?

Yes, but you'll need to replace your old notification exports with Fonseca Notify's export. We provide examples for migrating from common systems.

### How do I update to a new version?

Simply replace the old resource folder with the new one and restart the resource. Your `config.lua` settings will be preserved.

## Customization

### Can I change the notification position?

Absolutely! Edit `Config.Position` in `config.lua`:

```lua
Config.Position = 'top-right' -- Options: top-right, top-left, bottom-right, bottom-left, etc.
```

### Can I add my own custom notification types?

Yes! See the [Custom Types](/notify/custom-types) page for detailed instructions.

### Can I disable sounds?

Yes, in `config.lua`:

```lua
Config.Sound = {
    Enabled = false
}
```

### Can I change the colors?

Yes! All colors are customizable in `config.lua`. See [Configuration](/notify/configuration) for details.

## Performance & Compatibility

### Will this work with other UI resources?

Yes! Fonseca Notify is designed to work alongside other UI resources without conflicts.

### What's the minimum server version?

We recommend using the latest FiveM server artifacts. The script requires server build **5000+**.

### Can players disable notifications?

Not by default, but you can implement a client-side preference system using ESX/QB settings or a custom menu.

## Troubleshooting

### Notifications aren't showing up

See our [Troubleshooting](/notify/troubleshooting) page for detailed solutions.

### The notifications appear in the wrong position

Make sure you've set `Config.Position` correctly in `config.lua` and restarted the resource.

### Sounds aren't playing

1. Check that `Config.Sound.Enabled = true`
2. Verify sound volume is not set to 0
3. Check browser console (F8) for errors

## Support

### How do I get support?

Join our [Discord server](https://discord.gg/7FxW9JaDnx) for:
- 💬 Community support
- 🎫 Ticket system for buyers
- 📢 Update announcements

### Can I request features?

Absolutely! We actively listen to our community. Join our Discord and submit your suggestions in the #suggestions channel.

### Do you offer refunds?

Due to the digital nature of the product and FiveM Asset Escrow, we cannot offer refunds. Please check the demo video and documentation before purchasing.

---

::: tip Still have questions?
Join our [Discord community](https://discord.gg/7FxW9JaDnx) for live support!
:::
