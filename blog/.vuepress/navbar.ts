import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "前端技术",
        icon: "pen-to-square",
        prefix: "前端技术/",
        children: [
            {
              text: "前端技术介绍",
              icon: "pen-to-square",
              link: "前端技术介绍.md",
            },
        ],
      },
      {
        text: "后端技术",
        icon: "pen-to-square",
        prefix: "后端技术/",
        children: [
            {
              text: "后端技术",
              icon: "pen-to-square",
              link: "后端技术/",
            },

        ],
      },
    ],
  },
  {
    text: "前往我的简历",
    link: "https://resume.myxz.fun",
  },
]);
