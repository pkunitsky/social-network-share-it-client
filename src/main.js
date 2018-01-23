import Vue from 'vue'
import App from '@/app/App'
import store from '@/store'
import router from '@/router'

/** vue plugins */
import '@/plugins/v-img'
import '@/plugins/vuetify'
import '@/plugins/nprogress'
import '@/plugins/vuex-router-sync'

import '@/assets/css/styles.css'


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
