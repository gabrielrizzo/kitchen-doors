<template>
  <vs-input
    label=""
    :placeholder="placeHolder"
    v-model="value"
    size="large"
    class="search"
    @input="input"/>
</template>

<script>
import events from '@/mixin/events'
export default {
  name: 'GInput',
  extends: events,
  data: () => ({
    value: ''
  }),
  props: {
    placeHolder: {
      type: String,
      default: 'Type here for awesomeness'
    }
  }
}
</script>

<style lang="stylus">
.search
  width 100%
</style>
