import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "技术知识库",
      icon: "book",
      prefix: "posts/",
      link: "posts/",
      children: "structure",
    },
    {
      text: "生活随笔",
      // icon: "notes",
      prefix: "notes/",
      link: "notes/",
      children: "structure",
    },
    {
      text: "关于我",
      // icon: "about",
      prefix: "about/",
      link: "about/",
      children: "structure",
    },
    // "intro",
    // {
    //   text: "幻灯片",
    //   icon: "person-chalkboard",
    //   link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    // },
  ],
});
