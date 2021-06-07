<!--
 * @Description: 
 * @Autor: 
 * @Date: 2021-05-25 16:53:50
 * @LastEditors: shangxin
 * @LastEditTime: 2021-06-07 20:23:06
-->
# sx-tool
个人工具函数


参考
https://segmentfault.com/a/1190000018242549
https://segmentfault.com/a/1190000022720981
https://segmentfault.com/a/1190000019827652?utm_source=sf-similar-article
https://segmentfault.com/a/1190000014154487?utm_source=sf-similar-article
https://zhuanlan.zhihu.com/p/344951970
https://blog.csdn.net/qq_39207948/article/details/113831383

配置中遇到的问题
- webpack报错 [Cannot find module './App.vue'.ts(2307)](https://github.com/vuejs/vue-next/issues/990) 
- 自定义声明放在types目录下，且在tsconfig的include中引入 [tsconfig配置相关](https://www.tslang.cn/docs/handbook/tsconfig-json.html)
- 因为带example 用了src 在引入的时候tsconfig 设置paths
- [ts+webpack设置别名不生效](https://zhuanlan.zhihu.com/p/298189197)
- 自定义.d.ts误解，自定义的声明文件不适合用typeRoots,[typeRoots跟types是针对npm包的](https://stackoverflow.com/questions/40222162/typescript-2-custom-typings-for-untyped-npm-module)