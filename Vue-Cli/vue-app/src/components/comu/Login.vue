<template>
    <div>
        <button @click="handleClick">登录</button>
    </div>
</template>

<script>
    export default {
        name: "Login",
        methods:{
            handleClick(){
                const expires=900*24*20*60;
                const date=new Date(+new Date()+expires);
                document.cookie='login=true;expires='+date.toUTCString(expires);
            }
        }
    }
</script>

<style scoped>

</style>