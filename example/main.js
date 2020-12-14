import Vue from 'vue'
import HeadSearch from '../src/index.js'
import App from './App.vue'

Vue.use(HeadSearch)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => (h)(App)
})