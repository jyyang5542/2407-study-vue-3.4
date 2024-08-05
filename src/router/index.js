import { createRouter, createWebHistory } from 'vue-router';
import MyHome from '../views/MyHome.vue';
import MyAxios from '../views/MyAxios.vue';

const routes = [
  {
    path: '/',
    name: 'MyHome',
    component: MyHome,
  },
  {
    path: '/axios',
    name: 'MyAxios',
    component: MyAxios,
  },
  // 추가 라우트를 여기에 정의
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
