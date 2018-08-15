// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/style.scss'

import DebugLogger from './util/logger'

import 'vue-awesome/icons/cog'
import 'vue-awesome/icons/angle-right'
import 'vue-awesome/icons/gear'
import 'vue-awesome/icons/sort'
import echarts from 'echarts'
import loading from 'components/loading'
Vue.use(DebugLogger);
Vue.prototype.$echarts = echarts 
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});

