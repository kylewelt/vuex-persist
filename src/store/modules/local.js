export default {
  state: {
    name: 'local store',
    count: 0
  },
  mutations: {
    incrementLocalCount (state) {
      state.count++
    }
  }
}