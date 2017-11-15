// initial state
const state = {
  name: 'session store',
  count: 0
}

// getters
const getters = {

}

// mutations
const mutations ={
  incrementSessionCount (state) {
    state.count++
  }
}

// actions
const actions = {
  incrementSessionCount (context) {
    context.commit('incrementSessionCount')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}