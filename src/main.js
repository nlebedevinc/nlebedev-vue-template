import Vue from 'vue'
import App from './App.vue'
import Icon from 'vue-awesome/components/Icon.vue'

import 'vue-awesome/icons/microphone-alt'
import 'vue-awesome/icons/brands/github'
import 'vue-awesome/icons/brands/medium'

Vue.config.productionTip = false

Vue.component('icon', Icon)

new Vue({
  render: h => h(App),
}).$mount('#app')
