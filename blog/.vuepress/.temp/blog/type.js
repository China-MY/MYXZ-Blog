export const typesMap = JSON.parse("{\"article\":{\"/\":{\"path\":\"/article/\",\"indexes\":[3,4,5,6,7,8,9,17,0,18,1,2,10,11,12,13,14,15,16]}},\"star\":{\"/\":{\"path\":\"/star/\",\"indexes\":[17,0]}},\"timeline\":{\"/\":{\"path\":\"/timeline/\",\"indexes\":[3,4,5,6,7,8,9,17]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

