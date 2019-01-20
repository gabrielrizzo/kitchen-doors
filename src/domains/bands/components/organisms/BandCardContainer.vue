<template>
  <band-tabs
  @click="redirectToDetails"
  :bands="bands"/>
</template>

<script>
import BandTabs from '../molecules/BandTabs'
export default {
  name: 'BandCardContainer',
  components: {
    BandTabs
  },
  props: {
    bands: {
      type: Object,
      required: true
    }
  },
  methods: {
    redirectToDetails ($event) {
      this.$router.push({
        name: 'BandDetails',
        params: {
          band: $event
        }
      })
    }
  }
}
</script>
