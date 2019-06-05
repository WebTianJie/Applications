<template>
  <div class="m-geo">
    <div class="position">
      <i class="el-icon-location"/>
      {{$store.state.position.name}}
      <router-link class="changeCity" :to="{name:'changeCity'}">
        切换城市|
        [
        <a href="#" v-for="(item,index) in nearCity" :key="index">{{item.name}} </a>
        ]
      </router-link>
    </div>
    <div class="m-user" v-if="!$store.state.userName">
      <router-link class="login" :to="{name:'login'}">立即登录</router-link>
      <router-link class="register" :to="{name:'register'}">注册</router-link>
    </div>
  </div>
</template>

<script >
import api  from '@/Api/index'
export default {
  data() {
      return {
          nearCity:[],
      }
  },
  watch:{
    "$store.state.position":function() {
       this.nearCity=this.$store.state.position.nearCity;
    }
  },
  created() {
    api.getUserPosition().then(res=>{
        this.$store.dispatch('setPosition',res.data.data);
        this.nearCity=res.data.data.nearCity;
    })
  }
};
</script>

<style scoped>
</style>
