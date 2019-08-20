import Vue from 'vue'
import App from './App'
import router from './route'
import store from './store/index'
import axios from '../api/axios'
Vue.prototype.$axios = axios


// import Mint from 'mint-ui'; 
// import 'mint-ui/lib/style.css'
// Vue.use(Mint);

import mandMobile from 'mand-mobile'
import 'mand-mobile/lib/mand-mobile.css'
Vue.use(mandMobile)

import echarts from 'echarts'
Vue.prototype.$echarts = echarts


Vue.config.productionTip = false


// Vue.use(router);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
