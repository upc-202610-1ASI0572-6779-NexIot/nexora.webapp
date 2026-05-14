import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('../iam/presentation/views/LoginView.vue')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../service-monitoring/dashboard/presentation/views/DashboardView.vue')
    },
    {
        path: '/buildings',
        name: 'buildings',
        component: () => import('../asset-management/properties/presentation/views/BuildingsView.vue')
    },
    {
        path: '/alerts',
        name: 'alerts',
        component: () => import('../service-monitoring/alerts/presentation/views/AlertsCenterView.vue')
    },
    {
        path: '/',
        redirect: '/login'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;