import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import  './assets/styles/reset.css'
import store from './store'



Vue.config.productionTip = false;
Vue.prototype.$axios=axios;
axios.defaults.baseURL='api';
axios.defaults.headers.post['Content-Type = application/json'];

router.beforeEach((to,from,next)=>{
  const needLogin = to.matched.some(item => item.meta && item.meta.login);
  if(needLogin) {
    const isLogin = document.cookie.includes('login=true');
    if(isLogin) {
      next()
    } else {
      const toLoginFlag = window.confirm('该页面需要登录后访问，要去登录吗？')
      if(toLoginFlag) {
        next('/login')
      }
    }
  } else {
    next();
  }
})
router.beforeResolve((to,from,next)=>{
 next();
})
router.afterEach((to,from,next)=>{

})

new Vue({
  axios,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
