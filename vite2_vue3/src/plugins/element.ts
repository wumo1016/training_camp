import type { App } from 'vue'
import {
  ElButton,
  ElMessage,
  ElNotification,
  ElMessageBox,
  ElMenu,
  ElMenuItem,
  ElRow,
  ElCol,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTooltip,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElScrollbar,
  ElDrawer,
  ElColorPicker,
  ElSwitch,
  ElForm,
  ElFormItem,
  ElInput,
  ElCard,
  ElTree,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElDialog,
  ElSelect,
  ElOption,
  ElUpload,
  ElCalendar,
  ElConfigProvider
} from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import 'dayjs/locale/zh-cn' // 默认直接使用了 Day.js 项目的时间日期国际化设置, 并且会自动全局设置已经导入的 Day.js 国际化配置。

// $ELEMENT size属性类型
export type ISize = 'default' | 'medium' | 'small' | 'mini'

export default (app: App): void => {
  // 按需导入组件列表
  const components = [
    ElButton,
    ElMessage,
    ElNotification,
    ElMessageBox,
    ElMenu,
    ElMenuItem,
    ElRow,
    ElCol,
    ElBreadcrumb,
    ElBreadcrumbItem,
    ElTooltip,
    ElDropdown,
    ElDropdownMenu,
    ElDropdownItem,
    ElScrollbar,
    ElDrawer,
    ElColorPicker,
    ElSwitch,
    ElForm,
    ElFormItem,
    ElInput,
    ElCard,
    ElTree,
    ElTable,
    ElTableColumn,
    ElPagination,
    ElDialog,
    ElSelect,
    ElOption,
    ElUpload,
    ElCalendar,
    ElConfigProvider
  ]

  components.forEach(component => {
    app.component(component.name, component)
  })

  // 文档说明 https://v3.cn.vuejs.org/guide/migration/global-api.html#vue-prototype-%E6%9B%BF%E6%8D%A2%E4%B8%BA-config-globalproperties
  app.config.globalProperties.$message = ElMessage
  app.config.globalProperties.$notify = ElNotification
  app.config.globalProperties.$confirm = ElMessageBox.confirm
  app.config.globalProperties.$alert = ElMessageBox.alert
  app.config.globalProperties.$prompt = ElMessageBox.prompt

  // 全局配置 https://element-plus.gitee.io/#/zh-CN/component/quickstart#quan-ju-pei-zhi
  // 该对象目前支持 size 与 zIndex 字段。size 用于改变组件的默认尺寸 small，zIndex 设置弹框的初始 z-index（默认值：2000）。
  app.config.globalProperties.$ELEMENT = {
    size: 'medium'
  }
}
