import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/routes'

import GlobalGuard from '@/router/guards/global-guard'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  saveScrollPosition: true,
  routes
})

router.beforeEach(GlobalGuard.beforeEach)

export default router
