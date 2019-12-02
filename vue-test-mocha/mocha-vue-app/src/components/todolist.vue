<template>
    <div>
        <input type="text" v-model="mask">
        <button @click="handleClick">添加</button>
        <ul>
            <li v-for="mask in maskList">{{mask}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "todolist",
        data(){
            return {
                mask:'',
                maskList:[]
            }
         },
        methods:{
            handleClick(){
                this.maskList.push(this.mask);
            }
        }
    }
</script>

<style scoped>

</style>