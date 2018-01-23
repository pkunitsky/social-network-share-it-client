export default {
  methods: {
    syncColorTheme () {
      const {settings} = this.$store.state
      const {theme} = this.$vuetify

      const merger = (settings.nightMode)
        ? settings.themes.dark
        : settings.themes.light

      Object.keys(merger).forEach(key => {
        theme[key] = merger[key]
      })
    }
  },

  computed: {
    showNotifications: {
      get () {
        const {settings} = this.$store.state
        return settings.showNotifications
      },
      set () {
        this.$store.commit('settings/toggle', 'showNotifications')
      }
    },

    nightMode: {
      get () {
        const {settings} = this.$store.state
        return settings.nightMode
      },
      set () {
        const {settings} = this.$store.state
        this.$store.commit('settings/toggleNightMode')
        this.$store.commit(
          'notify',
          `Night mode is turned ${settings.nightMode ? 'on':'off'}`
        )
        this.syncColorTheme()
      }
    }
  }
}
