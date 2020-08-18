import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import VueSocketIO from 'vue-socket.io'

// Vue.use(socketIO)
Vue.use(iView)
// Vue.use(new VueSocketIO({
//   debug: true,
//   connection: 'http://localhost:9999',
//   options: {path: "/"}
// }))

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
