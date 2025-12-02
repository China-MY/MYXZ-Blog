import comp from "D:/HOME/桌面/jianl/MYXZ-Blog/blog/.vuepress/.temp/pages/posts/index.html.vue"
const data = JSON.parse("{\"path\":\"/posts/\",\"title\":\"知识库目录\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"知识库目录\",\"index\":false,\"icon\":\"laptop-code\",\"category\":[\"知识库目录\"],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://blog.明裕.top/posts/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"明裕的小窝\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"知识库目录\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"知识库目录\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"明裕学长\\\",\\\"url\\\":\\\"https://blog.明裕.top/\\\"}]}\"]]},\"readingTime\":{\"minutes\":0.06,\"words\":19},\"filePathRelative\":\"posts/README.md\",\"excerpt\":\"\"}")
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
