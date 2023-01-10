import * as VueRouter from 'vue-router';
import Home from '../../modules/home/views/Home.vue';

const routes = [
    { path: '/', component: Home },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

export default router;
