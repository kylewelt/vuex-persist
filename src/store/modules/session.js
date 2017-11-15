export default {
  state: {
    name: 'session store',
    count: 0
  },
  mutations: {
    incrementSessionCount (state) {
      state.count++
    }
  }
}