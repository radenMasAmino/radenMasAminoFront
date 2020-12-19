import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import DaftarFront from "../views/DaftarFront.vue";
import DashboardFront from "../views/dashboardFront.vue";
import KecemasanFront from "../views/kecemasanFront.vue";
import DepresiFront from "../views/depresiFront.vue";
import GangguanEmosiFront from "../views/gangguanEmosiFront.vue";
import PTSDFront from "../views/ptsdFront.vue";
import GangguanPenyesuaianBelajarFront from "../views/gangguanPenyesuaianBelajarFront.vue";
import SRQFront from "../views/srqFront.vue";
import Login from "../views/loggedin/Login.vue";
import Dashboard from "../views/loggedin/dashboard.vue";
import user from "../views/loggedin/user.vue";
import screeninguser from "../views/loggedin/screeninguser.vue";

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
    component: DaftarFront,
    meta: {
      guest: true
    }
  },

  {
    path: "/srqFront",
    name: "srqFront",
    component: SRQFront,
    meta: {
      guest: true
    }
  },

  {
    path: "/dashboardFront",
    name: "dashboardFront",
    component: DashboardFront,
    meta: {
      guest: true
    }
  },

  {
    path: "/kecemasanFront",
    name: "kecemasanFront",
    component: KecemasanFront,
    meta: {
      guest: true
    }
  },

  {
    path: "/depresiFront",
    name: "depresiFront",
    component: DepresiFront,
    meta: {
      guest: true
    }
  },

  {
    path: "/gangguanEmosiFront",
    name: "gangguanEmosiFront",
    component: GangguanEmosiFront,
    meta: {
      guest: true
    }
  },

  {
    path: "/ptsdFront",
    name: "ptsdFront",
    component: PTSDFront,
    meta: {
      guest: true
    }
  },

  {
    path: "/gangguanPenyesuaianBelajarFront",
    name: "gangguanPenyesuaianBelajarFront",
    component: GangguanPenyesuaianBelajarFront,
    meta: {
      guest: true
    }
  },
  // --------------------- bawah non-front --------------------------- //
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      guest: false
    }
  },
  {
    path: '/daftar',
    name: 'daftar',
    component: () => import ('../views/loggedin/Daftar.vue'),
    meta: {
      requiresAuth: true
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
    path: '/user',
    name: 'user',
    component: user,
    meta: {
        requiresAuth: true
    }
  },
  {
    path: '/screeninguser',
    name: 'screeninguser',
    component: screeninguser,
    meta: {
        requiresAuth: true
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
  if(to.path == '/sukses') {
      localStorage.setItem('token', to.query.token)
          next({
            path: "/daftarFront"
          })
  }
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
          // next({ name: 'dashboardFront'})
          next()
      }
  } else {
      next()
  }

  // if(to.path == '/sukses'){
  //   localStorage.setItem('token', to.query.token)
  //   next({
  //     path: "/daftarFront"
  //   })
  // }

})

export default router;