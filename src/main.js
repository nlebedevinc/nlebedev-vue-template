import Vue from 'vue'
import App from './App.vue'
import Icon from 'vue-awesome/components/Icon.vue'

import 'vue-awesome/icons/microphone-alt'
import 'vue-awesome/icons/brands/github'
import 'vue-awesome/icons/brands/medium'
import 'vue-awesome/icons/brands/skype'
import 'vue-awesome/icons/brands/linkedin'
import 'vue-awesome/icons/brands/linkedin-in'
import 'vue-awesome/icons/brands/instagram'
import 'vue-awesome/icons/brands/telegram'
import 'vue-awesome/icons/brands/telegram-plane'
import 'vue-awesome/icons/brands/twitter'
import 'vue-awesome/icons/brands/twitter-square'
import 'vue-awesome/icons/envelope'

Vue.config.productionTip = false

Vue.component('icon', Icon)

new Vue({
  render: h => h(App),
}).$mount('#app')
