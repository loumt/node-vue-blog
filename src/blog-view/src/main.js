import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './mock'
import i18n from './lang'
import './icons'
import * as filters from '@/utils/filter.js'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss'

Vue.config.productionTip = false
Object.keys(filters).forEach(key =>{
  Vue.filter(key, filters[key])
})

Vue.use(Element,{
  size : 'medium'
})

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
