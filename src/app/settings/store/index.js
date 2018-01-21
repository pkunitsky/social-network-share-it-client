export default {
  state: {
    showNotifications: true,
    nightMode: false
  },

  mutations: {
    toggle (state, setting) {
      state[setting] = !state[setting]
    }
  }
}
