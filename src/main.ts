import Vue from 'vue'
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api'

Vue.config.productionTip = false

// @ts-ignore
App.mpType = 'app'

Vue.use(VueCompositionApi)

const app = new Vue({
  ...App,
})
app.$mount()
