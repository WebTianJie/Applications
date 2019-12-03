<template>
    <div>
        <Son @showInfo="showInfo" :fn="changeAge" :name="name" :age="age"></Son>
       <div class="show" v-if="show">
          姓名:杉杉
           年龄:{{age}}
           爱好:男
          性别:女
       </div>
    </div>
</template>

<script>
    import Son from './Son'
    export default {
        name: "Father",
        data(){
            return {
                name:'天劫',
                age:19,
                show:false
            }
        },
        methods:{
            showInfo(){
              this.show=true;
            },
            changeAge(){
                this.age=16;
            }
        },
        components:{
            Son
        }
    }
</script>

<style scoped>
    .show{
        height: 100px;
    }
</style>