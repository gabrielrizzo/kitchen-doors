<template>
  <div class="main">
    <div class="band-name">
      <h1> {{ band.band }} </h1>
    </div>
    <div class="band-image">
      <img :src="band.src">
    </div>
    <div class="button-card">
      <g-card-button class="button"/>
      <g-card-button class="button"/>
      <g-card-button class="button"/>
    </div>
  </div>
</template>

<script>
import GCardButton from '@/domains/shared/GCardButton'
export default {
  name: 'DetailsHolder',
  components: {
    GCardButton
  },
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
  width 90%
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
.button-card
  margin-top 2vh
  text-align center
.button
  margin-bottom 1vh
  margin-right 1vw
.band-image
  margin auto
  max-width 600px
  max-height 550px
  img
    transition all .2s ease-in-out
    width 100%
    height 100%
    border 2px
    border-radius 15px
  img:hover
    margin-bottom 10px
    transform scale(1.1)
    opacity 0.8
</style>
