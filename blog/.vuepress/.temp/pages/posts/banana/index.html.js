import comp from "D:/LEARN/MY-Project/MYXZ-Blog/src/.vuepress/.temp/pages/posts/banana/index.html.vue"
const data = JSON.parse("{\"path\":\"/posts/banana/\",\"title\":\"Banana\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Banana\",\"article\":false,\"feed\":false,\"sitemap\":false,\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://china-my.github.io/posts/banana/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"明裕的小窝\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Banana\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Banana\\\"}\"]]},\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
