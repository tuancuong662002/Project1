import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Styles
import './assets/main.css'
import "./assets/fonts/bootstrap/bootstrap-icons.css"
import "./assets/css/main.min.css"
import "./assets/vendor/overlay-scroll/OverlayScrollbars.min.css"
import 'apexcharts/dist/apexcharts.css';
import VueApexCharts from 'vue3-apexcharts';
const app = createApp(App)
app.use(router)
app.component('apexchart', VueApexCharts);
app.mount('#app')
