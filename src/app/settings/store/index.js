export default {
  state: {
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

    lightbox: {
      history: true,
      spinner: false
    }
  },

  mutations: {
    toggle (state, setting) {
      state[setting] = !state[setting]
    },

    toggleNightMode (state) {
      state.nightMode = !state.nightMode
    }
  }
}
