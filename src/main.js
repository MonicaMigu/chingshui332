import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

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