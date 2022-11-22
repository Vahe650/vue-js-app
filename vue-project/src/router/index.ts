import {createRouter, createWebHistory} from 'vue-router'
import LoginView from '../views/LoginView.vue'
import LayoutView from '../views/LayoutView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'productView',
            component: () => import('../views/ProductView.vue')
        },
        {
            path: '/layout',
            name: 'layout',
            component: LayoutView
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },
        {
            path: '/admin',
            name: 'admin',
            component: () => import('../views/AdminView.vue')
        },
        {
            path: '/product',
            name: 'product',
            component: () => import('../views/ProductView.vue')
        },
        {
            path: '/product/:id',
            name: 'productItem',
            component: () => import('../views/ProductItemView.vue')
        },
        {
            path: '/add',
            name: 'add',
            component: () => import('../views/AddProductView.vue')
        }
    ]
})

export default router;
