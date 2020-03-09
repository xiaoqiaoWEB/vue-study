/* eslint-disable object-curly-spacing */
/* eslint-disable vue/require-render-return */
/* eslint-disable space-before-function-paren */
import Vue from 'vue'
export default function create(components, props) {
  const vm = new Vue({
    render(h) {
      return h(components, {props})
    }
  }).$mount()

  // 手动挂在
  document.body.appendChild(vm.$el)

  // 销毁方法
  const comp = vm.$children[0]
  comp.remove = function () {
    document.body.removeChild(vm.el)
    vm.$destroy()
  }
  return comp
}
