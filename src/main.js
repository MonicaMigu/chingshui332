import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import VueCarousel from 'vue-carousel'

library.add(fab)
library.add(fas)
library.add(far)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueCarousel)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, froe, next) => {
  if(to.meta.title) document.title = to.meta.title
  next();
})