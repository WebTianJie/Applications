import 'element-ui/lib/theme-chalk/index.css';
import Element from 'element-ui';
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.use(Element, { size: 'small', zIndex: 3000 });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
