import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Login from '@/components/login/Login'
import Register from '@/components/register/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [{
        path: 'login',
        name: 'Login',
        component: Login,
      }, {
        path: 'register',
        name: 'Register',
        component: Register,
      }],
    },
  ],
})
