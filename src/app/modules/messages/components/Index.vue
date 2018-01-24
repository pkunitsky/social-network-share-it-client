<template>
  <v-layout>
    <v-flex md4>
      <v-toolbar :dark="$store.state.settings.nightMode" :color="$store.state.settings.nightMode ? null:'white'">
        <v-text-field solo prepend-icon="search" placeholder="Search" class="toolbar__textfield"></v-text-field>
        <v-btn icon>
          <v-icon>add</v-icon>
        </v-btn>
      </v-toolbar>

      <v-list three-line>
        <template v-for="(talk, i) in talks">
          <v-list-tile avatar :key="talk.name" @click="">
            <v-list-tile-avatar>
              <img :src="talk.thumbnail" />
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title v-html="talk.with" />
              <v-list-tile-sub-title v-html="talk.msgs[talk.msgs.length - 1].text" />
            </v-list-tile-content>
          </v-list-tile>
          <v-divider v-if="i + 1 !== talks.length" inset />
        </template>
      </v-list>
    </v-flex>

    <v-flex md8>

    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      talks: [
        {
          with: "Thomas Bangalter",
          thumbnail: "https://vuetifyjs.com/static/doc-images/lists/1.jpg",
          msgs: [
            { from: "Thomas Bangalter", text: "hello", new: false },
            { from: "Thomas Bangalter", text: "It\'s me.", new: true },
            { from: "Thomas Bangalter", text: "I was wondering..", new: true },
          ]
        },
        {
          with: "Britta Holt",
          thumbnail: "https://vuetifyjs.com/static/doc-images/lists/4.jpg",
          msgs: [
            { from: "Britta Holt", text: "How is it going, bruh?", new: false },
            { text: "Damn, girl. It's goin good )" },
            { from: "Britta Holt", text: "Wanna hangout sometime or what?", new: true }
          ]
        }
      ],
    })
  }
</script>
