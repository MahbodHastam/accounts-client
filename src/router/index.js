import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "Myren | Accounts"
    }
  },
  {
    path: '/verify',
    name: 'Verify',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Verify.vue'),
    // beforeEnter: (to, from, next) => {
    //   if (from.name !== 'Home') next({ name: 'Home' }) 
    //   else next()
    // }
    meta: {
      title: "Myren | Verify"
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () =>
      import('../views/Profile.vue'),
    // beforeEnter: (to, from, next) => {
    //   if (from.name !== 'Home') next({ name: 'Home' }) 
    //   else next()
    // }
    meta: {
      title: "Myren | Profile"
    }
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: () =>
      import('../views/Welcome.vue'),
    meta: {
      title: "Myren | Welcome"
    }
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () =>
      import('../views/Signin.vue'),
    meta: {
      title: "Myren | Sign In"
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
