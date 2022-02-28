import type { App } from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'

export default (app: App) => {
  app.component('SvgIcon', SvgIcon)
}
