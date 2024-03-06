import 'babel-polyfill';
import Es6Promise from 'es6-promise'
Es6Promise.polyfill()


import Vue from 'vue'
import App from './App.vue'


import hljs from 'highlight.js'
import 'highlight.js/styles/railscasts.css'

// 导入组件库
import CommonUI  from './../packages/index'

Vue.directive('hljs', el => {
  let blocks = el.querySelectorAll('pre')
  Array.prototype.forEach.call(blocks, hljs.highlightBlock)
})

// 注册组件库
Vue.use(CommonUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
