<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--    <todolist></todolist>-->
    <Father></Father>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import todolist from './components/todolist.vue'

import Father from "./components/Father";

export default {
  name: 'app',
  components: {
    // HelloWorld,
    // todolist,
    Father
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
