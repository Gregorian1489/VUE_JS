import Vue from 'vue'
import HomePage from '../views/HomePage.vue'
import BlogPage from '../views/BlogPage.vue'
import ProjectPage from '../views/ProjectPage.vue'
import OurProject from '../views/OurProject.vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogPage,
  },
  {
    path: '/project',
    name: 'project',
    component: ProjectPage,
  },
  {
    path: '/our_project',
    name: 'our_project',
    component: OurProject,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
