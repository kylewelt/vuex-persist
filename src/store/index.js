import Vue from 'vue'
import Vuex, {Payload, Store} from 'vuex'
import VuexPersistence from 'vuex-persist'
import Cookies from 'js-cookie'
import sessionModule from './modules/session'
import localModule from './modules/local'
import cookieModule from './modules/cookie'

Vue.use(Vuex)

Vue.config.debug = true
Vue.config.devtools = true


// define which modules will be persisted, and in which manner

const vuexSession = new VuexPersistence({
  storage: window.sessionStorage,
  modules: ['session']
})

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ['local']
})

const vuexCookie = new VuexPersistence({
  restoreState: (key, storage) => Cookies.getJSON(key),
  saveState: (key, state, storage) => Cookies.set(key, state, {
    expires: 3
  }),
  modules: ['cookie']
})


// define our store and its modules

const store = new Vuex.Store({
  state: {
    name: 'vuex store',
    count: 0
  },
  mutations: {
    incrementStoreCount (state) {
      state.count++
    }
  },
  modules: {
    session: sessionModule,
    local: localModule,
    cookie: cookieModule
  },
  plugins: [vuexLocal.plugin, vuexSession.plugin, vuexCookie.plugin]
})

export default store