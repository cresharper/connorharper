import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import MyWork from '@/views/MyWork.vue'
import ContactPage from '@/views/ContactPage.vue'

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/my-work',
        name: 'MyWork',
        component: MyWork
    },
    {
        path: '/contact',
        name: 'ContactPage',
        component: ContactPage
    }
]

const router = createRouter({ history: createWebHashHistory(), routes })
export default router