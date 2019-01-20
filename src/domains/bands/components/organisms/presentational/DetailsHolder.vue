<template>
  <div class="main">
    <div class="band-name">
      <h1> {{ band.band }} </h1>
    </div>
    <div class="band-image">
      <img :src="band.src">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailsHolder',
  props: {
    band: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="stylus" scoped>
.main
  box-sizing border-box
  margin auto
  width 80%
.band-name
  margin-top 3vh
  margin-bottom 3vh
  align-content center
  display flex
  justify-content center
  flex-wrap wrap
.container
  flex-flow row wrap
  align-content center
  display flex
  justify-content center
  flex-wrap wrap
  background-color blue
.band-image
  margin auto
  max-width 600px
  max-height 550px
  img
    width 100%
    height 100%
    border 2px
    border-radius 15px
</style>
