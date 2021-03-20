import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import OrderConfirm from '../views/pages/order/order-confirm'
import OrderDecide from '../views/pages/order/order-decide'
import Logistics from '../views/pages/basic-info/logistics-assignment-local-setting-popup.vue'
import ListPdoPopup from '../views/pages/order/list-pdo-popup.vue'
import GiftSetting from '../views/pages/order/gift-setting.vue'
import OrderPrintForm from '../views/pages/order/order-confirm/order-confirm-order-print-form-popup.vue'
import SetOrderForm from '../views/pages/order/order-confirm/set-order-confirm-order-print-form-popup.vue'

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
    path: '/order-confirm-order-print-form-popup',
    name: 'order-confirm-order-print-form-popup',
    component: OrderPrintForm
  },
  {
    path: '/order-decide',
    name: 'order-decide',
    component: OrderDecide
  },
  {
    path: '/logistics-assignment-local-setting-popup',
    name: 'logistics-assignment-local-setting-popup',
    component: Logistics
  },
  {
    path: '/list-pdo-popup',
    name: 'list-pdo-popup',
    component: ListPdoPopup
  },
  {
    path: '/gift-setting',
    name: 'gift-setting',
    component: GiftSetting
  },
  {
    path: '/set-order-confirm-order-print-form-popup',
    name: 'set-order-confirm-order-print-form-popup',
    component: SetOrderForm
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
