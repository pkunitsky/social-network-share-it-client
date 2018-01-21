/** global store module */

export default {
  state: {
    snackbar: {
      visible: false,
      timeout: 2000,
      text: 'oh hi mark'
    }
  },

  mutations: {
    notify (state, text, timeout) {
      /** stop executing if notifications are turned off */
      if (state.settings.showNotifications === false) return


      state.snackbar.text = text
      if (timeout) state.snackbar.timeout = timeout

      state.snackbar.visible = true
    },

    hideSnackbar (state) {
      state.snackbar.visible = false
    }
  }
}
