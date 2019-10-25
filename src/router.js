import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Search from './views/Search.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {path:"/",redirect:{name:'home'}},
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/login',
      name: 'login',
      component: ()=> import('./views/Login.vue')
    },
    {
      path: '/mine',
      name: 'mine',
      component: ()=> import('./views/Mine.vue')
    },
    {
      path: '/list/:active?',
      name: 'list',
      component: ()=> import('./views/Alllist.vue')
    },
    {
      path: '/good/:goodId',
      // path:'/good',
      name: 'good',
      component: ()=> import('./views/Good.vue')
    },
    // {
    //   path: '/cart',
    //   name: 'cart',
    //   component: ()=> import('./views/Cart.vue')
    // },
    {
      path: '/jiesuan',
      name: 'jiesuan',
      component: ()=> import('./views/Jiesuan.vue'),
    },
    {
      path: '/waitforpay',
      name: 'waitforpay',
      component: ()=> import('./views/WaitForPay.vue'),
    },
    {
      path: '/paysuccess',
      name: 'paysuccess',
      component: ()=> import('./views/PaySuccess.vue'),
    },
    {
      path: '/myorder',
      name: 'myorder',
      component: ()=> import('./views/MyOrder.vue'),
    },
    {
      path: '/givewarm',
      name: 'givewarm',
      component: ()=> import('./views/GiveWarm.vue'),
    },
    {
      path: '/givewarmdetail',
      name: 'givewarmdetail',
      component: ()=> import('./views/GiveWarmDetail.vue'),
    },
    {
      path: '/addressedit',
      name: 'addressedit',
      component: ()=> import('@/views/Addressedit.vue'),
    },
    // {
    //   path: '/addaddress',
    //   name: 'addaddress',
    //   component: ()=> import('@/views/Addaddress.vue'),
    // }
  ]
})
