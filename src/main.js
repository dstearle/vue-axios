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

// Some examples of axios interceptors
const reqInterceptor = axios.interceptors.request.use(config => {
  console.log('Request Interceptor', config)
  return config
})
const resInterceptor = axios.interceptors.response.use(res => {
  console.log('Response Interceptor', res)
  return res
})

// Some examples of interceptor ejectors. Will prevent the interceptors from occuring when uncommented
// axios.interceptors.request.eject(reqInterceptor)
// axios.interceptors.response.eject(resInterceptor)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
