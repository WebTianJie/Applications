import 'element-ui/lib/theme-chalk/index.css';
import Element from 'element-ui';
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store/store';

Vue.config.productionTip = false;

Vue.use(Element, { size: 'small', zIndex: 3000 });

Vue.directive('document-click', {
  // 当被绑定的元素插入到 DOM 中时……
  bind(el, binding) {
    // el.绑定的节点,binding:绑定事件的一些信息
    document.addEventListener('click', binding.value, false);
  },
  inserted() {
    // 聚焦元素
  },
  update() {},
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
