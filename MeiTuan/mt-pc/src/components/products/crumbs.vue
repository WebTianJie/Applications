<template>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
            <el-breadcrumb-item>{{$store.state.position}}美团</el-breadcrumb-item>
            <el-breadcrumb-item>{{$store.state.position}}{{$route.params.name}}</el-breadcrumb-item> 
          </el-breadcrumb>
</template>

<script>
    export default {
    }
</script>

<style lang="scss">

</style>