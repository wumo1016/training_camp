import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "@/plugins/element";
import './styles/index.scss'

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus);

app.mount("#app");
