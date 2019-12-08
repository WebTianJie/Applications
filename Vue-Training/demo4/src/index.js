/**

 * author  Administrator 创建

 * date 2019-12-06 15:47

 */

import App from './app.js'
import Index from './pages/index.js'
import MoveIndex from './pages/moveIndex.js'
const router=new VueRouter({
    routes:[
        {
            path:'/',
            name:'index',
            component:Index
        },
        {
          path:'/moveIndex',
          name:'moveIndex',
          component: MoveIndex
        }
    ],
    mode:'history'
})

const template=`<App/>`;


const config={
    el:'#app',
    template,
    components:{
        App
    },
    router
}
new Vue(config)