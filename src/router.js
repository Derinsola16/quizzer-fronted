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
      path: '/candidate/',
      component: () => import('@/views/Candidate/Quiz.vue'),

      children: [
        // Set question will be rendered inside Candidate's <router-view>
        { path: '', name: 'Subjects', component: () => import('@/views/Candidate/Subjects.vue') },

        // View question will be rendered inside Candidate's <router-view>
        //{ path: 'viewquestion', name: 'ViewQuestion', component: () => import('@/views/Candidate/ViewQuestion.vue') },

        // View quiz will be rendered inside Candidate's <router-view>
        //{ path: 'viewquiz', name: 'ViewQuiz', component: () => import('@/views/Candidate/ViewQuiz.vue') },
      ]

    },
    {
      path: '/subject/',
      component: () => import('@/views/Candidate/Subjects.vue'),

      children: [
        // Each question will be rendered inside Candidate's <router-view>
        { path: 'Node', name: 'Node', component: () => import('@/views/Subject/Node.vue') },

        // Each question will be rendered inside Subject's <router-view>
        { path: 'javascript', name: 'Javascript', component: () => import('@/views/Subject/Javascript.vue') },

        // Each question will be rendered inside Subject's <router-view>
        { path: 'vues', name: 'Vues', component: () => import('@/views/Subject/Vues.vue') },
      ]

    }
  ]
})
