import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueQrcodeReader from "vue-qrcode-reader";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Antd from 'ant-design-vue';
import VueScrollTo from 'vue-scrollto'
import 'ant-design-vue/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// Install VueQrReader
Vue.use(VueQrcodeReader);
// Install Ant Design
Vue.use(Antd);
// Install Vue Scrollto
Vue.use(VueScrollTo);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
