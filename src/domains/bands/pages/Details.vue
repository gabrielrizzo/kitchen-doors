<template>
  <details-holder :band="band"/>
</template>

<script>
import DetailsHolder from '../components/organisms/presentational/DetailsHolder'
export default {
  name: 'DetailsContainer',
  components: {
    DetailsHolder
  },
  props: {
    band: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
