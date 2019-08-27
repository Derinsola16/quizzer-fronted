import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'register',
      component: () => import('./views/Auth/Register.vue')
    },
    {
      path: '/login',
      name: 'auth',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/Auth/Login.vue')
    },
    {
      path: '/admin/',
      //name: 'setquestion',
      component: () => import('@/views/Admin/Examiner.vue'),

     children: [
        // Set question will be rendered inside Admin's <router-view>
       { path: '', name: 'SetQuestion', component: () => import('@/views/Admin/SetQuestion.vue')},

       // View question will be rendered inside Admin's <router-view>
       { path: 'viewquestion', name: 'ViewQuestion', component: () => import('@/views/Admin/ViewQuestion.vue')},

       // View quiz will be rendered inside Admin's <router-view>
       { path: 'viewquiz', name: 'ViewQuiz', component: () => import('@/views/Admin/ViewQuiz.vue')},
     ]

    },
    {
      path: '/exam/',
      component: () => import('@/views/Exam/Main.vue'),

      children: [
        // Each will be rendered inside Exam's <router-view>
        { path: '', name: 'Start', component: () => import('@/views/Exam/Start.vue')},

        // Each will be rendered inside Exam's <router-view>
        { path: '/exam/:id', name: 'Exam', component: () => import('@/views/Exam/Exam.vue') },

        // Each will be rendered inside Exam's <router-view>
        { path: '/exam/:id/success', name: 'Success', component: () => import('@/views/Exam/Success.vue') },

     ]

    }
  ]
})
