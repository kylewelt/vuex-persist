import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

Vue.config.debug = true
Vue.config.devtools = true

const vuexLocal = new VuexPersistence({
  // The key to store the state on in the storage provider.
  key: 'vuex',
  // window.localStorage or window.sessionStorage or localForage
  storage: window.sessionStorage,
  // Function that passes the state and returns the state with only the objects you want to store.
  // reducer: state => state,
  // Function that passes a mutation and lets you decide if it should update the state in localStorage.
  // filter: mutation => (true)
})

const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  plugins: [vuexLocal.plugin]
})

export default store