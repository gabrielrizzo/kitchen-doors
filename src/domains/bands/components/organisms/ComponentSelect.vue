<template>
  <component-select-buttons :actions="actions"/>
</template>

<script>
import ComponentSelectButtons from '../molecules/ComponentSelectButtons'
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
  }
}
</script>
