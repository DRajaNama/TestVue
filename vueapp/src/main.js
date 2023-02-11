import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
import axios from 'axios';
Vue.prototype.$axios = axios;
import { store } from './store';

/* eslint-disable no-new */
new Vue({
  store,
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')
