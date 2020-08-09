import Vue from 'vue'
import App from './App'
import VueCompositionApi from '@vue/composition-api'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.use(VueCompositionApi)

const app = new Vue({
  ...App,
})
app.$mount()
