import Vue from 'vue'
import Router from 'vue-router'
import slider from '@/components/slider'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'slider',
      component: slider
    }
  ]
})
