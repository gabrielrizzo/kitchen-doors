<template>
  <band-tabs :bands="bands"/>
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
  }
}
</script>
