import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import CoursePage from './components/CoursePage.vue'
import AboutPage from './components/AboutPage.vue'

const routes = [
  { path: '/', component: CoursePage, name: 'Курс' },
  { path: '/about', component: AboutPage, name: 'О курсе' },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

createApp(App).use(router).mount('#app')
