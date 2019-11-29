<template>
  <div id="app">
    <div class="header">
      <div class="logo" @click="toHome">渡一教育</div>
       <ul class="nav">
           <router-link tag="li" to="/loge">loge</router-link> |
           <router-link tag="li" to="/home">Home</router-link> |
           <router-link tag="li"  to="/learn">Learn</router-link> |
           <router-link tag="li"  to="/student">Student</router-link> | |
           <router-link tag="li"  to="/comu">Compu</router-link> |
           <router-link tag="li"  to="/about">About</router-link>
       </ul>
    </div>
    <router-view class="view" />
  </div>
</template>
 <script>
   export default {
     methods:{
       toHome(){
         //this.$router.push('/home');
         //this.$router.push({'name':'home',path:'/home'})
         this.$router.replace('/home');
       }
     }
   }
 </script>

  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    padding: 0 200px;
    background-color: #38f;
    line-height: 70px;
    padding-bottom: 2px;
    color: #fff;
  }

  .logo {
    cursor: pointer;
  }

  .nav {
    display: flex;
  }

  .nav li {
    margin: 0 20px;
    cursor: pointer;
  }

  .view {
    padding: 50px 200px;
  }

  .active {
    font-weight: bold;
  }
</style>
