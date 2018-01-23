<template>
  <v-layout>
    <v-flex xs12>
      <v-card>
        <template v-for="tab in tabs">
          <v-layout>
            <v-flex xs6>
              <v-list dense>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-switch
                      v-model="nightMode"
                      color="primary">
                    </v-switch>
                  </v-list-tile-action>
                  <v-list-tile-title>
                    Night Mode
                  </v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-flex>
            <v-flex xs6>
              
            </v-flex>
          </v-layout>
        </template>
      </v-card>        
    </v-flex>
  </v-layout>
</template>

<script>
  import _settings from '@/mixins/_settings'

  export default {
    mixins: [_settings],
    data: () => ({
      tabs: [
        { title: 'general' },
        { title: 'colors' },
        { title: 'auto night mode' },
        { title: 'cache', details: 'by default we store all the data in your browser cache to boost perfomance' },
      ]
    })
  }
</script>
