import store from '@/store'
import tokenChecker from '@/utils/token-checker'
import nprogress from '@/../modules/nprogress'

export default {
  beforeEach (to, from, next) {
    if (process.env.NODE_ENV === 'development') {
      console.log('checker disabled for a while for client development')
      next()
      return
    }
    /** let pass for test route */
    if (to.name === 'test') next()

    const { token } = store.state
    if (!token) {
      (to.path === '/auth')
        ? next()
        : next({ path: '/auth' })
      return
    }
  
    nprogress.start()
    tokenChecker
      .check(token)
      .then(valid => {
        if (!valid) {
          store.dispatch('logout')
        }
        nprogress.done()
        next()
      })
  }
}
