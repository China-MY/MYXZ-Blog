import comp from "D:/LEARN/MY-Project/MYXZ-Blog/blog/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"BlogHome\",\"icon\":\"house\",\"title\":\"主页\",\"heroImage\":\"http://cloud.myxz.fun/blog/logo.jpg\",\"heroText\":\"明裕的小窝\",\"heroFullScreen\":true,\"tagline\":\"和我一起去寻找最酷最无畏的人生~~~\",\"projects\":[{\"icon\":\"link\",\"name\":\"个人在线简历\",\"desc\":\"个人在线简历\",\"link\":\"https://resume.myxz.fun/\"},{\"icon\":\"folder-open\",\"name\":\"个人在线简历GitHub\",\"desc\":\"个人在线简历GitHub\",\"link\":\"https://github.com/China-MY/Yu-Luo-Resume\"},{\"icon\":\"folder-open\",\"name\":\"个人在线简历Gitee\",\"desc\":\"个人在线简历Gitee\",\"link\":\"https://gitee.com/myxzgzs/Yu-Luo-Resume\"},{\"icon\":\"link\",\"name\":\"明裕的小窝\",\"desc\":\"明裕的小窝\",\"link\":\"https://blog.myxz.fun/\"},{\"icon\":\"folder-open\",\"name\":\"明裕的小窝GitHub\",\"desc\":\"明裕的小窝GitHub\",\"link\":\"https://github.com/China-MY/MYXZ-Blog\"},{\"icon\":\"folder-open\",\"name\":\"明裕的小窝Gitee\",\"desc\":\"明裕的小窝Gitee\",\"link\":\"https://gitee.com/myxzgzs/MYXZ-Blog\"},{\"icon\":\"folder-open\",\"name\":\"博客和个人简历搭建教程\",\"desc\":\"博客和个人简历搭建教程\",\"link\":\"/notes/2025/03/20250319-博客和个人简历搭建之旅.md\"}],\"footer\":\"明裕的小窝 | MIT Licensed\"},\"readingTime\":{\"minutes\":1.04,\"words\":313},\"filePathRelative\":\"README.md\",\"excerpt\":\"\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
