import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

// Sets up the axios url to be used globally
axios.defaults.baseURL = 'https://vue-axios-cc3ce.firebaseio.com'

// Some examples of axios headers being used globally
axios.defaults.headers.common['Authorization'] = 'something here'
axios.defaults.headers.get['Accepts'] = 'application/json'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
