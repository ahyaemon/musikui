import Vue from "vue"
import App from "./App.vue"
import router from "./route/router"
import store from "./store/store"
import VueScrollTo from "vue-scrollto"
import load_icons from "./icon"

load_icons()
Vue.config.productionTip = false

Vue.use(VueScrollTo as any, {
  duration: 1000,
  easing: "ease",
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
