import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/layouts/employeLayout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: {name: 'home.index'},
    children: [
      {
        path: 'employeList',
        name: 'EmployeList',
        props: true,
        component: () => import('@/views/pages/employees/EmployeList.vue')
      },
      {
        path: 'employeShow/:id',
        name: 'EmployeShow',
        component: () => import('@/views/pages/employees/EmployeShow.vue'),
        props: true
      },
      {
        path: '/',
        name: 'home.index',
        component: () => import('@/views/pages/employees/Home.vue'),
        meta: {title: "home"}
       }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
