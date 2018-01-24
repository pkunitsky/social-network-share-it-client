import store from '@/store'
import tokenChecker from '@/utils/token-checker'

export default {
  beforeEach (to, from, next) {
    if (store.state.auth.authorized === false && to.path !== '/auth') next('/auth')
    /* test */
    if (process.env.NODE_ENV === 'development') {
      next()
      console.log('router.beforeEach disabled for a while for client development')
      return
    }
    /** let pass for test route */
    if (to.path === '/test') next()
    /* test */

    const { token } = store.state
    if (!token) {
      (to.path === '/auth')
        ? next()
        : next({ path: '/auth' })
      return
    }
  
    /** progress start */
    tokenChecker
      .check(token)
      .then(valid => {
        if (!valid) {
          store.commit('auth/logout')
        }
        /** progress done */
        next()
      })
  }
}
