import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import PhotoGrid from '@/components/PhotoGrid.vue'
import Single from '@/components/Single.vue'

const routes = [
  {
    path:'/',
    component:PhotoGrid,Home
  },
  {
    path:'/view/:postId',
    name:'Single',
    component:Single,
    props:true
  }
  // {
  //   // path: '/about',
  //   // name: 'About',
  //   // // route level code-splitting
  //   // // this generates a separate chunk (about.[hash].js) for this route
  //   // // which is lazy-loaded when the route is visited.
  //   // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
