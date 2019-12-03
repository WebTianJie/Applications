<template>
    <div>
        <h4>姓名:{{name}}</h4>
        <h4>年龄:{{age}}</h4>
        <button @click="getName">获取name</button>
        <button @click="getAge">获取age</button>
    </div>
</template>

<script>
    import  axios from 'axios'
    export default {
        name: "Son",
        data(){
            return {
                age:null,
                name:''
            }
        },
        methods:{
            getName(){
                axios.get('/name')
                    .then(res=>{
                        this.name=res.name;
                    }).catch(err=>{
                        console.log(err);
                })
            },
            getName(){
                axios.get('/age')
                    .then(res=>{
                        this.age=res.age;
                    }).catch(err=>{
                    console.log(err);
                })
            }
        }
    }
</script>

<style scoped>

</style>