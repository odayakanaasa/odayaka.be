import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Thucdonquanan from '@/components/Thucdonquanan'
import Menutrasua from '@/components/Menutrasua'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/thucdonquanan',
      name: 'Thucdonquanan',
      component: Thucdonquanan
    },
    {
      path: '/menutrasua',
      name: 'Menutrasua',
      component: Menutrasua
    }
  ]
})
