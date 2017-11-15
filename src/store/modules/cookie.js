// initial state
const state = {
  name: 'cookie',
  count: 0
}

// getters
const getters = {

}

// mutations
const mutations ={
  incrementCookieCount (state) {
    state.count++
  }
}

// actions
const actions = {
  incrementCookieCount (context) {
    context.commit('incrementCookieCount')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}