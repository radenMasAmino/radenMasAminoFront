<template>
  <div id="dashboard">
    <myheader></myheader>
    <b-container class="bv-example-row">
      <b-row class="d-none d-sm-block">
        <b-col>
          <div class="partone">
            <div class="boxmenu">
              <router-link
                :to="'kecemasan'"
                style="text-decoration: none; color: #333"
              >
                <center>
                  <img
                    src="../../assets/medical-record.png"
                    style="height: 100px"
                  />
                  <h5 class="m-t-15 m-b-0"><strong>MASTER</strong></h5>
                  <h6 class="m-t-0 m-b-0"><strong>KECEMASAN</strong></h6>
                </center>
              </router-link>
            </div>

            <div class="boxmenu">
              <router-link
                :to="'depresi'"
                style="text-decoration: none; color: #333"
              >
                <center>
                  <img
                    src="../../assets/medical-record.png"
                    style="height: 100px"
                  />
                  <h5 class="m-t-15 m-b-0"><strong>MASTER</strong></h5>
                  <h6 class="m-t-0 m-b-0"><strong>DEPRESI</strong></h6>
                </center>
              </router-link>
            </div>

            <div class="boxmenu">
              <router-link
                :to="'gangguanEmosi'"
                style="text-decoration: none; color: #333"
              >
                <center>
                  <img
                    src="../../assets/medical-record.png"
                    style="height: 100px"
                  />
                  <h5 class="m-t-15 m-b-0"><strong>MASTER</strong></h5>
                  <h6 class="m-t-0 m-b-0"><strong>GANGGUAN EMOSI</strong></h6>
                </center>
              </router-link>
            </div>

            <div class="boxmenu">
              <router-link
                :to="'ptsd'"
                style="text-decoration: none; color: #333"
              >
                <center>
                  <img
                    src="../../assets/medical-record.png"
                    style="height: 100px"
                  />
                  <h5 class="m-t-15 m-b-0"><strong>MASTER</strong></h5>
                  <h6 class="m-t-0 m-b-0"><strong>PTSD</strong></h6>
                </center>
              </router-link>
            </div>

            <div class="boxmenu">
              <router-link
                :to="'gangguanPenyesuaianBelajar'"
                style="text-decoration: none; color: #333"
              >
                <center>
                  <img
                    src="../../assets/medical-record.png"
                    style="height: 100px"
                  />
                  <h5 class="m-t-15 m-b-0"><strong>MASTER</strong></h5>
                  <h6 class="m-t-0 m-b-0">
                    <strong>GANGGUAN PENYESUAIAN BELAJAR</strong>
                  </h6>
                </center>
              </router-link>
            </div>

            <div class="boxmenu">
              <router-link
                :to="'srq'"
                style="text-decoration: none; color: #333"
              >
                <center>
                  <img
                    src="../../assets/medical-record.png"
                    style="height: 100px"
                  />
                  <h5 class="m-t-15 m-b-0"><strong>MASTER</strong></h5>
                  <h6 class="m-t-0 m-b-0">
                    <strong>SRQ</strong>
                  </h6>
                </center>
              </router-link>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <!-- <myfooter></myfooter> -->
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapGetters, mapActions } from "vuex";
import myheader from "../../components/header";
import axios from "axios";
// import myfooter from "../../components/footer"
export default {
  name: "dashboard",
  data() {
    return {
      dari: 0,
      sampai: 0,
      jmlTotal: 0,
    };
  },
  components: {
    myheader,
    // myfooter
  },

  computed: {
    ...mapState("Login", ["token"]),
    ...mapGetters("Login", ["cekLogin"]),
  },
  mounted() {
    let vm = this;
    axios.get("http://sideku.org:8801/pasien/count").then((ree) => {
      vm.jmlTotal = ree.data.jml;
      // console.log(ree)
    });
  },
  methods: {
    ...mapActions("Login", ["doLogin", "doLogout"]),

    logoutdong: function () {
      this.doLogout();
      this.$router.push({ name: "login" });
      // this.isLogin =  this.cekLogin
    },
    print: function () {
      // console.log(this.sampai)
      if (parseInt(this.dari) >= parseInt(this.sampai)) {
        alert('Jumlah "dari" harus lebih kecil dari "sampai"');
      } else {
        window.open(
          "http://sideku.org:8801/pasien/print?a=" +
            this.dari +
            "&b=" +
            this.sampai,
          "_blank"
        );
      }
    },
  },
};
</script>

<style scoped>
#dashboard .partone {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  height: 90vh;
}

#dashboard .partone .boxmenu {
  width: 200px;
  background-color: #fff;
  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.3);
  padding: 0px 15px;
  border-radius: 8px;
  margin-top: 30px;
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* #dashboard .partone .boxmenu img{
  border-radius: 100%;
} */

#dashboard .parttwo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 520px;
  background-color: pink;
}

#dashboard .parttwo .boxmenu {
  width: 300px;
  background-color: #fff;
  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.3);
  padding: 0px 15px;
  border-radius: 8px;
  margin-top: 30px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#dashboard .parttwo .boxmenu img {
  border-radius: 100%;
}
</style>
