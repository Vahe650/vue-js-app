import {createRouter, createWebHistory} from 'vue-router'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
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
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AddProductView.vue')
        }
    ]
})

export default router
