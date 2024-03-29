import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/PostsView.vue'
import ContactView from '../views/ContactView.vue'
import BlogPost from '../views/BlogPost.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/author',
    name: 'author',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "author" */ '../views/AuthorView.vue')
    }
  },
  {
    path: '/blog/:postId',
    name: 'blog-post',
    component: BlogPost
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
