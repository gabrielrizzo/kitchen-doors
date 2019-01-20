<template>
  <vs-card
    actionable
    class="cardx">
        <div
          @click="click"
          slot="header">
          <h3>
            <slot name="headerContent"/>
          </h3>
        </div>
        <div
          @click="click"
          slot="media">
          <img :src="band.src">
        </div>
        <div>
          <span>
            <template slot="content">
              Thumbs Up if You wanna see it at your town
            </template>
          </span>
        </div>
        <div slot="footer">
          <vs-row vs-justify="flex-end">
            <slot name="buttons"/>
          </vs-row>
        </div>
      </vs-card>
</template>

<script>
export default {
  name: 'GCard',
  props: {
    band: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    click ($event) {
      this.$emit('click', this.band)
    }
  }
}
</script>

<style lang="stylus">
</style>
