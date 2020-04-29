import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import jQuery from "jquery";
import VueSweetalert2 from 'vue-sweetalert2';
const $ = jQuery;
window.$ = $;
import 'bootstrap/dist/js/bootstrap.min.js';
import 'popper.js/dist/popper.min.js';
import  './assets/app.scss';
import './assets/vendor/jquery-easing/jquery.easing.js';


Vue.config.productionTip = false;
Vue.use(VueSweetalert2);

store.dispatch("getUser");

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
