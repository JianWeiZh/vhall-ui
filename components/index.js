import VhBtn from './button'
import VhInput from './input'

export default {
  install (Vue) {
    Vue.use(VhBtn)
    Vue.use(VhInput)
  },
  VhBtn,
  VhInput
}
