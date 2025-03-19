import comp from "D:/LEARN/MY-Project/MYXZ-Blog/blog/.vuepress/.temp/pages/tag/index.html.vue"
const data = JSON.parse("{\"path\":\"/tag/\",\"title\":\"标签\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"标签\",\"dir\":{\"index\":false},\"index\":false,\"feed\":false,\"sitemap\":false,\"blog\":{\"type\":\"category\",\"key\":\"tag\"},\"layout\":\"BlogCategory\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://china-my.github.io/tag/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"明裕的小窝\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"标签\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"标签\\\"}\"]]},\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
