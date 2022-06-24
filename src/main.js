import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueApexCharts from 'vue3-apexcharts'

const app = createApp(App);
app.use(VueApexCharts);

createApp(App).use(router).mount('#app')

import { BootstrapVue} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)