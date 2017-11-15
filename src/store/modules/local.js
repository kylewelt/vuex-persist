// initial state
const state = {
  name: 'local store',
  count: 0
}

// getters
const getters = {

}

// mutations
const mutations ={
  incrementLocalCount (state) {
    state.count++
  }
}

// actions
const actions = {
  incrementLocalCount (context) {
    context.commit('incrementLocalCount')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}