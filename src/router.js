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
