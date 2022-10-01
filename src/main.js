import { createApp } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'


const app = createApp(App)
app.use(BootstrapVue3)
app.use(VueAxios, axios)
app.mount('#app')
