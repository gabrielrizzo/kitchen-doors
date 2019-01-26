<template>
  <div>
    <div class="banner">
      <h1> Kitchen Doors</h1>
    </div>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainLayout'
}
</script>

<style lang="stylus" scoped>
h1
  padding 10px
  font-family 'Alex Brush', Roboto, cursive
  color #ffff
  text-align center
.banner
  background-color #000000
  height 7vh
</style>
