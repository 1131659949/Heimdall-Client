import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import requests from "@/request/request"
import VueCookies from 'vue-cookies'
import VueParticles from 'vue-particles'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}


app.use(VueParticles)
app.use(router)
app.use(VueSweetalert2)
app.use(ElementPlus)
app.config.globalProperties.$cookies = VueCookies
app.config.globalProperties.$axios = requests

app.mount('#app')
