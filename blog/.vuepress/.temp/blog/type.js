export const typesMap = JSON.parse("{\"article\":{\"/\":{\"path\":\"/article/\",\"indexes\":[24,14,10,17,23,22,3,5,7,9,12,13,16,20,25,0,1,2,4,6,8,11,15,18,19,21]}},\"star\":{\"/\":{\"path\":\"/star/\",\"indexes\":[24]}},\"timeline\":{\"/\":{\"path\":\"/timeline/\",\"indexes\":[14,10,17,24,23,22,3,5,7,9,12,13,16,20]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

