import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/Profile.vue')
    },
    {
      path: '/leaderboard',
      name: 'leaderboard',
      component: () => import('../views/Leaderboard.vue')
    },
    {
      path: '/play',
      name: 'play',
      component: () => import('../views/Play.vue'),
      props: route => ({ hash: route.query.hash }),
    }
  ]
})