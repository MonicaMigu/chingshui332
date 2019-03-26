import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fab)
library.add(fas)
library.add(far)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

const url = 'file:///Users/shibasalmon/Desktop/Code/telegramPage/main.css'
const css = document.createElement('link')
css.setAttribute('rel', 'stylesheet')
css.setAttribute('type', 'text/css')
css.setAttribute('href', url)
css.setAttribute('charset', 'utf-8')
document.head.appendChild(css)

router.beforeEach((to, froe, next) => {
  if(to.meta.title) document.title = to.meta.title
  next();
})