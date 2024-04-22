import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: "蘅州社区",
  description: "Ghenchow",
  ignoreDeadLinks: true,
  cleanUrls: true,

  themeConfig: {
    search: {
      provider: 'local'
    },

    nav: [
      { text: '主页', link: '/' },
      { text: '指南', link: '/guide/', },
      { text: '规划', link: '/plan/', },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/InnovaCreation/Ghenchow-Docs' },
    ],

    footer: {
      message: 'Released under the GPL-3.0 License.',
      copyright: `Copyright © 2023-${new Date().getFullYear()} InnovaCreation`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      level: [2, 3],
      label: '页面导航'
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    sidebar: {
      '/guide/': [
        {
          text: '快速开始',
          items: [
            { text: '关于蘅州', link: '/guide/' },
          ]
         },
       {
        text: '游览手册',
        collapsed: false,
        items: [
          { text: '蘅州博物院', link: '/guide/landscape/01' },
          { text: '玄妙观', link: '/guide/landscape/02' },
          { text: '生秋园', link: '/guide/landscape/03' },
          { text: '蘅州府城隍庙', link: '/guide/landscape/04' },
          { text: '罗汉院与定慧寺', link: '/guide/landscape/05' },
          { text: '蘅州天主堂', link: '/guide/landscape/06' },
          { text: '万寿宫', link: '/guide/landscape/07' },
          { text: '西园寺', link: '/guide/landscape/08' },
          { text: '蘅州方塔寺', link: '/guide/landscape/09' }
        ]
       },
       {
        text: '建设指南',
        collapsed: false,
        items: [
          { text: '快速入门', link: '/guide/help/tips' },
          { text: '建筑工具', link: '/guide/help/tools' }
        ]
       }
      ],
      '/plan/': [
        {
        text: '蘅州规划',
        items: [
          { text: '总体规划', link: '/plan/' },
          { text: '详细规划', link: '/plan/full' },
          { text: '规划参考', link: '/plan/reference' }
        ]
       }
      ]
    },
  }
})