import {defineUserConfig} from "vuepress";
import {commentPlugin} from '@vuepress/plugin-comment'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

import theme from "./theme.js";

export default defineUserConfig({
    base: "/",
    lang: "zh-CN",
    title: "明裕的小窝",
    description: "抱利他之心，行利他之事~和我一起去寻找最酷最无畏的人生~~~",
    theme,

    // 功能开关
    // 和 PWA 一起启用
    // shouldPrefetch: false,
    plugins: [
        // 搜索
        docsearchPlugin({
            appId: 'HTRTJQS8Z2',
            apiKey: '76f2da0b7810fe468869dca3b513d32f',
            indexName: 'myxz',
            locales: {
                '/': {
                    placeholder: '搜索文档',
                    translations: {
                        button: {
                            buttonText: '搜索文档',
                        },
                    },
                },
            },
        }),
        // 评论
        commentPlugin({
            provider: 'Giscus',
            repo: 'China-MY/Comment-section',
            repoId: 'R_kgDOOLAy5w',
            category: 'Announcements',
            categoryId: 'DIC_kwDOOLAy584CoNkF'
            // 其他选项
            // ...
        }),
    ],
});