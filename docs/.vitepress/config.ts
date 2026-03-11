import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/getbiji-docs/',
  vite: {
    publicDir: 'public',
  },
  srcExclude: ['**/admin/**'],
  lang: 'zh-CN',
  title: 'Get笔记帮助',
  description: '使用文档',
  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    siteTitle: 'Get笔记',
    nav: [
      { text: '首页', link: '/' },
      { text: '下载 App', link: 'https://biji.com' }
    ],

    sidebar: [
      {
        text: '📖 开始使用',
        items: [
          { text: '欢迎来到 Get 笔记', link: '/guide/' },
          { text: '下载安装', link: '/guide/download' },
        ]
      },
      {
        text: '🎙️ 语音记录',
        items: [
          { text: '语音速记', link: '/voice/recording' },
          { text: '会议录音', link: '/voice/meeting' },
          { text: '课堂录音', link: '/voice/classroom' },
          { text: '手机内录', link: '/voice/internal' },
          { text: '声纹识别', link: '/voice/voiceprint' },
          { text: '语音口令', link: '/voice/command' },
          { text: '语音词库', link: '/voice/vocabulary' },
        ]
      },
      {
        text: '📸 更多记录方式',
        items: [
          { text: '链接一键记', link: '/capture/link' },
          { text: '拍照记录', link: '/capture/photo' },
          { text: '智能拍书', link: '/capture/book' },
          { text: '导入音视频', link: '/capture/import' },
        ]
      },
      {
        text: '📚 知识库',
        items: [
          { text: '创建知识库', link: '/knowledge-base/create' },
          { text: '帮你听直播', link: '/knowledge-base/livestream' },
          { text: '订阅博主', link: '/knowledge-base/creator' },
          { text: '上传文件', link: '/knowledge-base/upload' },
          { text: '团队协作', link: '/knowledge-base/team' },
        ]
      },
      {
        text: '⚡ 效率工具',
        collapsed: true,
        items: [
          { text: '桌面小组件', link: '/efficiency/widget' },
          { text: 'Siri 唤起', link: '/efficiency/siri' },
          { text: '快捷指令', link: '/efficiency/shortcuts' },
          { text: '微信小程序', link: '/efficiency/miniprogram' },
          { text: '网页端', link: '/efficiency/web' },
        ]
      },
      {
        text: '🌱 GetSeed 录音卡',
        collapsed: true,
        items: [
          { text: '产品介绍', link: '/getseed/' },
          { text: '快速使用', link: '/getseed/quickstart' },
          { text: '功能说明', link: '/getseed/features' },
          { text: '笔记发芽', link: '/getseed/sprout' },
        ]
      },
      {
        text: '❓ 常见问题',
        collapsed: true,
        items: [
          { text: '账号相关', link: '/faq/' },
          { text: '会员相关', link: '/faq/membership' },
        ]
      },
      { text: '📋 更新日志', link: '/changelog/' },
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索' },
          modal: { noResultsText: '没有找到结果' }
        }
      }
    },

    docFooter: { prev: '上一篇', next: '下一篇' },
    outline: { label: '本页目录' },
    lastUpdated: { text: '更新于' },
  }
})
