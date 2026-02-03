import { defineConfig } from 'vitepress'
import sidebar from './sidebar.mjs'

export default defineConfig({
  title: "Nagamax Documentation",
  description: "Nagamax user guide & tutorial",
  base: '/NAGAMAX/',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Overview', link: '/overview' },
      { text: 'Getting Started', link: '/getting-started' }
    ],

    sidebar
  }
})
