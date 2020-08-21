import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
// import io from 'socket.io-client'
import Vuex from 'vuex'

Vue.use(iView)
Vue.use(Vuex)
// Vue.use(io)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    socket: ''
  },
  mutations: {
    connect(state, socket){
      state.socket = socket
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
