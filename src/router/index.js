import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/auth/login'
import register from '@/components/auth/register'
import navbar from '@/components/navbar'
import users from '@/components/user/users'
import userProfile from '@/components/user/userProfile'
import manageUser from '@/components/user/manageUser'
import sidebar from '@/components/user/sidebar'
import reserve from '@/components/reserveManage/display'
import book from '@/components/reserveManage/book'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: { requiresAuth: false }
    },
    {
      path: '/register',
      name: 'register',
      components: {
        default: register, 'navbar': navbar
      }
    },
    {
      path: '/users',
      name: 'users',
      components: {
        default: users, 'navbar': navbar }
    },
    {
      path: '/userProfile',
      name: 'userProfile',
      components: {
        default: userProfile, 'navbar': navbar, 'sidebar': sidebar
      }
    },
    {
      path: '/users/:userId',
      name: 'manageUser',
      components: {
        default: manageUser, 'navbar': navbar, 'sidebar': sidebar
      }
    },
    {
      path: '/reserve',
      name: 'reserve',
      components: {
        default: reserve, 'navbar': navbar
      }
    },
    {
      path: '/book',
      name: 'book',
      components: {
        default: book, 'navbar': navbar
      }
    },
    {
      path: '*',
      redirect: {name: 'users'}
    }
  ],
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth === false)) {
    next() // make sure to always call next()!
  } else {
    // this route requires auth, check if logged in
    if (localStorage.getItem('token')) {
      next()
    } else {
      // if not, redirect to login page.
      next({ name: 'login' })
    }
  }
})

export default router
