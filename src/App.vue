<template>
  <v-app id="inspire">
    <v-navigation-drawer
      fixed
      clipped
      app
      v-model="drawer">

      <v-list dense>
        <template v-for="(item, i) in items">
          <v-layout
            row
            v-if="item.heading"
            align-center
            :key="i">
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>

          <v-list-tile v-else @click="">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      color="blue darken-3"
      dark
      app
      clipped-left
      fixed>
      <v-toolbar-title :style="$vuetify.breakpoint.smAndUp ? 'width: 300px; min-width: 250px' : 'min-width: 72px'" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-xs-only">Share.it</span>
      </v-toolbar-title>
      <div class="d-flex align-center" style="margin-left: auto">
        <v-btn icon>
          <v-icon>notifications</v-icon>
        </v-btn>
        <v-btn icon large>
          <v-avatar size="32px" tile>
            <v-icon style="font-size: 2.3rem;">account_circle</v-icon>
          </v-avatar>
        </v-btn>

        <v-menu
          offset-x
          :close-on-content-click="false"
          :nudge-width="200"
          v-model="menu"
          transition="scale-transition">

          <v-btn icon slot="activator">
            <v-icon>settings</v-icon>
          </v-btn>

          <v-card>
            <v-list>
              <v-list-tile avatar>
                <v-list-tile-avatar>
                  <img src="/static/doc-images/john.jpg" alt="John">
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>John Leider</v-list-tile-title>
                  <v-list-tile-sub-title>Founder of Vuetify.js</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-btn
                    icon
                    :class="fav ? 'red--text' : ''"
                    @click="fav = !fav">

                    <v-icon>favorite</v-icon>
                  </v-btn>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
            <v-divider></v-divider>
            <v-list>
              <v-list-tile>
                <v-list-tile-action>
                  <v-switch v-model="message" color="purple"></v-switch>
                </v-list-tile-action>
                <v-list-tile-title>Enable messages</v-list-tile-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-action>
                  <v-switch v-model="hints" color="purple"></v-switch>
                </v-list-tile-action>
                <v-list-tile-title>Enable hints</v-list-tile-title>
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
      <v-container fluid fill-height>
        <v-layout>
          <router-view />
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      fav: true,
      menu: false,
      message: false,
      hints: true,

      drawer: null,
      items: [
        { icon: 'account_circle', text: 'My profile' },
        { icon: 'contacts', text: 'Friends' },
        { icon: 'mail', text: 'Messages' },
        { icon: 'public', text: 'News' },
        { icon: 'favorite', text: 'Favorites' },
        { icon: 'camera', text: 'Discover' },
        { icon: 'settings', text: 'Settings' },
        { icon: 'help', text: 'About Us' }
      ]
    })
  }
</script>
