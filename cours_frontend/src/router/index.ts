import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import LoadingScreen from '@/components/LoadingScreen.vue'
import GetStarted from '@/components/GetStarted.vue'
import Theme from '@/components/Theme.vue'
import Sign from '@/components/Sign.vue'
import Register from '@/components/Register.vue'
import RegisterOrSign from '@/components/RegisterOrSign.vue'
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Loading',
        component: LoadingScreen
    },
    {
        path: '/getStarted',
        name: 'GetStarted',
        component: GetStarted
    },
    {
        path: '/Theme',
        name: 'Theme',
        component: Theme
    },
    {
        path: '/RegisterOrSign',
        name: 'RegisterOrSign',
        component: RegisterOrSign
    },
    {
        path: '/Register',
        name: 'Register',
        component: Register
    },
    {
        path: '/Sign',
        name: 'Sign',
        component: Sign
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;