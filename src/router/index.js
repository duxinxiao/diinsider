import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Login from '@/components/login/Login'
import Register from '@/components/register/Register'
import Startup from '@/components/list/Startup'
import Investor from '@/components/list/Investor'
import Home from '@/components/home/Home'
import News from '@/components/news/News'
import InvestorDetail from '@/components/list/InvestorDetail'
import StartupDetail from '@/components/list/StartupDetail'

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
        path: 'investor',
        name: 'Investor',
        component: Investor,
      }, {
        path: 'news',
        name: 'News',
        component: News,
      }, {
        path: 'investorDetail',
        name: 'InvestorDetail',
        component: InvestorDetail,
      }, {
        path: 'startupDetail',
        name: 'StartupDetail',
        component: StartupDetail,
      }],
    },
  ],
})
