import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from "pinia";
import { createHead } from '@vueuse/head'
// import { store } from './store'
import './assets/index.postcss'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
const pinia = createPinia()
const head = createHead()
const app = createApp(App)

// app.use(store)
app.use(pinia)
app.use(router)
app.use(head)

app.mount('#app')
