<template>
  <v-layout style="flex-grow: 1; overflow: hidden;">
    <v-flex md4>
      <v-card class="h-100">
        <v-toolbar :dark="$store.state.settings.nightMode" :color="$store.state.settings.nightMode ? null:'white'">
          <v-text-field solo prepend-icon="search" placeholder="Search" class="toolbar__textfield"></v-text-field>
          <v-btn icon>
            <v-icon>add</v-icon>
          </v-btn>
        </v-toolbar>
  
        <v-list three-line>
          <template v-for="(talk, i) in talks">
            <v-list-tile avatar :key="talk.with" @click="activeTalkIndex = i">
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
      <v-card class="h-100">
        <div class="chat-wrapper">
          <div class="chat-header grey--text">
            With:&nbsp;<span class="black--text">{{ talks[activeTalkIndex].with }}</span>
          </div>
          <ul class="chat clearfix px-4">
            <template
              v-if="msgs"
              v-for="(msg, i) in msgs">
              <div class="chat-divider grey--text" v-if="i === 0 || (msgs[i-1] && msg.dateSent.diff(msgs[i-1].dateSent, 'hours') > 2)">
                <span>{{ msg.dateSent | time }}</span>
              </div>

              <li
                :key="i"
                class="msg"
                :class="msg.from ? 'msg--left':'msg--right'">
                <img class="msg__avatar" :src="msg.avatar">
                <div class="msg__bubble">
                  {{ msg.text }}
                <svg class="msg__corner" viewBox="0 0 887.64 896.11">
                  <path  fill="#eceff1" d="M6.18,1.94C213.45,715.79,893.82,811.8,893.82,811.8S442.56,963.52,114.1,864.51C68.22,850.68,33,837.93,6.49,826.23a1.21,1.21,0,0,1-.31-.66V1.94Z"
                    transform="translate(-6.18 -1.94)" />
                </svg>
                </div>
              </li>
            </template>
          </ul>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import moment from 'moment'

  export default {
    filters: {
      time (v) {return v.fromNow()}
    },

    computed: {
      msgs () {return this.talks[this.activeTalkIndex].msgs}
    },

    data: () => ({
      activeTalkIndex: 0,

      talks: [
        {
          with: "Thomas Bangalter",
          thumbnail: "https://vuetifyjs.com/static/doc-images/lists/1.jpg",
          msgs: [
            {
              from: "Thomas Bangalter",
              avatar: "https://vuetifyjs.com/static/doc-images/lists/1.jpg",
              text: "hello",
              dateSent: moment('2017-02-08 09:35:26'),
              new: false
            },
            {
              from: "Thomas Bangalter",
              avatar: "https://vuetifyjs.com/static/doc-images/lists/1.jpg",
              text: "It\'s me.",
              dateSent: moment('2017-02-08 09:35:50'),
              new: true
            },
            {
              from: "Thomas Bangalter",
              avatar: "https://vuetifyjs.com/static/doc-images/lists/1.jpg",
              text: "Just wondering.. Is it still a thing?",
              dateSent: moment('2017-02-08 09:36:26'),
              new: true
            },
            {
              from: "Thomas Bangalter",
              avatar: "https://vuetifyjs.com/static/doc-images/lists/1.jpg",
              text: "I mean you and Britta",
              dateSent: moment('2018-01-25 10:37:26'),
              new: true
            },
          ]
        },
        {
          with: "John Doe",
          thumbnail: "https://vuetifyjs.com/static/doc-images/lists/2.jpg",
          msgs: [
            {
              from: "John Doe",
              avatar: "https://vuetifyjs.com/static/doc-images/lists/2.jpg",
              text: "A-yo, what is gucci, ma man?",
              dateSent: moment('2017-02-08 09:40:26'),
              new: true
            },
            {
              from: "John Doe",
              avatar: "https://vuetifyjs.com/static/doc-images/lists/2.jpg",
              text: "Can I come to party? It's gonna be lit!!",
              dateSent: moment('2017-02-08 09:40:29'),
              new: true
            },
          ]
        },
        {
          with: "Jane Winslet",
          thumbnail: "https://vuetifyjs.com/static/doc-images/lists/3.jpg",
          msgs: [
            {
              from: "Jane Winslet",
              avatar: "https://vuetifyjs.com/static/doc-images/lists/3.jpg",
              text: "Oh my gosh, I just saw the pictures.. This place is awesome! :)",
              dateSent: moment('2017-02-08 09:44:30'),
              new: false,
            },
            {
              avatar: "/static/png/ali--128x128.png",
              text: "Why don't we go there someday?",
              dateSent: moment('2017-02-08 09:44:29'),
              new: true,
            },
            {
              from: "Jane Winslet",
              avatar: "https://vuetifyjs.com/static/doc-images/lists/3.jpg",
              text: "That would be great",
              dateSent: moment('2017-02-08 09:45:32'),
              new: true
            },
            {
              from: "Jane Winslet",
              avatar: "https://vuetifyjs.com/static/doc-images/lists/3.jpg",
              text: "Hey, do you have any plans for tommorow night?",
              dateSent: moment('2017-02-08 09:45:32'),
              new: true
            }
          ]
        },
        {
          with: "Britta Holt",
          thumbnail: "https://vuetifyjs.com/static/doc-images/lists/4.jpg",
          msgs: [
            {
              from: "Britta Holt",
              avatar: "https://vuetifyjs.com/static/doc-images/lists/4.jpg",
              text: "How is it going, bruh?",
              dateSent: moment('2017-02-08 09:48:29'),
              new: true
            },
            {
              avatar: "/static/png/ali--128x128.png",
              text: "Damn, girl. Doin good )",
              dateSent: moment('2017-02-08 09:49:32'),
              new: true
            },
            {
              from: "Britta Holt",
              avatar: "https://vuetifyjs.com/static/doc-images/lists/4.jpg",
              text: "Wanna hangout sometime or what?",
              dateSent: moment('2017-02-08 09:49:32'),
              new: true
            }
          ]
        }
      ],
    })
  }
</script>

<style>
  

  .h-100,
  .chat-wrapper {
    height: 100% !important;
  }
  .chat-header {
    display: flex;
    align-items: center;
    padding: 20px 44px;
    font-size: 1.12rem;
    border-bottom: 1px solid rgba(0,0,0, 0.12);
  }
  .chat {
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .chat-divider {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 27px 0;
    font-size: 14px;
    text-align: center;
    text-transform: capitalize;
  }
  .chat-divider span::after,
  .chat-divider span::before {
    display: inline-block;
    position: absolute;
    content: '';
    top: 10px;
    width: 30%;
    height: 1px;
    background-color: #e6e6e6;
  }
  .chat-divider span::before {left: 0}
  .chat-divider span::after {right: 0}
  .msg {
    font-size: 16px;
    display: flex;
    align-items: flex-end;
    margin-bottom: 9px;
    vertical-align: top;
    transition-timing-function: cubic-bezier(0.4, -0.04, 1, 1);
  }
  .msg__bubble {
    position: relative;
    padding: 13px 14px;
    border-radius: 5px;
  }
  .msg__avatar {
    border-radius: 100%;
    width: 36px;
    height: auto;
  }
  .msg__corner {
    position: absolute;
    width: 9px;
    height: 9px;
    bottom: 4px;
  }

  /* some complex css skills right there */
  .msg--left + .msg--right {
    margin-top: 16px;
  }
  .msg--right + .msg--left {
    margin-top: 16px;
  }
  .msg:nth-of-type(1) { animation-duration: 0.15s }
  .msg:nth-of-type(2) { animation-duration: 0.3s }
  .msg:nth-of-type(3) { animation-duration: 0.45s }
  .msg:nth-of-type(4) { animation-duration: 0.6s }
  .msg:nth-of-type(5) { animation-duration: 0.75s }
  .msg:nth-of-type(6) { animation-duration: 0.9s }
  .msg:nth-of-type(7) { animation-duration: 1.05s }
  .msg:nth-of-type(8) { animation-duration: 1.2s }
  .msg:nth-of-type(9) { animation-duration: 1.35s }
  .msg:nth-of-type(10) { animation-duration: 1.5s }

  
  .msg--left {margin-left: 0; margin-right: auto}
  .msg--left .msg__bubble {background-color: #eceff1}
  .msg--left .msg__avatar {margin-right: 8px}
  .msg--left .msg__corner {left: -7px; transform: scale(-1.2, 1.4)}

  /* #00b0ff */

  .msg--right {margin-right: 0; margin-left: auto}
  .msg--right .msg__bubble {background-color: #eceff1}
  .msg--right .msg__avatar {margin-left: 8px; order: 2}
  .msg--right .msg__corner {right: -7px; transform: scale(1.2, 1.4)}


  .slideFromLeft-enter-active { margin-left: -200px; opacity: 0 }
  .slideFromLeft-leave-active { margin-left: 0; opacity: 1 }

  .slideFromRight-enter-active { margin-right: -200px; opacity: 0 }
  .slideFromRight-leave-active { margin-right: 0; opacity: 1 }
</style>
