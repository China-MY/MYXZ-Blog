export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/intro.html", { loader: () => import(/* webpackChunkName: "intro.html" */"D:/LEARN/MY-Project/MYXZ-Blog/src/.vuepress/.temp/pages/intro.html.js"), meta: {"date":1742312379000,"cover":"/assets/images/cover3.jpg","excerpt":"\n<p>个人简历详情请看<br>\n<a href=\"https://resume.myxz.fun\" target=\"_blank\" rel=\"noopener noreferrer\">https://resume.myxz.fun</a></p>\n","readingTime":{"minutes":0.06,"words":18},"title":"介绍页","icon":"circle-info","type":"article"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/LEARN/MY-Project/MYXZ-Blog/src/.vuepress/.temp/pages/index.html.js"), meta: {"title":"主页","icon":"house"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/LEARN/MY-Project/MYXZ-Blog/src/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"D:/LEARN/MY-Project/MYXZ-Blog/src/.vuepress/.temp/pages/category/index.html.js"), meta: {"title":"分类","index":false} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"D:/LEARN/MY-Project/MYXZ-Blog/src/.vuepress/.temp/pages/tag/index.html.js"), meta: {"title":"标签","index":false} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"D:/LEARN/MY-Project/MYXZ-Blog/src/.vuepress/.temp/pages/article/index.html.js"), meta: {"title":"文章","index":false} }],
  ["/star/", { loader: () => import(/* webpackChunkName: "star_index.html" */"D:/LEARN/MY-Project/MYXZ-Blog/src/.vuepress/.temp/pages/star/index.html.js"), meta: {"title":"星标","index":false} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"D:/LEARN/MY-Project/MYXZ-Blog/src/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"title":"时间轴","index":false} }],
]);
