import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import ElementPlus, { type ISize } from '@/plugins/element'
import './styles/index.scss'
import App from './App.vue'
import router from './router'
import InstallComp from '@/components/index'
import 'virtual:svg-icons-register' // 加载svg配置

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.use(InstallComp)

app.mount('#app')

// 挂载到vue实例上
import type { ElMessageBox, ElMessage, ElNotification } from 'element-plus'
// vue实例上挂载属性类型声明
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $message: typeof ElMessage
    $notify: typeof ElNotification
    $confirm: typeof ElMessageBox.confirm
    $alert: typeof ElMessageBox.alert
    $prompt: typeof ElMessageBox.prompt
    $ELEMENT: {
      size: ISize
    }
  }
}
