

export default {
  state: {
    posts: [],
    cachedPages: [],
    perPage: 9,
    currentPage: 1,
    totalPosts: null,
    requestsLeft: null
  },

  mutations: {
    posts: (state, payload) => { state.posts.push(...payload) },
    totalPosts: (state, payload) => state.totalPosts = payload,
    requestsLeft: (state, payload) => state.requestsLeft = payload,
    currentPage: (state, payload) => state.currentPage = payload,
    perPage: (state, payload) => state.perPage = payload,
    cachedPages: (state, payload) => state.cachedPages = payload,
  }
}
