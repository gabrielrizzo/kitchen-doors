<template>
  <button
    type="button"
    class="button-card-purple"
    @click="click">
    <span>{{ text }}</span>
  </button>
</template>

<script>
export default {
  name: 'GenericCardButton',
  props: {
    text: {
      type: String,
      default: 'Click Here For Awesomeness'
    }
  },
  methods: {
    click ($event) {
      this.$emit('click', $event)
    }
  }
}
</script>

<style lang="stylus" scoped>
.button-card-purple
  transition all .2s ease-in-out
  height 10vh
  cursor pointer
  text-align center
  font-family Helvetica
  font-size 0.8 rem
  color #b61aff
  border 1.5px
  border-style solid
  border-color #b61aff
  border-radius 15px
  background-color #fdfdfd
  min-height 10vh
  min-width 15vw
.button-card-purple:hover
  transform scale(0.9)
  color #570080
  background-color #e7b3ff
  opacity 0.6
span
  margin 5px
</style>
