import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "Java",
        icon: "pen-to-square",
        prefix: "Java/",
        children: [
            {
              text: "Java",
              icon: "pen-to-square",
              link: "Java/",
            },
        ],
      },
      {
        text: "JavaScript",
        icon: "pen-to-square",
        prefix: "JavaScript/",
        children: [
            {
              text: "JavaScript",
              icon: "pen-to-square",
              link: "JavaScript/",
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
