//  /packages/color-picker/index.js
// 导入组件，组件必须声明 name
import ieTips from './src/main.vue'

// 为组件提供 install 安装方法，供按需引入
ieTips.install = function (Vue) {
  Vue.component(ieTips.name, ieTips)
}

// 默认导出组件
export default ieTips
