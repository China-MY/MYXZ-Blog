import {defineUserConfig} from "vuepress";

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
});