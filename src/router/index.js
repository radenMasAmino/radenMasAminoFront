import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
<<<<<<< HEAD
import daftarFront from "../views/DaftarFront.vue";
import dashboardFront from "../views/dashboardFront.vue";
import kecemasanFront from "../views/kecemasanFront.vue";
import depresiFront from "../views/depresiFront.vue";
import gangguanEmosiFront from "../views/gangguanEmosiFront.vue";
import ptsdFront from "../views/ptsdFront.vue";
import gangguanPenyesuaianBelajarFront from "../views/gangguanPenyesuaianBelajarFront.vue";
import srqFront from "../views/srqFront.vue";
=======
import DaftarFront from "../views/DaftarFront.vue";
import DashboardFront from "../views/dashboardFront.vue";
import KecemasanFront from "../views/kecemasanFront.vue";
import DepresiFront from "../views/depresiFront.vue";
import GangguanEmosiFront from "../views/gangguanEmosiFront.vue";
import PTSDFront from "../views/ptsdFront.vue";
import GangguanPenyesuaianBelajarFront from "../views/gangguanPenyesuaianBelajarFront.vue";
import SRQFront from "../views/srqFront.vue";
>>>>>>> 6b520e0ce288a28fdeda6b6407c710a6ef8a1b68
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
    component: DaftarFront,
    meta: {
      guest: false
    }
  },

  {
    path: "/srqFront",
    name: "srqFront",
<<<<<<< HEAD
    component: srqFront,
=======
    component: SRQFront,
>>>>>>> 6b520e0ce288a28fdeda6b6407c710a6ef8a1b68
    meta: {
      guest: false
    }
  },

  {
    path: "/dashboardFront",
    name: "dashboardFront",
    component: DashboardFront,
    meta: {
      guest: false
    }
  },

  {
    path: "/kecemasanFront",
    name: "kecemasanFront",
    component: KecemasanFront,
    meta: {
      guest: false
    }
  },

  {
    path: "/depresiFront",
    name: "depresiFront",
    component: DepresiFront,
    meta: {
      guest: false
    }
  },

  {
    path: "/gangguanEmosiFront",
    name: "gangguanEmosiFront",
    component: GangguanEmosiFront,
    meta: {
      guest: false
    }
  },

  {
    path: "/ptsdFront",
    name: "ptsdFront",
    component: PTSDFront,
    meta: {
      guest: false
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
<<<<<<< HEAD
        requiresAuth: false
=======
      requiresAuth: true
>>>>>>> 6b520e0ce288a28fdeda6b6407c710a6ef8a1b68
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