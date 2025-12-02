import { CodeTabs } from "D:/HOME/桌面/jianl/MYXZ-Blog/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/HOME/桌面/jianl/MYXZ-Blog/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/HOME/桌面/jianl/MYXZ-Blog/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
