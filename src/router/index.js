import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import dashboard from "../views/loggedin/dashboard.vue";
import kecemasan from "../views/loggedin/kecemasan.vue";
import depresi from "../views/loggedin/depresi.vue";
import gangguanEmosi from "../views/loggedin/gangguanEmosi.vue";
import ptsd from "../views/loggedin/ptsd.vue";
import gangguanPenyesuaianBelajar from "../views/loggedin/gangguanPenyesuaianBelajar.vue";




Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      guest: true
    }
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      guest: false
    }
  },
  
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard,
    meta: {
        requiresAuth: false
    }
  },

  {
    path: '/kecemasan',
    name: 'kecemasan',
    component: kecemasan,
    meta: {
        requiresAuth: false
    }
  },

  {
    path: '/depresi',
    name: 'depresi',
    component: depresi,
    meta: {
        requiresAuth: false
    }
  },

  {
    path: '/gangguanEmosi',
    name: 'gangguanEmosi',
    component: gangguanEmosi,
    meta: {
        requiresAuth: false
    }
  },

  {
    path: '/ptsd',
    name: 'ptsd',
    component: ptsd,
    meta: {
        requiresAuth: false
    }
  },

  {
    path: '/gangguanPenyesuaianBelajar',
    name: 'gangguanPenyesuaianBelajar',
    component: gangguanPenyesuaianBelajar,
    meta: {
        requiresAuth: false
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
      if (!localStorage.getItem('token') || localStorage.getItem('token')  == "undefined" || localStorage.getItem('token') == '' ) {
          next({
              path: '/login',
              query: { tujuan: to.fullPath }
          })
      } else {
          // let user = JSON.parse(localStorage.getItem('user'))
          // if(to.matched.some(record => record.meta.is_admin)) {
          //     if(user.is_admin == 1){
          //         next()
          //     }
          //     else{
          //         next({ name: 'userboard'})
          //     }
          // }else {
          //     next()
          // }
          next()
      }
  } else if(to.matched.some(record => record.meta.guest)) {
    // console.log(localStorage.getItem('token'))
      if(!localStorage.getItem('token') || localStorage.getItem('token')  == "undefined" || localStorage.getItem('token') == '' ){
          next()
      }
      else{
          next({ name: 'dashboard'})
      }
  }else {
      next()
  }
})

export default router;