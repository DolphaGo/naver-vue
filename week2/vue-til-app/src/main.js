import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";

Vue.config.productionTip = false;

new Vue({
  router, store, // es6문법은 같으면 없애도 됨(a:a -> a)
  render: h => h(App)
}).$mount("#app");
