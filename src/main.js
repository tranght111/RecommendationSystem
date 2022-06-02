import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

import { BootstrapVue} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)