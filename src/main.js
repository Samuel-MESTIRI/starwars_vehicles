import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './assets/tailwind.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VModal from 'vue-js-modal'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

Vue.use(VModal)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
