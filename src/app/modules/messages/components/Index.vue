<template>
  <v-layout>
    <v-flex md4>
      <v-card>
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
      </v-card>
    </v-flex>

    <v-flex md8>
      <v-card>
        
      </v-card>
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
            { from: "Thomas Bangalter", text: "hello" },
            { from: "Thomas Bangalter", text: "It\'s me.", new: true },
            { from: "Thomas Bangalter", text: "Just wondering.. Is it still a thing?", new: true },
            { from: "Thomas Bangalter", text: "I mean you and Britta", new: true },
          ]
        },
        {
          with: "John Doe",
          thumbnail: "https://vuetifyjs.com/static/doc-images/lists/2.jpg",
          msgs: [
            { from: "John Doe", text: "A-yo, what is gucci, ma man?", new: true },
            { from: "John Doe", text: "Can I come to party? It's gonna be lit!!", new: true },
          ]
        },
        {
          with: "Jane Winslet",
          thumbnail: "https://vuetifyjs.com/static/doc-images/lists/3.jpg",
          msgs: [
            { from: "Jane Winslet", text: "Oh my gosh, I just saw the pictures.. This place is awesome! :)" },
            { text: "Why don't we go there someday?" },
            { from: "Jane Winslet", text: "That would be great" },
            { from: "Jane Winslet", text: "Hey, do you have any plans for tommorow night?", new: true }
          ]
        },
        {
          with: "Britta Holt",
          thumbnail: "https://vuetifyjs.com/static/doc-images/lists/4.jpg",
          msgs: [
            { from: "Britta Holt", text: "How is it going, bruh?" },
            { text: "Damn, girl. It's goin good )" },
            { from: "Britta Holt", text: "Wanna hangout sometime or what?", new: true }
          ]
        }
      ],
    })
  }
</script>
