<template>
    <div class="personal">
        <label>姓名:</label>
        <input type="text" v-model="name" name="name">
        <button @click="handleClick">确定</button>
    </div>

</template>

<script>
    export default {
        name: "Personal",
        data(){
            return {
                name:''
            }
        },
        beforeRouteEnter(to,from,next){
            const flag=window.confirm('确定要加载页面了吗?');
            if(flag){
                next(para=>{
                    console.log(para);
                });
            }
        },
        beforeRouteLeave(to,from,next){
           if(this.name!==''){
               //询问
               const flag=window.confirm('确定要离开了吗?');
               if(flag){
                  this.name='';
                  next();
               }
           }else{
               next();
           }
        },
        methods:{
            handleClick(){

            }
        }
    }
</script>

<style scoped>

</style>