import comp from "D:/LEARN/MY-Project/MYXZ-Blog/blog/.vuepress/.temp/pages/star/index.html.vue"
const data = JSON.parse("{\"path\":\"/star/\",\"title\":\"星标\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"星标\",\"dir\":{\"index\":false},\"index\":false,\"feed\":false,\"sitemap\":false,\"blog\":{\"type\":\"type\",\"key\":\"star\"},\"layout\":\"BlogType\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://china-my.github.io/star/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"明裕的小窝\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"星标\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"星标\\\"}\"]]},\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
