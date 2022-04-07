import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL

createApp(App).use(Quasar, quasarUserOptions).use(store).use(router).mount('#app')
