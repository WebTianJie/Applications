<template>
    <el-container class="layout-default">
      <el-header height="">
        <my-header/>
      </el-header>
      <el-main>Main</el-main>
      <el-footer height="">Footer</el-footer>
    </el-container>
</template>
<script>

import MyHeader from '@/components/header/index';

export default {
  components: {
    MyHeader,
  },
};
</script>
<style lang="scss">
    @import '@/assets/css/public/layout.scss'
</style>
