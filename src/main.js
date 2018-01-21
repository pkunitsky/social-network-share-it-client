import Vue from 'vue'
import App from './App'
import store from '@/store'
import router from '@/router'

/** vue plugins */
import '@/plugins/vuetify'
import '@/plugins/nprogress'
import '@/plugins/vuex-router-sync'

import '@/assets/css/styles.css'

/** global vue components */
import Footer from '@/app/_global/components/Footer'

Vue.component('Footer', Footer)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
