import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Knowledge Base",
  description: "Cashlify - Knowledge Base",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Feedback', link: 'https://thoughtaspires.featurebase.app/' },
      { text: 'Roadmap', link: 'https://thoughtaspires.featurebase.app/roadmap' },
      { text: 'Changelog', link: 'https://thoughtaspires.userjot.com/updates'},
      // Dropdown menu enablement
      {
        text: 'Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' }
        ]
      }
    ], //end nav
    logo: '/favicon.svg',
  
    // Footer configuration
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Akbar Sait'
    },
    sidebar: [
      {
        text: 'Vite Examples',
        collapsed: true,
        items: [
          { text: 'Vitepress Guide', link: '/guides/vitepress' },
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Cashlify Guides',
        items: [
          { text: 'Account Transfer', link: '/guides/transfers' },
          { text: 'Categories', link: '/guides/categories' },
          { text: 'Powered by PowerBoy', string: 'https://akbarsait.com' }
        ]
      },
      {
        text: 'ThoughtAspires Guides',
        items: [
          { text: 'Git Workflow', link: '/guides/gitnetlify' },
          { text: 'Deployment Process', link: '/guides/deployprocess' },
          { text: 'Cashlify Test Cases', link: '/guides/testcase' },
          { text: 'Cashlify Test Automation', link: '/guides/testautomation' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/akbarsait' }, 
      { icon: 'github', link: 'https://github.com/akbarsait' }
    ]

  }
})
