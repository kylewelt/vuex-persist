export default {
  state: {
    name: 'cookie',
    count: 0
  },
  mutations: {
    incrementCookieCount (state) {
      state.count++
    }
  }
}