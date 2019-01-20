<template>
  <h1> {{ band }} </h1>
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

<style lang="stylus">

</style>
