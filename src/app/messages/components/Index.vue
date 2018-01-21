<template>
  <v-layout row>
    <v-flex >
      <SidePanel/>
    </v-flex>
    <v-flex>
      <Chat/>
    </v-flex>
  </v-layout>
</template>

<script>
  import SidePanel from './SidePanel'
  import Chat from './Chat'

  export default {
    components: {
      SidePanel,
      Chat
    }
  }
</script>
