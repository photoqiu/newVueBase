/*
 * @Author: ext.qiubo
 * @Date: 2021-02-18 17:03:35
 * @LastEditTime: 2021-02-19 14:45:56
 * @LastEditors: ext.qiubo
 * @FilePath: \3C-Admin-Template\src\router.ts
 * @version: 
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Login from './pages/Login.vue'
import About from './pages/About.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/test',
        name: 'Test',
        component: Login
    }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;