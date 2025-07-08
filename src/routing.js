import { createRouter, createWebHistory } from 'vue-router'
import Signup from './signup.vue';
import Login from './login.vue';
import Home from './home.vue';
import dash from './dashboard.vue'
const routes = [
  { path: '/', component: Home },
  { path: '/signup', component: Signup },
  { path: '/login', component: Login },
  { path:'/dash',component:dash  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
