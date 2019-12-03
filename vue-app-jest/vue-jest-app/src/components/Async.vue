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
                var that=this;
                axios.get('/name')
                    .then(res=>{
                        that.name=res.name;
                    }).catch(err=>{
                        console.log(err);
                })
            },
            getAge(){
                var that=this;
                axios.get('/age')
                    .then(res=>{
                        that.age=res.age;
                    }).catch(err=>{
                    console.log(err);
                })
            }
        }
    }
</script>

<style scoped>

</style>