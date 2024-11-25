import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import { createPinia } from 'pinia'
import router from "./Router/router.ts";
import './style.css'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia();

app.use(MotionPlugin)
app.use(pinia)
app.use(router)

app.mount('#app')
