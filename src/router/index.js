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
      title: 'Myren | Accounts'
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
      title: 'Myren | Verify'
    }
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () => import('../views/Signin.vue'),
    meta: {
      title: 'Myren | Sign In'
    }
  },
  {
    path: '/editprofile',
    name: 'EditProfile',
    component: () => import('../views/EditProfile.vue'),
    meta: {
      title: 'Myren | Edit Profile'
    }
  },
  {
    path: '/data',
    name: 'Data',
    component: () => import('../views/Data.vue'),
    meta: {
      title: 'Myren | Your Data'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
