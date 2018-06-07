import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

import App from './components/App.vue'
import store from './store/store.js'
import router from './router/route.js'


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
