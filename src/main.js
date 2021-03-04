import Vue from 'vue'
import VueMeta from 'vue-meta'
import App from './App.vue'

import Vuelidate from 'vuelidate'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import '@/assets/css/mobster.css'

// Animate on Scroll
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()

import axios from 'axios'
import qs from 'qs'

import Cloudinary, { CldImage, CldTransformation } from "cloudinary-vue";

Vue.prototype.$http = axios
Vue.prototype.$qs = qs

import router from './router'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})

Vue.use(Cloudinary, {
  configuration: { cloudName: "myflag" },
  components: {
    CldImage,
    CldTransformation
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')