import {
    createRouter,
    createWebHistory,
} from 'vue-router';

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import('@/view/HomeComp.vue'),
}];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// 路由拦截处理
router.beforeEach(async (to, from, next) => next());

export default router;
