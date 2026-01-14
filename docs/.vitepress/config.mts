import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/fonseca-docs/', // Change to your GitHub repo name
    title: "Fonseca Scripts",
    description: "Premium FiveM Resources Documentation",
    head: [
        ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
        ['meta', { name: 'theme-color', content: '#1EFF43' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:locale', content: 'en' }],
        ['meta', { property: 'og:title', content: 'Fonseca Scripts | Premium FiveM Resources' }],
        ['meta', { property: 'og:description', content: 'High-quality, optimized, and modern resources for your FiveM server.' }],
        ['meta', { property: 'og:site_name', content: 'Fonseca Scripts' }]
    ],
    cleanUrls: true,
    themeConfig: {
        logo: '/logo.png',
        
        nav: [
            { text: 'Home', link: '/' },
            {
                text: 'Resources',
                items: [
                    { text: 'Fonseca Notify', link: '/notify/installation' }
                ]
            },
            {
                text: 'v1.0.0',
                items: [
                    { text: 'Changelog', link: '/changelog' },
                    { text: 'Contributing', link: '/contributing' }
                ]
            }
        ],

        sidebar: {
            // Sidebar for Notify Docs
            '/notify/': [
                {
                    text: 'Getting Started',
                    collapsed: false,
                    items: [
                        { text: 'Installation', link: '/notify/installation' },
                        { text: 'Configuration', link: '/notify/configuration' }
                    ]
                },
                {
                    text: 'Advanced',
                    collapsed: false,
                    items: [
                        { text: 'Custom Types', link: '/notify/custom-types' },
                        { text: 'Developers', link: '/notify/developers' },
                        { text: 'Examples', link: '/notify/examples' }
                    ]
                },
                {
                    text: 'Support',
                    collapsed: false,
                    items: [
                        { text: 'FAQ', link: '/notify/faq' },
                        { text: 'Troubleshooting', link: '/notify/troubleshooting' }
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
            { icon: 'github', link: 'https://github.com/iamfonseca' },
            { icon: 'discord', link: 'https://discord.gg/7FxW9JaDnx' }
        ],

        footer: {
            message: 'Released under proprietary license.',
            copyright: 'Copyright © 2025-2026 Fonseca'
        },

        search: {
            provider: 'local',
            options: {
                detailedView: true
            }
        },

        editLink: {
            pattern: 'https://github.com/iamfonseca/fonseca-docs/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },

        outline: {
            level: [2, 3],
            label: 'On this page'
        }
    },

    markdown: {
        theme: {
            light: 'github-light',
            dark: 'github-dark'
        },
        lineNumbers: true
    }
})
