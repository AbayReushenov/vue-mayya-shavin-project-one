import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// const App = {
//   render() {
//     return "Это приложение для Vue.js"
//   }
// }


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
