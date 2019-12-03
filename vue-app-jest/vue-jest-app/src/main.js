import Vue from 'vue'
import App from './App.vue'
import  Vuex from 'vuex'
import config from './store'
Vue.config.productionTip = false
let store=new Vuex.Store(config)
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
