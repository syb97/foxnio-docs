import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'FOXNIO 使用文档',
  description: 'FOXNIO API 中转服务站使用指南',
  cleanUrls: true,
  themeConfig: {
    outline: { level: [2, 3], label: '本页目录' },
    nav: [
      { text: '首页', link: '/' },
      { text: '使用指南', link: '/guide/registration' },
      { text: '部署指南', items: [
        { text: 'Claude Code', link: '/deploy/claude-code' },
        { text: 'CodeX', link: '/deploy/codex' },
        { text: 'OpenClaw', link: '/deploy/openclaw' },
      ]},
    ],
    sidebar: [
      {
        text: '快速开始',
        collapsed: false,
        items: [
          { text: '欢迎使用', link: '/guide/welcome' },
        ]
      },
      {
        text: '使用指南',
        collapsed: false,
        items: [
          { text: '注册账号', link: '/guide/registration' },
          { text: '创建 Key', link: '/guide/create-key' },
          { text: '支持的模型', link: '/guide/models' },
          { text: '充值', link: '/guide/recharge' },
        ]
      },
      {
        text: 'AI 编程工具部署',
        collapsed: false,
        items: [
          { text: 'Claude Code 部署', link: '/deploy/claude-code' },
          { text: 'CodeX 部署', link: '/deploy/codex' },
          { text: 'OpenClaw 配置', link: '/deploy/openclaw' },
        ]
      },
      {
        text: '其他',
        collapsed: false,
        items: [
          { text: '常见问题', link: '/guide/faq' },
        ]
      }
    ],
    footer: {
      message: 'FOXNIO · 国内直连 · 无需魔法',
      copyright: 'Copyright © 2025 FOXNIO'
    },
    docFooter: { prev: '上一页', next: '下一页' },
    lastUpdatedText: '最后更新',
    returnToTopLabel: '返回顶部',
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '菜单',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: { noResultsText: '无法找到相关结果', resetButtonTitle: '清除查询条件' }
        }
      }
    }
  }
})
