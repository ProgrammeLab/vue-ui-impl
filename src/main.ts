import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import { createPinia } from 'pinia'
import 'uno.css'

const router = createRouter({
  routes,
  history: createWebHashHistory()
});
const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount('#app');
