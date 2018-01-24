export default {
  state: {
    optimizedMode: true,
    showNotifications: true,
    nightMode: false,
    themes: {
      light: {
        primary: '#1976D2'
      },
      dark: {
        primary: '#212121'
      }
    },
  },

  mutations: {
    setNightMode (state, payload) {
      state.nightMode = payload
    },

    setShowNotifications (state, payload) {
      state.showNotifications = payload
    },

    toggle (state, setting) {
      state[setting] = !state[setting]
    },

    toggleNightMode (state) {
      state.nightMode = !state.nightMode
    }
  }
}
