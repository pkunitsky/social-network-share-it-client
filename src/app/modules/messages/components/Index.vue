<template>
  <v-layout row wrap>
    <v-flex md4>
      <ControlPanel />      
    </v-flex>
    <v-flex md8>
      <Talks />
    </v-flex>
  </v-layout>
</template>

<script>
  import Talks from './Talks'
  import ControlPanel from './ControlPanel'

  export default {
    components: {
      Talks,
      ControlPanel
    }
  }
</script>
