<template>
  <vs-button :color="color" :type="buttonType" :icon="icon" size="medium">name</vs-button>
</template>

<script>
export default {
  name: 'GButton',
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    buttonType: {
      type: String,
      default: 'gradient'
    },
    icon: {
      type: String,
      default: 'search'
    }
  }
}
</script>

<style lang="stylus">
</style>
