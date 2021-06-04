/*
 * @Description: 
 * @Autor: 
 * @Date: 2021-06-04 14:27:07
 * @LastEditors: shangxin
 * @LastEditTime: 2021-06-04 17:06:31
 */
/* eslint-disable */
// declare module "*.vue" {
//   import { ComponentOptions } from 'vue'
//   const component: ReturnType<ComponentOptions>
//   export default component
// }
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}