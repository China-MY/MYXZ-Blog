import { Contributors } from "D:/LEARN/MY-Project/MYXZ-Blog/node_modules/@vuepress/plugin-git/lib/client/components/Contributors.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", Contributors);
  },
};
