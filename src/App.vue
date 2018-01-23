<template>
  <v-app :dark="nightMode">
    <v-navigation-drawer app
      fixed
      v-if="authorized"
      v-model="drawer">
      <div class="center">
        <v-list>
          <template v-for="(item, i) in items">
            <v-list-tile v-if="item.to" :disabled="!item.to" :to="item.to">
              <v-list-tile-action>
                <v-badge v-model="item.badge" overlap overlay>
                  <span slot="badge">{{ item.badge }}</span>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-badge>
              </v-list-tile-action>
              <v-list-tile-content>
  
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
                
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </div>
    </v-navigation-drawer>

    <v-toolbar app
      v-if="authorized"
      elevation-0
      :color="nightMode ? null : 'white'">
      <v-toolbar-title
        class="ml-0 pl-3"
        :style="$vuetify.breakpoint.smAndUp ? 'width: 300px; min-width: 250px' : 'min-width: 72px'">
        <v-toolbar-side-icon
          @click.stop="drawer = !drawer">
        </v-toolbar-side-icon>
        <!-- <span class="hidden-xs-only"></span> -->
      </v-toolbar-title>

      <div class="d-flex align-center" style="margin-left: auto">
        <v-btn icon>
          <v-icon>notifications</v-icon>
        </v-btn>

        <v-menu
          offset-x
          :close-on-content-click="false"
          :nudge-width="220"
          v-model="menu"
          transition="scale-transition"
          origin="top right">

          <v-btn icon large slot="activator">
            <v-avatar size="32px" tile>
              <v-icon style="font-size: 2.3rem;">account_circle</v-icon>
            </v-avatar>
          </v-btn>

          <v-card>
            <v-list>
              <v-list-tile avatar>
                <v-list-tile-avatar>
                  <v-icon>account_circle</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>John Leider</v-list-tile-title>
                  <v-list-tile-sub-title>Founder of Vuetify.js</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
            <v-divider></v-divider>
            <v-list>
              <v-list-tile>
                <v-list-tile-action>
                  <v-switch
                    v-model="nightMode"
                    color="primary">
                  </v-switch>
                </v-list-tile-action>
                <v-list-tile-title>Night mode</v-list-tile-title>
              </v-list-tile>

              <v-list-tile>
                <v-list-tile-action>
                  <v-switch
                    v-model="showNotifications"
                    color="primary">
                  </v-switch>
                </v-list-tile-action>
                <v-list-tile-title>Show notifications</v-list-tile-title>
              </v-list-tile>
            </v-list>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat @click="menu = false">Cancel</v-btn>
              <v-btn color="primary" flat @click="menu = false">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>

      </div>
    </v-toolbar>
    
    <v-content>
      <router-view v-if="!authorized" name="fullsize" />
      
      <v-container v-if="authorized" fluid fill-height v-bind="{ [`grid-list-${size}`]: true }">
        <router-view />
      </v-container>
    </v-content>

      <v-snackbar
        :timeout="notification.timeout"
        v-model="notification.visible"
        left>
        {{ notification.text }}
    </v-snackbar>
  </v-app>
</template>

<script>
  import {mapState} from 'vuex'

  export default {    
    computed: {
      size () {
        return this.$vuetify.breakpoint.name
      },

      ...mapState({
        notification: state => state.notification,
        authorized: state => state.auth.authorized
      }),

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
          this.$store.commit('settings/toggleNightMode')
          this.$store.commit(
            'notify',
            `Night mode is turned ${state.nightMode ? 'on':'off'}`
          )
          this.syncColorTheme()
        }
      }
    },

    created () {
      this.syncColorTheme()
    },

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

    data: () => ({
      menu: null,
      drawer: null,
      items: [
        {
          text: 'My profile',
          to: null,
          badge: null,
          icon: 'account_circle'
        },
        {
          text: 'Messages',
          to: '/messages',
          badge: null,
          icon: 'mail'
        },
        {
          text: 'Friends',
          to: null,
          badge: null,
          icon: 'contacts'
        },
        {
          text: 'Articles',
          to: null,
          badge: null,
          icon: 'library_books',
        },
        {
          text: 'Discover',
          to: null,
          badge: null,
          icon: 'camera'
        },
        {
          text: 'Settings',
          to: null,
          badge: null,
          icon: 'settings'
        },
        {
          text: 'About Us',
          to: null,
          badge: null,
          icon: 'help'
        },
        {
          text: 'Test Page',
          to: '/test',
          badge: null,
          icon: 'warning'
        },
        {
          text: 'Auth',
          to: null,
          badge: null,
          icon: 'people'
        }
      ]
    })
  }
</script>

<style>
  .list {
    width: 100%;
  }
  .toolbar {
    box-shadow: none;
    border-bottom: 1px solid rgba(0,0,0, 0.12) !important;
  }
  .center {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .theme--light .toolbar .icon { color: #A0A0A0 !important }
  
  /* light theme customizations for drawer */
  .theme--light .navigation-drawer .list__tile { opacity: 0.70 !important; }
  .theme--light .navigation-drawer .list__tile--active {
    opacity: 1 !important;
    color: rgba(0,0,0, 0.87) !important;
    background: rgba(0,0,0,.12) !important;
  }
  .theme--light .navigation-drawer .list__tile--active .list__tile__content { color: rgba(0,0,0, 0.87) !important; }
  .theme--light .navigation-drawer .list__tile--active .icon { color: rgba(0,0,0, 0.87) !important; }
  
  /* dark theme customizations for drawer */
  .theme--dark .navigation-drawer .list__tile { opacity: 0.45 !important; }
  .theme--dark .navigation-drawer .list__tile--active {
    opacity: 1 !important;
    color: #fff !important;
    background: rgba(0,0,0,.12) !important;
  }
  .theme--dark .navigation-drawer .list__tile--active .list__tile__content { color: #fff !important; }
  .theme--dark .navigation-drawer .list__tile--active .icon { color: #fff !important; }
</style>
