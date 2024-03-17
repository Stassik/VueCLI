import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePageComp from '@/components/HomePageComp.vue'
import BlogPageComp from '@/components/BlogPageComp.vue'
import ProjectPageComp from '@/components/ProjectPageComp.vue'
import PageSingleComp from '@/components/PageSingleComp.vue'
import ProjectDetailsComp from '@/components/ProjectDetailsComp.vue'
import NotFoundPage from '@/components/NotFoundPage.vue'

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
  {
    path: '/404',
    name: '404',
    component: NotFoundPage,
  },
  {
    path: '*',
    redirect: { name: '404' },
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
