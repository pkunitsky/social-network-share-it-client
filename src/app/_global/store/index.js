/** global store module */

export default {
  state: {
    notification: {
      text: null,
      visible: false,
      timeout: 2000
    }
  },

  mutations: {
    notify (state, text, timeout) {
      /** stop executing if notifications are turned off */
      if (state.settings.showNotifications === false) return


      state.notification.text = text
      if (timeout) state.notification.timeout = timeout

      state.notification.visible = true
    }
  }
}
