/**

 * author  Administrator 创建

 * date 2019-12-06 15:47

 */

import App from './app.js'
import  router from './router.js'
import store from './store/index.js'
store.dispatch('loginUser/syncLocal')
const template=`<App/>`;

const config={
    el:'#app',
    template,
    components:{
        App
    },
    router,
    store
}
new Vue(config)