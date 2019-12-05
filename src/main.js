/*
 * @Author: your name
 * @Date: 2019-11-26 13:32:06
 * @LastEditTime: 2019-12-04 20:34:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xmscd:\newxmsc\newxmsc\src\main.js
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import './font/iconfont.css'
import MintUI from 'mint-ui' 
import 'mint-ui/lib/style.css'
import store from './store'
Vue.use(MintUI)
import axios from 'axios'
Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
