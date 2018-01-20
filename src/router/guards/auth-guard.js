import store from '@/store'

export default {
  beforeEnter (to, from, next) {
    if (to.name === 'logout') next()
    
    const { token } = store.state
    if (token) {
      next({ path: '/' })
      return
    }
    
    next()
  },

  logout: {
    beforeEnter (to, from, next) {
      store.dispatch('logout')
    }
  }
}
