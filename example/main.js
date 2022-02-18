import Vue from 'vue'
import SearchArea from '../src/index.js'
import App from './App.vue'

Vue.use(SearchArea)


/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => (h)(App)
})