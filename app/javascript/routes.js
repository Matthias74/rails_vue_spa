import { createWebHistory, createRouter } from 'vue-router'
import Hello from '@/views/hello.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
  	{ path: '/', component: Hello, name: "root_path" }
  ]
});

export default router;
