import './assets/main.css'
import 'aos/dist/aos.css'
import { createApp } from 'vue'
import AOS from 'aos'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(AOS.init())
app.use(router)

app.mount('#app')
