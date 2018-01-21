import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

/** modules */
import global from '@/app/_global/store'
import auth from '@/app/auth/store'
import messages from '@/app/messages/store'
import discover from '@/app/discover/store'
import settings from '@/app/settings/store'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,

  ...global,

  modules: {
    auth: {
      namespaced: true,
      ...auth
    },
    messages: {
      namespaced: true,
      ...messages
    },
    settings: {
      namespaced: true,
      ...settings
    },
    discover: {
      namespaced: true,
      ...discover
    }
  },

  plugins: [createPersistedState()]
})
