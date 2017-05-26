import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import counter from '@/components/counter'
import discount from '@/components/discount'
import ebook from '@/components/ebook'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/counter',
      name: 'counter',
      component: counter
    },
    {
      path: '/discount',
      name: 'discount',
      component: discount
    },
    {
      path: '/ebook',
      name: 'ebook',
      component: ebook
    }
  ]
})
