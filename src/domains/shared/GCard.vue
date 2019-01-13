<template>
  <vs-card actionable class="cardx">
        <div slot="header">
          <h3>
            <slot name="headerContent"/>
          </h3>
        </div>
        <div slot="media">
          <img :src="src">
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
    src: {
      type: String,
      default: 'static/AM.jpg'
    }
  }
}
</script>

<style lang="stylus">
</style>
