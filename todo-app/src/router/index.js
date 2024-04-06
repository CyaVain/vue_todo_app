import { createRouter, createWebHistory } from 'vue-router'
import AddView from '../views/AddView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/add',
      name: 'addView',
      component: AddView
    },
    {
      path: '/',
      name: 'ToDoList',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ToDoListView.vue')
    },
    {
      path: '/not-found',
      name: 'NotFound',
      component: NotFoundView
    },
    {
      path: '/:catchAll(.*)',
      redirect: { name: 'NotFound' }
    }
  ]
})

export default router
