import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from '@/plugins/element'
import './styles/index.scss'
import App from './App.vue'
import router from './router'
import InstallComp from '@/components/index'
import 'virtual:svg-icons-register' // 加载svg配置

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(InstallComp)

app.mount('#app')
