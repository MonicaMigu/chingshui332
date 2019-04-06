import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: '首頁'        
      },
      component: Home
    },
    {
      path: '/index.html',
      redirect: '/'
    },
    {
      path: '/news',
      name: 'news',
      meta: {
        title: '最新消息'
      },
      component: () => import('./views/News.vue')
    },
    {
      path: '/introduction',
      name: 'introduction',
      meta: {
        title: '品牌介紹'
      },
      component: () => import('./views/Introduction.vue')
    },
    {
      path: '/salePage',
      name: 'salePage',
      meta: {
        title: '團購專區'
      },
      component: () => import('./views/SalePage.vue')
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: '關於我們'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/About.vue')
    }
  ]
})