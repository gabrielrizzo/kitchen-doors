<template>
  <band-tabs
  @click="redirectToDetails"
  :bands="bands"/>
</template>

<script>
import { slugCreator } from '@/helpers'
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
      let slug = slugCreator($event.band)
      this.$router.push({
        name: 'BandDetails',
        params: {
          band: $event,
          slug: slug
        }
      })
    }
  }
}
</script>
