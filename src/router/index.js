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
import chatFront from "../views/chatFront.vue";
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

      requiresAuth: true,
      google: true
    }
  },

  {
    path: "/srqFront",
    name: "srqFront",
    component: SRQFront,
    meta: {

      requiresAuth: false,
      google: false
    }
  },

  {
    path: "/chatFront",
    name: "chatFront",
    component: chatFront,
    meta: {

      requiresAuth: true,
      google: true
    }
  },

  {
    path: "/dashboardFront",
    name: "dashboardFront",
    component: DashboardFront,
    meta: {

      requiresAuth: false,
      google: false
    }
  },

  {
    path: "/kecemasanFront",
    name: "kecemasanFront",
    component: KecemasanFront,
    meta: {

      requiresAuth: true,
      google: true
    }
  },

  {
    path: "/depresiFront",
    name: "depresiFront",
    component: DepresiFront,
    meta: {

      requiresAuth: true,
      google: true
    }
  },

  {
    path: "/gangguanEmosiFront",
    name: "gangguanEmosiFront",
    component: GangguanEmosiFront,
    meta: {

      requiresAuth: true,
      google: true
    }
  },

  {
    path: "/ptsdFront",
    name: "ptsdFront",
    component: PTSDFront,
    meta: {

      requiresAuth: true,
      google: true
    }
  },

  {
    path: "/gangguanPenyesuaianBelajarFront",
    name: "gangguanPenyesuaianBelajarFront",
    component: GangguanPenyesuaianBelajarFront,
    meta: {

      requiresAuth: true,
      google: false
    }
  },
  // --------------------- bawah non-front --------------------------- //
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      guest: true
    }
  },
  {
    path: '/daftar',
    name: 'daftar',
    component: () => import('../views/loggedin/Daftar.vue'),
    meta: {
      requiresAuth: true,
      google: false
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true,
      google: false
    }
  },
  {
    path: '/user',
    name: 'user',
    component: user,
    meta: {
      requiresAuth: true,
      google: false
    }
  },
  {
    path: '/screeninguser',
    name: 'screeninguser',
    component: screeninguser,
    meta: {
      requiresAuth: true,
      google: false
    }
  },
  {
    path: '/kecemasan',
    name: 'kecemasan',
    component: () => import('../views/questionnare/kecemasan.vue'),
    meta: {
      requiresAuth: true,
      google: false
    }
  },
  {
    path: '/depresi',
    name: 'depresi',
    component: () => import('../views/questionnare/depresi.vue'),
    meta: {
      requiresAuth: true,
      google: false
    }
  },
  {
    path: '/gangguanEmosi',
    name: 'gangguanEmosi',
    component: () => import('../views/questionnare/gangguanEmosi.vue'),
    meta: {
      requiresAuth: true,
      google: false
    }
  },
  {
    path: '/ptsd',
    name: 'ptsd',
    component: () => import('../views/questionnare/ptsd.vue'),
    meta: {
      requiresAuth: true,
      google: false
    }
  },
  {
    path: '/gangguanPenyesuaianBelajar',
    name: 'gangguanPenyesuaianBelajar',
    component: () => import('../views/questionnare/gangguanPenyesuaianBelajar.vue'),
    meta: {
      requiresAuth: true,
      google: false
    }
  },
  {
    path: '/srq',
    name: 'srq',
    component: () => import('../views/questionnare/SRQ.vue'),
    meta: {
      requiresAuth: true,
      google: false
    }
  },
];
import axios from "axios";
import { ipBackend } from "@/config.js";
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(async (to, from, next) => {
  if (to.path == '/sukses') {
    localStorage.setItem('token', to.query.token)
    next({
      path: "/daftarFront"
    })
  }
  if (to.matched.some(record => record.meta.requiresAuth)) {

    if (!localStorage.getItem('token') || localStorage.getItem('token') == "undefined" || localStorage.getItem('token') == '') {
      next({
        path: '/login',
        query: { tujuan: to.fullPath }
      })
    } else {
      let dataUser = await axios.get(ipBackend + '/users/profil', {
        headers: {
          'accessToken': localStorage.getItem('token')
        }
      })

      if (to.matched.some(record => record.meta.google)) {
        if (dataUser.data.respon[0].role == 'guest') {
          next()
        }
        else {
          next({
            path: '/login',
            query: { tujuan: to.fullPath }
          })
        }
      } else {
        if (dataUser.data.respon[0].role == 'admin') {
          next()
        }
        else {
          next({
            path: '/login',
            query: { tujuan: to.fullPath }
          })
        }

      }
    }

  } else if (to.matched.some(record => record.meta.guest)) {
    // console.log(localStorage.getItem('token'))
    next()
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