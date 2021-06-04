<!--
 * @Description: 
 * @Autor: 
 * @Date: 2021-06-04 14:24:37
 * @LastEditors: shangxin
 * @LastEditTime: 2021-06-04 19:29:31
-->
<!-- 
@description   
@author shangxin 
@date 2021/06/04 14:24:41 
-->
<template>
  <div>什么鬼</div>
</template>

<script lang='ts'>

import { defineComponent } from 'vue'
import {add} from '@src/index'
// import {add} from '../../src/index'
export default defineComponent({
  name: 'app',
  setup(){
    console.log(add())
  }
})
</script>

<style lang="less" scoped>
</style>