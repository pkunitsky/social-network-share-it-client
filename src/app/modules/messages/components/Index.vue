<template>
  <v-layout row wrap>
    <v-flex style="transition: all .3s" xs12 v-bind="layout1">
      <v-btn @click="talksOpen = !talksOpen"></v-btn>
      <ControlPanel />
    </v-flex>
    <v-flex v-if="talksOpen" xs12 md8>
      <Talks />
    </v-flex>
  </v-layout>
</template>

<script>
  import Talks from './Talks'
  import ControlPanel from './ControlPanel'

  export default {
    data: () => ({
      talksOpen: true
    }),

    computed: {
      layout1 () {
        return {
          [this.talksOpen ? 'md4':'md12']: true
        }
      }
    },
    components: {
      Talks,
      ControlPanel
    }
  }
</script>
