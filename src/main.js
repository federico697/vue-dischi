import Vue from 'vue'
import App from './App.vue'
// importazione di boostrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
