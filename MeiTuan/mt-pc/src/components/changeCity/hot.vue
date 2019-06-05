<template>
    <div class="m-hcity">
        <dl>
            <dt>{{title}}</dt>
            <dd v-for="(item,index) in hotlist" :key="index"  >{{item.name}}</dd>
        </dl>
    </div>
</template>

<script>
    export default {
        props:[
            'title',
            'hotlist',
        ]
    }
</script>

<style lang="scss" >
@import '@/assets/css/changecity/hot.scss';
</style>