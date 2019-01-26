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
  -webkit-box-shadow -1px 7px 13px -4px rgba(0,0,0,0.66)
  -moz-box-shadow -1px 7px 13px -4px rgba(0,0,0,0.66)
  box-shadow -1px 7px 13px -4px rgba(0,0,0,0.66)
  background-color #000000
  height 7vh
</style>
