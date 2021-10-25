// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import VueCropper from 'vue-cropper'
import VueLazyload from 'vue-lazyload'
import VueParticles from 'vue-particles'

import echarts from 'echarts'

import 'element-ui/lib/theme-chalk/index.css'
import '@/style/font.css'

import api from '@/api/index'
// 展开、折叠过渡动画
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'

import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'

import BasicTableTemp from '@/components/TableTemplate/BasicTableTemp'
import ExcelToList from '@/components/FileOption/ExcelToList'

Vue.use(ElementUI)
Vue.use(VueCropper)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('@/assets/img/error.jpg'),
  // loading: require('@/assets/img/loading.gif'),
  attempt: 1, // 加载图片数量
  listenEvents: ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend', 'touchmove']
})
Vue.use(VueParticles)

library.add(fas)
library.add(fab)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('el-collapse-transition', CollapseTransition)
Vue.component('basic-table-temp', BasicTableTemp)
Vue.component('excel-to-list', ExcelToList)

Vue.prototype.$echarts = echarts
Vue.prototype.$api = api

Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//   next()
// })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
