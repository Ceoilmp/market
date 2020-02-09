import toast from "./toast";

const obj = {}

obj.install = function (Vue) {
  console.log('=====');
  const toastConstrustor = Vue.extend(toast)

  const Toast = new toastConstrustor()

  Toast.$mount(document.createElement('div'))

  document.body.appendChild(Toast.$el)

  Vue.prototype.$toast = Toast
}

export default obj
