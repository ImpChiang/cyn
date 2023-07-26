import { defineConfig } from 'vitepress'
export default defineConfig({
  title: '彩云南', // 标题
  description: '', // 介绍
  base: '/cyn/', // 如果想用 https://xxx.github.io/blog/ 访问，那么这句话必填
  themeConfig: {
    // logo: "", // 页面上显示的logo
    nav: [ // 页面右上角的导航
      {
        text: "文档",
        items: [
          {
            text: '指南',
            link: '/guide/ready',
          },
          {
            text: '组件',
            link: '/components/index',
          }
        ]
      }
    ],
    sidebar: { // 侧边栏，可以分组
      "/guide/": [
        {
          text: "开始",
          items: [
            { text: "准备工作", link: "/guide/ready" },
            { text: "开始", link: "/guide/start" },
            { text: "与服务端交互", link: "/guide/axios" },
            { text: "全局状态管理", link: "/guide/store" },
            { text: "全局资源", link: "/guide/resources" }
          ]
        },
      ],
      '/components/': [
        {
          text: '组件',
          items: [
            { text: '介绍', link: '/components/' },
          ],
        },
        {
          text: '公共组件',
          items: [
            { text: 'Dialog弹窗', link: '/components/dialog' },
            { text: 'Table表格', link: '/components/table' },
            { text: 'Form表单', link: '/components/form' },
            { text: 'Upload上传', link: '/components/upload' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/ImpChiang/cyn.git" }
    ], // 可以连接到 github
  }
})

