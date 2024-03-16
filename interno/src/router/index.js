import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePageComp from '@/components/HomePageComp.vue'
import BlogPageComp from '@/components/BlogPageComp.vue'
import ProjectPageComp from '@/components/ProjectPageComp.vue'
import PageSingleComp from '@/components/PageSingleComp.vue'
import ProjectDetailsComp from '@/components/ProjectDetailsComp.vue'

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
    path: '/project',
    name: 'project',
    component: ProjectPageComp
  },
  {
    path: '/page-single',
    name: 'page-single',
    component: PageSingleComp,
    props: true,
  },
  {
    path: '/project-details',
    name: 'project-details',
    component: ProjectDetailsComp,
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
