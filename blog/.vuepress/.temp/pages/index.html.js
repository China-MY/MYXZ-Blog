import comp from "D:/LEARN/MY-Project/MYXZ-Blog/blog/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"BlogHome\",\"icon\":\"house\",\"title\":\"主页\",\"heroImage\":\"https://i.stardots.io/myxz/c126d0b50ea90346adbe0b2e71347d90_0.jpg?width=500&rotate=0&blur=0&quality=50\",\"heroText\":\"明裕的小窝\",\"heroFullScreen\":true,\"tagline\":\"和我一起去寻找最酷最无畏的人生~~~\",\"footer\":\"明裕的小窝 | MIT Licensed\"},\"readingTime\":{\"minutes\":0.72,\"words\":215},\"filePathRelative\":\"README.md\",\"excerpt\":\"\"}")
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
