import comp from "D:/LEARN/MY-Project/MYXZ-Blog/blog/.vuepress/.temp/pages/intro.html.vue"
const data = JSON.parse("{\"path\":\"/intro.html\",\"title\":\"介绍页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"circle-info\",\"cover\":\"/assets/images/cover3.jpg\",\"description\":\"介绍页 个人简历详情请看 https://resume.myxz.fun\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://china-my.github.io/intro.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"明裕的小窝\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"介绍页\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"介绍页 个人简历详情请看 https://resume.myxz.fun\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://china-my.github.io/assets/images/cover3.jpg\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"meta\",{\"name\":\"twitter:image:src\",\"content\":\"https://china-my.github.io/assets/images/cover3.jpg\"}],[\"meta\",{\"name\":\"twitter:image:alt\",\"content\":\"介绍页\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"介绍页\\\",\\\"image\\\":[\\\"https://china-my.github.io/assets/images/cover3.jpg\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"明裕学长\\\",\\\"url\\\":\\\"\\\"}]}\"]]},\"readingTime\":{\"minutes\":0.06,\"words\":18},\"filePathRelative\":\"intro.md\",\"excerpt\":\"\\n<p>个人简历详情请看<br>\\n<a href=\\\"https://resume.myxz.fun\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">https://resume.myxz.fun</a></p>\\n\",\"autoDesc\":true}")
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
