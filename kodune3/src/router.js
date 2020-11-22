import { createWebHistory, createRouter } from 'vue-router';
import Login from './components/Login';
import Browse from './components/Browse';
import Background from './components/Background'

const routes = [
    { path: '/', component: Background },
    { path: '/login', component: Login },
    { path: '/browse', component: Browse }
  ]

const router = createRouter({
	history: createWebHistory(),
  routes,
});

export default router;