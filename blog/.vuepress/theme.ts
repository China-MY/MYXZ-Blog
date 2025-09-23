import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://blog.myxz.fun/",
  author: {
    name: "明裕学长",
    url: "https://blog.myxz.fun/",
  },
  logo: "http://icloud.xn--2hv178e.top//blog/mylogo.png",
  repo: "/China-MY/",
  docsDir: "blog",

  // 导航栏
  navbar,
  // 是否全屏
  fullscreen: true,
  // 是否开启专注模式
  // focus: true,
  // 侧边栏
  sidebar,

  // 页脚
  footer: "2025 by 明裕的小窝",
  displayFooter: true,

  // 博客相关
  blog: {
    description: "抱利他之心，行利他之事~",
    intro: "/intro.html",
    medias: {
      Baidu: "https://tieba.baidu.com/home/main?un=%E6%98%8E%E8%A3%95%E5%AD%A6%E9%95%BF",
      BiliBili: "https://space.bilibili.com/483865298",
      Discord: "https://discord.gg/vqsmJjPm",
      Email: "mingyuxuezhang@qq.com",
      Gitee: "https://gitee.com/myxzgzs",
      GitHub: "https://github.com/China-MY",
      Gmail: "luoyu2004@gmail.com",
      Instagram: "http://t.me/myxz2004",
      QQ: "http://1792943568.qzone.qq.com",
      Steam: "https://steamcommunity.com/id/MYXZ/",
      Twitter: "https://x.com/mngyxuzhng1?t=28LNIWGEDBJ8NNcTlcEvbQ&s=09",
      Wechat: "https://ptnk.bmwwx.cn/TuwmzT",
      Weibo: "https://weibo.com/u/7531805872",
      Whatsapp: "https://wa.me/qr/LEUK5FT77O32A1",
      Youtube: "https://www.youtube.com/@%E6%98%8E%E8%A3%95%E5%AD%A6%E9%95%BF",
      Zhihu: "https://www.zhihu.com/people/ai-wan-you-xi-de-xiao-hai-tun",
      // 个人简历
      Rss: "https://resume.myxz.fun",
    },
  },

  // 加密配置
  encrypt: {
    config: {
      // "/demo/encrypt.html": {
      //   hint: "Password: 1234",
      //   password: "1234",
      // },
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 此处开启了很多功能用于演示，你应仅保留用到的功能。
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,

    // 取消注释它们如果你需要 TeX 支持
    // math: {
    //   // 启用前安装 katex
    //   type: "katex",
    //   // 或者安装 mathjax-full
    //   type: "mathjax",
    // },

    // 如果你需要幻灯片，安装 @vuepress/plugin-revealjs 并取消下方注释
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },

    // 在启用之前安装 chart.js
    // chartjs: true,

    // insert component easily

    // 在启用之前安装 echarts
    // echarts: true,

    // 在启用之前安装 flowchart.ts
    // flowchart: true,

    // 在启用之前安装 mermaid
    // mermaid: true,

    // playground: {
    //   presets: ["ts", "vue"],
    // },

    // 在启用之前安装 @vue/repl
    // vuePlayground: true,

    // 在启用之前安装 sandpack-vue3
    // sandpack: true,
  },

  // 在这里配置主题提供的插件
  plugins: {

    // search:true,
    blog: true,
    // 启用之前需安装 @waline/client
    // 警告: 这是一个仅供演示的测试服务，在生产环境中请自行部署并使用自己的服务！
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    components: {
      components: ["Badge", "VPCard"],
    },

    icon: {
      prefix: "fa6-solid:",
      // 关键词: "iconify", "fontawesome", "fontawesome-with-brands"
      assets: "fontawesome",
    },

    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
