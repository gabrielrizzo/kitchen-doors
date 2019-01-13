<template>
  <vs-row>
    <vs-col vs-type="flex" vs-justify="center" vs-align="center">
      <g-input
        class="input"
        :placeHolder="placeHolder"
        @input="input"/>
      <g-button class="button"/>
    </vs-col>
  </vs-row>
</template>

<script>
import events from '@/mixin/events'
import GInput from '@/domains/shared/GInput'
import GButton from '@/domains/shared/GButton'
export default {
  name: 'SearchBar',
  extends: events,
  components: {
    GInput,
    GButton
  },
  props: {
    placeHolder: {
      type: String,
      default: 'Type here for awesomeness'
    }
  },
  methods: {
    input ($event) {
      this.$emit('input', $event)
    }
  }
}
</script>

<style lang="stylus">
</style>
