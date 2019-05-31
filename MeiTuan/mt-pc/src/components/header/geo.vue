<template>
    <div class="m-geo">
        <div class="position">
            <i class="el-icon-location"/>
            北京
            <router-link class="changeCity" :to="{name:'changeCity'}">
                切换城市|
                [
                    <a href="#">中国河南省郑州市</a>,
                    <a href="#"> 金水区</a>
                    <a href="#">花园路</a>
                ]
            </router-link>
        </div>
        <div class="m-user">
            <router-link class="login" :to="{name:'login'}">
                立即登录
            </router-link>
            <router-link class="register" :to="{name:'register'}">
                注册
            </router-link>
        </div>
    </div>
</template>

<script >
</script>

<style scoped>

</style>
