<template>
  <v-layout>
    <v-flex md4>
      <Talks />      
    </v-flex>
    <v-flex md8>
      
    </v-flex>
  </v-layout>
</template>

<script>
  import Talks from './Talks'

  export default {
    components: {
      Talks
    }
  }
</script>
