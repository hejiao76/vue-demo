import Vue from 'vue'
import ElementUI from 'element-ui'
// 引入axios
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import './style/reset.css'
import 'element-ui/lib/theme-default/index.css'
import './style/common.styl'

Vue.use(ElementUI)

// // 创建基本的axios配置
var $http = axios.create({
})
// 挂载到vue的原型
Vue.prototype.$http = $http

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
