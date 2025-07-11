import { createRouter, createWebHistory } from 'vue-router'
import Signup from './signup.vue';
import Login from './login.vue';
import Home from './home.vue';
import dash from './dashboard.vue'
import prod from './productsManage.vue'
import emp from './addEmp.vue'
import view from './customerView.vue'
import empView from './employeeView.vue'
import empForm from './employeeForm.vue'
const routes = [
  { path: '/', component: Home },
  { path: '/signup', component: Signup },
  { path: '/login', component: Login },
  { path:'/dash',component:dash  },
  {path:'/productManage',component:prod},
   {path:'/Emp',component:emp},
   {path:'/view',component:view},
  {path:'/empView',component:empView},
  {path:'/empForm',component:empForm},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
