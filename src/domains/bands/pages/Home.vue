<template>
  <presentational-holder
    :bands="bands"
    v-model="search"/>
</template>

<script>
import PresentationalHolder from '@/domains/bands/components/organisms/PresentationalHolder'
export default {
  name: 'MusicContainer',
  components: {
    PresentationalHolder
  },
  data: () => ({
    bands: {
      tops: { 'name': 'Top Rated', 'values': [{ 'band': 'Wolf Larsen', 'src': 'static/WL.jpg' }, { 'band': 'Arctic Monkeys', 'src': 'static/AM.jpg' }, { 'band': 'Aurora', 'src': 'static/aurora.jpg' }] },
      trends: { 'name': 'Trending', 'values': [{ 'band': 'Two Doors Cinema Club', 'src': 'static/TDCC.jpeg' }, { 'band': 'Foo Fighters', 'src': 'static/FF.jpg' }, { 'band': 'Pearl Jam', 'src': 'static/PJ.jpg' }] },
      suggestions: { 'name': 'Suggested By Us', 'values': [{ 'band': 'Anavitoria', 'src': 'static/AV.jpg' }, { 'band': 'Hewie', 'src': 'static/HE.jpg' }, { 'band': 'Suricatos', 'src': 'static/SC.jpg' }] }
    },
    search: ''
  })
}
</script>
