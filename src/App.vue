<template>
  <v-app :dark="nightMode">
    <v-navigation-drawer app
      fixed
      :clipped="true"
      v-model="drawer">
      <v-container fluid fill-height>
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
      </v-container>
    </v-navigation-drawer>

    <v-toolbar app
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
                    v-model="notifications"
                    color="primary">
                  </v-switch>
                </v-list-tile-action>
                <v-list-tile-title>Enable notifications</v-list-tile-title>
              </v-list-tile>
              
              <v-list-tile>
                <v-list-tile-action>
                  <v-switch
                    v-model="nightMode"
                    color="primary">
                  </v-switch>
                </v-list-tile-action>
                <v-list-tile-title>Night mode</v-list-tile-title>
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
      <v-container fluid fill-height grid-list-md>
        <router-view />
      </v-container>
    </v-content>

      <v-snackbar
        :timeout="snackbar.timeout"
        v-model="snackbar.visible"
        left>
        {{ snackbar.text }}
      <v-btn dark flat @click.native="hideSnackbar">Close</v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'

  export default {
    computed: {
      ...mapState(['snackbar']),
      notifications: {
        get () {return this.$store.state.settings.notifications},
        set () {this.$store.commit('settings/toggle', 'notifications')}
      },
      nightMode: {
        get () {return this.$store.state.settings.nightMode},
        set () {
          this.$store.commit('settings/toggle', 'nightMode')
          const {nightMode} = this.$store.state.settings
          this.$store.commit('notify',
            `Turning night mode ${nightMode ? 'on':'off'}`
          )
        }
      }
    },

    methods: {
      ...mapMutations(['hideSnackbar'])
    },

    data: () => ({
      menu: null,
      drawer: null,
      items: [
        {
          text: 'Messages',
          to: '/messages',
          badge: 5,
          icon: 'mail'
        },
        {
          text: 'My profile',
          to: null,
          badge: null,
          icon: 'account_circle'
        },
        {
          text: 'Friends',
          to: null,
          badge: null,
          icon: 'contacts'
        },
        {
          text: 'Articles',
          to: '/articles',
          badge: null,
          icon: 'library_books',
        },
        {
          text: 'Discover',
          to: '/discover',
          badge: null,
          icon: 'camera'
        },
        {
          text: 'Settings',
          to: '/settings',
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
          to: null,
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
    border-bottom: 1px solid rgba(0,0,0, 0.20) !important;
  }
  .btn__content::before { opacity: 0.70 !important }

  
  /* light theme customizations for drawer */
  .theme--light .list__tile { opacity: 0.70 !important; }
  .theme--light .list__tile--active {
    opacity: 1 !important;
    color: rgba(0,0,0, 0.87) !important;
    background: rgba(0,0,0,.12) !important;
  }
  .theme--light .list__tile--active .list__tile__content { color: rgba(0,0,0, 0.87) !important; }
  .theme--light .list__tile--active .icon { color: rgba(0,0,0, 0.87) !important; }
  
  /* dark theme customizations for drawer */
  .theme--dark .list__tile { opacity: 0.45 !important; }
  .theme--dark .list__tile--active {
    opacity: 1 !important;
    color: #fff !important;
    background: rgba(0,0,0,.12) !important;
  }
  .theme--dark .list__tile--active .list__tile__content { color: #fff !important; }
  .theme--dark .list__tile--active .icon { color: #fff !important; }
</style>
