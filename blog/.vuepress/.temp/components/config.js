import { hasGlobalComponent } from "D:/HOME/桌面/jianl/MYXZ-Blog/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "D:/HOME/桌面/jianl/MYXZ-Blog/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "D:/HOME/桌面/jianl/MYXZ-Blog/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "D:/HOME/桌面/jianl/MYXZ-Blog/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
