<template>
  <div class="chat">
    <ul class="chat__body">
      <li class="msg">
        <div class="msg__left">
          <img class="msg__thumbnail" src="">
        </div>
        <div class="msg__body">
          <div class="msg__details details">
            <a class="details__user" href="#"></a>
            <span class="details__date">• </span>
          </div>
          <div class="msg__text">
            
          </div>
        </div>
      </li>
    </ul>
    <form
      @submit.prevent="onSubmit"
      class="chat-form">
      <v-text-field
        @keyup.enter="onSubmit"
        v-model="msg"
        placeholder="Type your message"
        multi-line
        rows="2"
        full-width>
      </v-text-field>
      <v-btn icon>
        <v-icon>attach_file</v-icon>
      </v-btn>
      <v-btn
        type="submit"
        round color="primary">
        send it
      </v-btn>
    </form>
  </div>
</template>

<script>
  export default {
    data: {
      msg: null
    },

    methods: {
      onSubmit () {
        console.log(this.$vuetify)
      }
    }
  }
</script>
