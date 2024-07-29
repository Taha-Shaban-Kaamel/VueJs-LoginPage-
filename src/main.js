import { createApp } from 'vue'
import App from './App.vue'
import vue3GoogleLogin from 'vue3-google-login'
const CLIENT_ID = "750236939237-rhaii2cs23jgmmqsp487hq47mv6nre5i.apps.googleusercontent.com"
createApp(App)
    .use(vue3GoogleLogin, {
        clientId:CLIENT_ID
    })
    .mount('#app')
