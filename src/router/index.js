import Vue from 'vue'
import Router from 'vue-router'
import { bands } from '@/domains/bands/routes'

Vue.use(Router)

export default new Router({
  routes: [
    ...bands
  ]
})
