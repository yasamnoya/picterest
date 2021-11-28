import Vue from 'vue';
import axios from 'axios';
import 'bootstrap';
import App from './App.vue';
import router from './router';

axios.defaults.baseURL = process.env.VUE_APP_BACKEND_URL;

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
