<template>
  <vs-row :class="`vs-lg ${$options.name}`">
      <vs-col
        class="search"
        vs-offset="2"
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="8">
        <search-bar
          placeHolder="Search your favorite band"
          @input="input"/>
      </vs-col>
      <vs-col
        class="search"
        vs-offset="3"
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="6">
        <band-card-container :bands="bands"/>
      </vs-col>
  </vs-row>
</template>

<script>
import events from '@/mixin/events'
import SearchBar from '@/domains/shared/SearchBar'
import BandCardContainer from './BandCardContainer'
export default {
  name: 'PresentationalHolder',
  extends: events,
  components: {
    SearchBar,
    BandCardContainer
  },
  props: {
    bands: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="stylus" scoped>
.PresentationalHolder
  -webkit-overflow-scrolling touch;
  margin-top 10vh
.search
  margin-top 5vh
</style>
