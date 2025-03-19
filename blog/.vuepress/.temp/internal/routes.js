export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/intro.html", { loader: () => import(/* webpackChunkName: "intro.html" */"D:/LEARN/MY-Project/MYXZ-Blog/blog/.vuepress/.temp/pages/intro.html.js"), meta: {"cover":"/assets/images/cover3.jpg","excerpt":"\n<ul>\n<li>\n<p><strong>姓名</strong>: 骆裕</p>\n</li>\n<li>\n<p><strong>全网圈名、网名</strong>: 明裕、明裕学长、明裕吖</p>\n</li>\n<li>\n<p><strong>政治面貌</strong>:中共预备党员</p>\n</li>\n<li>\n<p><strong>出生日期</strong>: 2004-09-30</p>\n</li>\n<li>\n<p><strong>所属机构</strong>: 明裕学长工作室</p>\n</li>\n<li>\n<p><strong>联系方式</strong>:</p>\n<ul>\n<li>Outlook 邮箱: <a href=\"mailto:mingyuxuezhang@outlook.com\" target=\"_blank\" rel=\"noopener noreferrer\">mingyuxuezhang@outlook.com</a></li>\n<li>Gmail: <a href=\"mailto:luoyu2004@gmail.com\" target=\"_blank\" rel=\"noopener noreferrer\">luoyu2004@gmail.com</a></li>\n<li>QQ邮箱: <a href=\"mailto:mingyuxuezhang@qq.com\" target=\"_blank\" rel=\"noopener noreferrer\">mingyuxuezhang@qq.com</a></li>\n</ul>\n</li>\n<li>\n<p><strong>爱好</strong>: 音乐、追剧、技术</p>\n</li>\n</ul>","readingTime":{"minutes":0.29,"words":87},"title":"介绍页","icon":"circle-info","type":"article"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/LEARN/MY-Project/MYXZ-Blog/blog/.vuepress/.temp/pages/index.html.js"), meta: {"title":"主页","icon":"house"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/LEARN/MY-Project/MYXZ-Blog/blog/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"D:/LEARN/MY-Project/MYXZ-Blog/blog/.vuepress/.temp/pages/category/index.html.js"), meta: {"title":"分类","index":false} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"D:/LEARN/MY-Project/MYXZ-Blog/blog/.vuepress/.temp/pages/tag/index.html.js"), meta: {"title":"标签","index":false} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"D:/LEARN/MY-Project/MYXZ-Blog/blog/.vuepress/.temp/pages/article/index.html.js"), meta: {"title":"文章","index":false} }],
  ["/star/", { loader: () => import(/* webpackChunkName: "star_index.html" */"D:/LEARN/MY-Project/MYXZ-Blog/blog/.vuepress/.temp/pages/star/index.html.js"), meta: {"title":"星标","index":false} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"D:/LEARN/MY-Project/MYXZ-Blog/blog/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"title":"时间轴","index":false} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
