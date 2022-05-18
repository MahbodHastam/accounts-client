import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: 'Myren | Accounts'
    }
  },
  {
    path: '/verify',
    name: 'Verify',
    component: () => import('../views/Verify.vue'),
    // beforeEnter: (to, from, next) => {
    //   if (from.name !== 'Home') next({ name: 'Home' })
    //   else next()
    // }
    meta: {
      title: 'Myren | Verify'
    }
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: () => import('../views/SignIn.vue'),
    meta: {
      title: 'Myren | Sign In'
    }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../views/AuthorizationPage.vue'),
    meta: {
      title: 'Myren | Authorize Client'
    },
    children: [
      {
        path: 'single',
        name: 'AuthSingle',
        component: () => import('../views/AuthorizationPage.vue')
      }
    ]
  },
  {
    path: '/edit-profile',
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
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/Services.vue'),
    meta: {
      title: 'Myren | All of Myren Products'
    }
  },
  {
    path: '/intro',
    name: 'Intro',
    component: () => import('../views/Intro.vue'),
    meta: {
      title: 'Myren | an Intro!'
    }
  }
]

export default createRouter({
  mode: 'history',
  history: createWebHistory(),
  // base: import.meta.env.BASE_URL,
  routes
})
