<template>
  <div>
    <g-card-button
      v-for="(action, index) in actions"
      :key="index"
      :text="action"
      @click="select(action)"
      class="button"/>
  </div>
</template>

<script>
import GCardButton from '@/domains/shared/GCardButton'
export default {
  name: 'ComponentSelect',
  components: {
    GCardButton
  },
  props: {
    actions: {
      type: Array,
      required: true
    }
  },
  methods: {
    select (action) {
      this.$emit('click', action)
    }
  }
}
</script>

<style lang="stylus" scoped>
.button
  margin-bottom 1vh
  margin-right 1vw
</style>
