import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import ElementUI from 'element-ui'
import excel from 'vue-excel-export'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(excel)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
