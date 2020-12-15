import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueQrcodeReader from "vue-qrcode-reader";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import Antd from "ant-design-vue";
import VueScrollTo from "vue-scrollto";
import VueToast from "vue-toast-notification";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "vue-toast-notification/dist/theme-sugar.css";
import "ant-design-vue/dist/antd.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { store } from "./store/store";
import "./plugins/element";

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
// Install VueQrReader
Vue.use(VueQrcodeReader);
// Install Ant Design
Vue.use(Antd);
// Install Vue Scrollto
Vue.use(VueScrollTo);
//Install VueToast
Vue.use(VueToast);
//Install ElementUI
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
