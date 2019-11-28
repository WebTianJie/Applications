import  Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
Vue.use(Router);
export default  new Router({
  mode:'history',
  linkActiveClass: 'active',
  routes:[
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      name:'home',
      component:Home
    },{
      path:'/learn',
      name:'learn',
      component: ()=> import('../views/Learn')
    },{
      path:'/student',
      name:'student',
      component: ()=>import('../views/Student')
    }, {
      path: '/about',
      name: 'about',
      component: () => import('../views/About')
    }
    , {
      path:'/NotFound',
      component:()=>import('../components/comu/NotFound')
    },
    {
      path:'*',
      redirect(to){
        console.log(to);//获取想要访问的信息
        if(to.path=='/'){
          return '/home'
        }else{
          return'/NotFound'
        }
      }
    }
    ,{
      path:'/comu',
      name:'comu',
      component: ()=>import('../views/Comu'),
      redirect:'/academic',
      children:[
        {
          path: '/academic',
          name: 'academic',
          component: () => import('../components/comu/Academic')
        },
        {
          path: '/download',
          name: 'download',
          component: () => import('../components/comu/DownLoad')
        },
        {
          path: '/personal',
          name: 'personal',
          component: () => import('../components/comu/Personal')
        }
      ]
    }
  ]
})



























// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
//
// Vue.use(VueRouter)
//
// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     //这是为了懒加载,加快第一页面的加载速度,当组件被访问的时候才会加载
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]
//
// const router = new VueRouter({
//   mode:'history',
//   routes
// })
//
// export default router
