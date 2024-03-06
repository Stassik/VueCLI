import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import HomePageComp from '@/components/HomePageComp.vue'
import BlogPageComp from '@/components/BlogPageComp.vue'
import PageSingleComp from '@/components/PageSingleComp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePageComp
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogPageComp
  },
  {
    path: '/page-single',
    name: 'page-single',
    component: PageSingleComp,
    props: true,
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
