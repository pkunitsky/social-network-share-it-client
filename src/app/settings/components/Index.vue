<template>
  <div>
    <v-switch value v-model="setting"></v-switch>
  </div>
</template>

<script>
  export default {
    data: () => ({
      setting: false
    })
  }
</script>
