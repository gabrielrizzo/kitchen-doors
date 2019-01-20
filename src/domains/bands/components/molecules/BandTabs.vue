<template>
  <div>
    <vs-tabs vs-align="center">
     <vs-tab
      v-for= "(band, index) in bands"
      :vs-label="band.name"
      :key="index">
       <div>
         <g-card
          v-for="(value, index) in band.values"
          :key="index + value"
          :src="value.src">
            <template slot="headerContent">
              {{ value.band }}
            </template>
          </g-card>
       </div>
     </vs-tab>
   </vs-tabs>
   </div>

</template>

<script>
import GCard from '@/domains/shared/GCard'
export default {
  name: 'MusicTabs',
  components: {
    GCard
  },
  props: {
    bands: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style>
</style>
