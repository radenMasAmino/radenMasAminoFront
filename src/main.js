import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueSweetalert2 from 'vue-sweetalert2';
import VueSocketIO from 'vue-socket.io'

Vue.config.productionTip = false;

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueSweetalert2);
Vue.use(new VueSocketIO({
  debug: false,
  connection: 'http://backend.radenmasamino.org',
  
  // options: { path: "/my-app/" } //Optional options
}))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
