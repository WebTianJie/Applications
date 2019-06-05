import Vue from 'vue';

import Router from 'vue-router';

import DefaultPage from '@/layout/default';

import BlankPage from '@/layout/blank';

import Index from '@/page/index';

import ChangeCity from '@/page/changeCity';

import GoodsList from '@/page/goodslist';

import Login from '@/page/login';

import Register from '@/page/register';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'defalutPage',
      component: DefaultPage,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'index',
          component: Index,
        },
        {
          path: '/changeCity',
          name: 'changeCity',
          component: ChangeCity,
        },
        {
          path: '/index/goodslist',
          name: 'goodslist',
          component: GoodsList,
        },
      ],
    },
    {
      path: '/blank',
      name: 'blank',
      component: BlankPage,
      children:[
        {
          path:'login',
          name:'login',
          component: Login,
        },
        {
          path:'register',
          name:'register',
          component: Register,
        },
      ]
    },
  ],
});
