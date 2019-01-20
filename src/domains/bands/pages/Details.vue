<template>
  <h1> {{ band }} </h1>
</template>

<script>
export default {
  name: 'DetailsContainer',
  props: {
    band: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
