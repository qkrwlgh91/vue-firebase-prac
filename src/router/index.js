import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import OrderConfirm from '../views/pages/order/order-confirm'
import OrderDecide from '../views/pages/order/order-decide'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/order-confirm',
    name: 'order-confirm',
    component: OrderConfirm
  },
  {
    path: '/order-decide',
    name: 'order-decide',
    component: OrderDecide
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
