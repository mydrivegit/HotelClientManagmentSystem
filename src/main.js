// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import moment from 'moment'
//  Installation of Bootstrap 4
import 'popper.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import jQuery from 'jquery'
import 'font-awesome/css/font-awesome.css'
import VueSweetalert2 from 'vue-sweetalert2'
import store from './store/store'
//  bootstrap-vue
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.prototype.moment = moment
Vue.use(VueSweetalert2)
Vue.use(BootstrapVue)
global.jQuery = jQuery
global.$ = jQuery

Vue.config.productionTip = false
moment.locale('fr')
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
