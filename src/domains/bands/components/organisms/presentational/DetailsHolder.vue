<template>
  <div class="main">
    <div class="band-name">
      <h1> {{ band.band }} </h1>
    </div>
    <div class="band-image">
      <img :src="band.src">
    </div>
    <div class="button-card">
      <component-selector-buttons
        @click="renderComponent"
        :actions="actions"/>
    </div>
    <component :is="component"/>
  </div>
</template>

<script>
import Schedule from '../../molecules/Schedule'
import ComponentSelectorButtons from '../../molecules/ComponentSelectorButtons'
export default {
  name: 'DetailsHolder',
  components: {
    ComponentSelectorButtons,
    Schedule
  },
  data: () => ({
    component: ''
  }),
  props: {
    band: {
      type: Object,
      default: () => ({})
    },
    actions: {
      type: Array,
      required: true
    }
  },
  methods: {
    renderComponent ($event) {
      this.component = $event
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
