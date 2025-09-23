import {navbar} from "vuepress-theme-hope";

export default navbar([
    "/",
    {
        text: "生活随笔",
        icon: "pen-to-square",
        prefix: "/notes/",
        children: [
            {
                text: "生活随笔",
                icon: "pen-to-square",
                link: "README.md",
            },
            {
                text: "2025",
                icon: "pen-to-square",
                prefix: "2025/",
                children: [
                    {
                        text: "3月",
                        icon: "pen-to-square",
                        link: "03/",
                    },
                ],
            },
        ],
    },
    {
        text: "博文",
        icon: "pen-to-square",
        prefix: "/posts/",
        children: [
            {
                text: "知识库目录",
                icon: "pen-to-square",
                link: "README.md",
            },
            {
                text: "前端技术",
                icon: "pen-to-square",
                prefix: "前端技术/",
                children: [
                    {
                        text: "前端技术",
                        icon: "pen-to-square",
                        link: "README.md",
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
                        link: "README.md",
                    },

                ],
            },
            {
                text: "安全技术",
                icon: "pen-to-square",
                prefix: "安全技术/",
                children: [
                    {
                        text: "安全技术",
                        icon: "pen-to-square",
                        link: "README.md",
                    },

                ],
            },
            {
                text: "运维技术",
                icon: "pen-to-square",
                prefix: "运维技术/",
                children: [
                    {
                        text: "运维技术",
                        icon: "pen-to-square",
                        link: "README.md",
                    },

                ],
            },
            {
                text: "VPS技术",
                icon: "pen-to-square",
                prefix: "VPS技术/",
                children: [
                    {
                        text: "VPS技术",
                        icon: "pen-to-square",
                        link: "README.md",
                    },

                ],
            },
        ],
    },
    {
        text: "关于我",
        icon: "pen-to-square",
        prefix: "/about/",
        children: [
            {
                text: "关于我",
                icon: "pen-to-square",
                link: "README.md",
            },
            {
                text: "追剧",
                icon: "pen-to-square",
                prefix: "追剧/",
                children: [
                    {
                        text: "追剧",
                        icon: "pen-to-square",
                        link: "README.md",
                    },

                ],
            },
            {
                text: "音乐",
                icon: "pen-to-square",
                prefix: "音乐/",
                children: [
                    {
                        text: "音乐",
                        icon: "pen-to-square",
                        link: "README.md",
                    },

                ],
            },
        ],
    },

    {
        text: "前往我的简历",
        link: "https://resume.明裕.top",
    },
]);
