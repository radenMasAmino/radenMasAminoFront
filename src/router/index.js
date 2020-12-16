import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import daftarFront from "../views/daftarFront.vue";
import dashboardFront from "../views/dashboardFront.vue";
import kecemasanFront from "../views/kecemasanFront.vue";
import depresiFront from "../views/depresiFront.vue";
import gangguanEmosiFront from "../views/gangguanEmosiFront.vue";
import ptsdFront from "../views/ptsdFront.vue";
import gangguanPenyesuaianBelajarFront from "../views/gangguanPenyesuaianBelajarFront.vue";
import srq from "../views/srq.vue";
import Login from "../views/loggedin/Login.vue";
import Dashboard from "../views/loggedin/dashboard.vue";

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
    path: "/daftarFront",
    name: "daftarFront",
    component: daftarFront,
    meta: {
      guest: true
    }
  },

  {
    path: "/srq",
    name: "srq",
    component: srq,
    meta: {
      guest: true
    }
  },

  {
    path: "/dashboardFront",
    name: "dashboardFront",
    component: dashboardFront,
    meta: {
      guest: true
    }
  },

  {
    path: "/kecemasanFront",
    name: "kecemasanFront",
    component: kecemasanFront,
    meta: {
      guest: true
    }
  },

  {
    path: "/depresiFront",
    name: "depresiFront",
    component: depresiFront,
    meta: {
      guest: true
    }
  },

  {
    path: "/gangguanEmosiFront",
    name: "gangguanEmosiFront",
    component: gangguanEmosiFront,
    meta: {
      guest: true
    }
  },

  {
    path: "/ptsdFront",
    name: "ptsdFront",
    component: ptsdFront,
    meta: {
      guest: true
    }
  },

  {
    path: "/gangguanPenyesuaianBelajarFront",
    name: "gangguanPenyesuaianBelajarFront",
    component: gangguanPenyesuaianBelajarFront,
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
    component: Dashboard,
    meta: {
        requiresAuth: true
    }
  },
  {
    path: '/daftar',
    name: 'daftar',
    component: () => import ('../views/loggedin/Daftar.vue'),
    meta: {
        requiresAuth: false
    }
  },
  {
    path: '/kecemasan',
    name: 'kecemasan',
    component: () => import('../views/questionnare/kecemasan.vue'),
    meta: {
        requiresAuth: true
    }
  },
  {
    path: '/depresi',
    name: 'depresi',
    component: () => import('../views/questionnare/depresi.vue'),
    meta: {
        requiresAuth: true
    }
  },
  {
    path: '/gangguanEmosi',
    name: 'gangguanEmosi',
    component: () => import('../views/questionnare/gangguanEmosi.vue'),
    meta: {
        requiresAuth: true
    }
  },
  {
    path: '/ptsd',
    name: 'ptsd',
    component: () => import('../views/questionnare/ptsd.vue'),
    meta: {
        requiresAuth: true
    }
  },
  {
    path: '/gangguanPenyesuaianBelajar',
    name: 'gangguanPenyesuaianBelajar',
    component: () => import('../views/questionnare/gangguanPenyesuaianBelajar.vue'),
    meta: {
        requiresAuth: true
    }
  },
  {
    path: '/srq',
    name: 'srq',
    component: () => import('../views/questionnare/SRQ.vue'),
    meta: {
        requiresAuth: true
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
  } else {
      next()
  }

})

export default router;