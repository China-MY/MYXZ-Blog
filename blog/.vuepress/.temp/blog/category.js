export const categoriesMap = JSON.parse("{\"category\":{\"/\":{\"path\":\"/category/\",\"map\":{\"关于我\":{\"path\":\"/category/%E5%85%B3%E4%BA%8E%E6%88%91/\",\"indexes\":[0]},\"个人简历\":{\"path\":\"/category/%E4%B8%AA%E4%BA%BA%E7%AE%80%E5%8E%86/\",\"indexes\":[0]},\"生活随笔\":{\"path\":\"/category/%E7%94%9F%E6%B4%BB%E9%9A%8F%E7%AC%94/\",\"indexes\":[1]},\"知识库目录\":{\"path\":\"/category/%E7%9F%A5%E8%AF%86%E5%BA%93%E7%9B%AE%E5%BD%95/\",\"indexes\":[2]},\"没想好\":{\"path\":\"/category/%E6%B2%A1%E6%83%B3%E5%A5%BD/\",\"indexes\":[3,4,5,6,7,8,9]},\"音乐推荐\":{\"path\":\"/category/%E9%9F%B3%E4%B9%90%E6%8E%A8%E8%8D%90/\",\"indexes\":[10]},\"追剧推荐\":{\"path\":\"/category/%E8%BF%BD%E5%89%A7%E6%8E%A8%E8%8D%90/\",\"indexes\":[11]},\"VPS技术\":{\"path\":\"/category/vps%E6%8A%80%E6%9C%AF/\",\"indexes\":[12]},\"前端技术\":{\"path\":\"/category/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/\",\"indexes\":[13]},\"后端技术\":{\"path\":\"/category/%E5%90%8E%E7%AB%AF%E6%8A%80%E6%9C%AF/\",\"indexes\":[14]},\"安全技术\":{\"path\":\"/category/%E5%AE%89%E5%85%A8%E6%8A%80%E6%9C%AF/\",\"indexes\":[15]},\"运维技术\":{\"path\":\"/category/%E8%BF%90%E7%BB%B4%E6%8A%80%E6%9C%AF/\",\"indexes\":[16]},\"系统部署\":{\"path\":\"/category/%E7%B3%BB%E7%BB%9F%E9%83%A8%E7%BD%B2/\",\"indexes\":[17]}}}},\"tag\":{\"/\":{\"path\":\"/tag/\",\"map\":{\"个人简历\":{\"path\":\"/tag/%E4%B8%AA%E4%BA%BA%E7%AE%80%E5%8E%86/\",\"indexes\":[17,0]},\"没想好\":{\"path\":\"/tag/%E6%B2%A1%E6%83%B3%E5%A5%BD/\",\"indexes\":[3,4,5,6,7,8,9]},\"博客\":{\"path\":\"/tag/%E5%8D%9A%E5%AE%A2/\",\"indexes\":[17]}}}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

