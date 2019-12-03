<template>
    <div>
        <h4>姓名:{{name}}</h4>
        <h4>年龄:{{age}}</h4>
        <button @click="handleClick">显示信息</button>
        <button @click="changeAge">修改年龄</button>
    </div>
</template>

<script>
    export default {
        name: "Son",
        props:[
            'name',
            'age',
            'fn'
        ],
        methods:{
            handleClick(){
                this.$emit('showInfo')
            },
            changeAge(){
                this.fn();
            }
        }
    }
</script>

<style scoped>

</style>