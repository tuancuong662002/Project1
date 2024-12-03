import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Product from './components/Product.vue'
import Customer from './components/Customer.vue'
import Bill from './components/Bill.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/product',
        name: 'Product',
        component: Product
    },
    {
        path: '/bill',
        name: 'Bill',
        component: Bill
    },
    {
        path: '/customer',
        name: 'Customer',
        component: Customer
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router 