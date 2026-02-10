import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/JustExtension/",
  title: "JustExtension",
  description: "浏览器插件工具集与开发指南",

  head: [["link", { rel: "icon", href: "/JustExtension/favicon.ico" }]],

  themeConfig: {
    logo: "/logo.svg", // VitePress handles base for logo automatically in most cases, but let's verify if user has this file

    nav: [
      { text: "首页", link: "/" },
      { text: "学习文档", link: "/guide/" },
      { text: "社区", link: "/community/" },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "入门指南",
          items: [
            { text: "介绍", link: "/guide/" },
            { text: "开始之前", link: "/guide/beforeStart" },
            { text: "快速开始", link: "/guide/getting-started" },
          ],
        },
        {
          text: "工程化",
          items: [
            { text: "Vite + Vue3 开发", link: "/guide/engineering" },
            { text: "TypeScript 配置", link: "/guide/typescript" },
          ],
        },
        {
          text: "核心能力",
          items: [
            { text: "Background Service Worker", link: "/guide/background" },
            { text: "Content Script", link: "/guide/content-script" },
          ],
        },
        {
          text: "发布上架",
          items: [{ text: "Chrome Web Store", link: "/guide/publish" }],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/Simonmie/JustExtension" },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024 JustExtension",
    },

    // Search config (optional, can be enabled later)
    search: {
      provider: "local",
    },
  },
});
