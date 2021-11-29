import Vue from 'vue';
import axios from 'axios';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueManonry from 'vue-masonry-css';
import App from './App.vue';
import router from './router';

library.add(faTrashAlt);
library.add(faThumbsUp);

axios.defaults.baseURL = process.env.VUE_APP_BACKEND_URL;

Vue.config.productionTip = false;
Vue.use(VueManonry);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
