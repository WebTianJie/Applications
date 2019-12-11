/**

 * author  Administrator 创建

 * date 2019-12-09 09:33

 */
import Index from './pages/index.js'
import MoveIndex from './pages/moveIndex.js'
import MoveDetail from './pages/moveDetail.js'
import Login from './pages/login.js'
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
            component: MoveIndex,
            beforeEnter(to,from,next){
                console.log(to);
                next();
            }
        },
        {
            path:'/move/:id',
            name:'move',
            component: MoveDetail
        },
        {
            path:'/login',
            name:'login',
            component: Login
        }
    ],
    mode:'hash'
})

export  default router;