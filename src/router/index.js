import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: require('../pages/index').default
    },
      {
          path: '/veritify',
          name: 'veritify',
          component: require('../pages/veritify').default
      }
  ]
})
