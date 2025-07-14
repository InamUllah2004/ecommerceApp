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
import graph from  './graphs.vue'
import graph1 from  './graph1.vue'
import prod1 from './productForm.vue'
import order from './orderForm.vue'
import cart from './cart.vue'
import orderView from './orderView.vue'
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
  {path:'/graphs',component:graph},
  {path:'/graphs1',component:graph1},
  {path:'/prodForm',component:prod1},
  {path:'/orderForm',component:order},
   {path:'/cart',component:cart},
    {path:'/orderView',component:orderView}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
