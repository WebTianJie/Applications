<template>
    <div>
        <div>我是comu</div>
        <ul class="nav">
            <router-link tag="li" to="academic">学术讨论</router-link>
            <router-link tag="li" to="download">下载</router-link>
            <router-link tag="li" to="personal">个人中心</router-link>
        </ul>
        <router-view></router-view>
    </div>

</template>

<script>
    export default {
        name: "Comu"
    }
</script>

<style scoped>
.active{
    color:green;
    font-weight: bold;
}
</style>