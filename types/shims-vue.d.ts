/*
 * @Description: 
 * @Autor: 
 * @Date: 2021-06-04 14:27:07
 * @LastEditors: shangxin
 * @LastEditTime: 2021-06-07 20:14:09
 */
// /* eslint-disable */
declare module '*.vue' {
  import { defineComponent } from 'vue'
  const Component: ReturnType<typeof defineComponent>
  export default Component
}
// declare module '*.vue' {
//   import type { DefineComponent } from 'vue'
//   const component: DefineComponent<{}, {}, any>
//   export default component
// }