import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import ElementPlus from '@/plugins/element'
import './styles/index.scss'
import App from './App.vue'
import router from './router'
import InstallComp from '@/components/index'
import 'virtual:svg-icons-register' // 加载svg配置

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia).use(router).use(ElementPlus).use(InstallComp).mount('#app')
