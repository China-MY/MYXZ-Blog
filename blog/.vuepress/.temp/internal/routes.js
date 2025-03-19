export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/intro.html", { loader: () => import(/* webpackChunkName: "intro.html" */"D:/LEARN/MY-Project/MYXZ-Blog/blog/.vuepress/.temp/pages/intro.html.js"), meta: {"cover":"/assets/images/cover3.jpg","excerpt":"\n<p>个人简历详情请看<br>\n<a href=\"https://resume.myxz.fun\" target=\"_blank\" rel=\"noopener noreferrer\">https://resume.myxz.fun</a></p>\n","readingTime":{"minutes":0.06,"words":18},"title":"介绍页","icon":"circle-info","type":"article"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/LEARN/MY-Project/MYXZ-Blog/blog/.vuepress/.temp/pages/index.html.js"), meta: {"title":"主页","icon":"house"} }],
  ["/posts/Java/0.Java.html", { loader: () => import(/* webpackChunkName: "posts_Java_0.Java.html" */"D:/LEARN/MY-Project/MYXZ-Blog/blog/.vuepress/.temp/pages/posts/Java/0.Java.html.js"), meta: {"title":"","type":"article"} }],
  ["/posts/JavaScript/0.JavaScript.html", { loader: () => import(/* webpackChunkName: "posts_JavaScript_0.JavaScript.html" */"D:/LEARN/MY-Project/MYXZ-Blog/blog/.vuepress/.temp/pages/posts/JavaScript/0.JavaScript.html.js"), meta: {"title":"","type":"article"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/LEARN/MY-Project/MYXZ-Blog/blog/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/posts/Java/", { loader: () => import(/* webpackChunkName: "posts_Java_index.html" */"D:/LEARN/MY-Project/MYXZ-Blog/blog/.vuepress/.temp/pages/posts/Java/index.html.js"), meta: {"title":"Java"} }],
  ["/posts/", { loader: () => import(/* webpackChunkName: "posts_index.html" */"D:/LEARN/MY-Project/MYXZ-Blog/blog/.vuepress/.temp/pages/posts/index.html.js"), meta: {"title":"Posts"} }],
  ["/posts/JavaScript/", { loader: () => import(/* webpackChunkName: "posts_JavaScript_index.html" */"D:/LEARN/MY-Project/MYXZ-Blog/blog/.vuepress/.temp/pages/posts/JavaScript/index.html.js"), meta: {"title":"Java Script"} }],
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
