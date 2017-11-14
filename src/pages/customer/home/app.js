import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './app.vue'

import store from '../../../store/index.js'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
})
