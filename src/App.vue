<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Alex Brush', Roboto, cursive;
  -webkit-font-smoothing: antialiased;
  -webkit-overflow-scrolling: touch;
}
body {
  background: #fdfdfd;
}
</style>
