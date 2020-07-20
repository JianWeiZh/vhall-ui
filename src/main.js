
import Vue from 'vue'
import App from './App.vue'
import VhBtn from 'vhall-ui/lib/button'

console.log(VhBtn)
// Vue.use(vhInput)
Vue.use(VhBtn)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
