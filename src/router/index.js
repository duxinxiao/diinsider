import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Login from '@/components/login/Login'
import Register from '@/components/register/Register'
import Startup from '@/components/startup/Startup'
import Ngo from '@/components/ngo/Ngo'
import Investor from '@/components/investor/Investor'
import Institution from '@/components/institution/Institution'
import Home from '@/components/home/Home'
import News from '@/components/news/News'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [{
        path: '',
        name: 'Home',
        component: Home,
      }, {
        path: 'login',
        name: 'Login',
        component: Login,
      }, {
        path: 'register',
        name: 'Register',
        component: Register,
      }, {
        path: 'startup',
        name: 'Startup',
        component: Startup,
      }, {
        path: 'ngo',
        name: 'Ngo',
        component: Ngo,
      }, {
        path: 'investor',
        name: 'Investor',
        component: Investor,
      }, {
        path: 'institution',
        name: 'Institution',
        component: Institution,
      }, {
        path: 'news',
        name: 'News',
        component: News,
      }],
    },
  ],
})
