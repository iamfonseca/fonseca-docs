import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/fonseca-docs/',
    title: "Fonseca Scripts",
    description: "Premium FiveM Resources Documentation",
    themeConfig: {
        logo: '/logo.png', // You can add a logo.png to docs/public later
        nav: [
            { text: 'Home', link: '/' },
            {
                text: 'Resources',
                items: [
                    { text: 'Fonseca Notify', link: '/notify/installation' }
                ]
            }
        ],

        sidebar: {
            // Sidebar for Notify Docs
            '/notify/': [
                {
                    text: 'Fonseca Notify',
                    items: [
                        { text: 'Installation', link: '/notify/installation' },
                        { text: 'Configuration', link: '/notify/configuration' },
                        { text: 'Custom Types', link: '/notify/custom-types' },
                        { text: 'Developers', link: '/notify/developers' }
                    ]
                }
            ],

            // Default Sidebar (Home)
            '/': [
                {
                    text: 'Available Scripts',
                    items: [
                        { text: 'Fonseca Notify', link: '/notify/installation' }
                    ]
                }
            ]
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/iamfonseca' }
        ],

        footer: {
            message: 'Released under proprietary license.',
            copyright: 'Copyright © 2025 Fonseca'
        }
    }
})
