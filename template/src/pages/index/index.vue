<template>
  <h1 class="title">\{{ msg }}</h1>
</template>

<script>
  export default {
    data () {
      return {
        // note: changing this line won't causes changes
        // with hot-reload because the reloaded component
        // preserves its current state and we are modifying
        // its initial state.
        msg: 'Hello Wisedu Mobile App'
      }
    }
  }
</script>

<style scoped>
  .title {
    text-align: center;
  }
</style>
