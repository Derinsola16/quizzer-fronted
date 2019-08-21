import Vue from 'vue'
import Router from 'vue-router'
import Register from './views/Auth/Register.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'auth',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Auth/Login.vue')
    },
    {
      path: '/setquiz',
      name: 'setquiz',
     component: () => import('./views/SetQuiz.vue'),
    

    }
  ]
})
