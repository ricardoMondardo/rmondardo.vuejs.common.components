import Vue from 'vue'
import component from './main';

// Plugins
Vue.use(component)

// Start
const root = new Vue({
  el: '#vue-container'
})
