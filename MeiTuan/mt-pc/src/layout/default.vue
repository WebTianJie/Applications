<template>
    <el-container class="layout-default">
      <el-header height="">
        <my-header/>
      </el-header>
      <el-main><router-view></router-view></el-main>
      <el-footer height="">
        <my-footer></my-footer>
      </el-footer>
    </el-container>
</template>
<script>

import MyHeader from '@/components/header/index';

import MyFooter from '@/components/footer/index'

export default {
  components: {
    MyHeader,
    MyFooter,
  },
};
</script>
<style lang="scss">
    @import '@/assets/css/public/layout.scss'
</style>
