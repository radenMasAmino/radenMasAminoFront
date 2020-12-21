<template>
  <div id="dashboardFront">
    <section class="bgheader">
      <b-container>
        <b-row>
          <b-col cols="12" md="8" lg="8" style="background-color: ">
            <div class="partone">
              <h3
                style="margin: 0 !important; padding: 0 !important"
                class="d-none d-md-block d-lg-none d-none d-lg-block d-xl-none d-none d-xl-block"
              >
                <strong>ONME RADEN MAS AMINO</strong>
              </h3>
              <h6
                style="margin: 0 !important; padding: 0 !important"
                class="d-none d-md-block d-lg-none d-none d-lg-block d-xl-none d-none d-xl-block"
              >
                <strong>Online Nurse Mental Health Care Raden Mas Amino</strong>
              </h6>
              <!-- <img src="https://via.placeholder.com/50">
                            <div class="brandname">
                                <h3 class="m-t-0 m-b-0 m-l-10"><strong>SIDE</strong></h3>
                            </div> -->
              <h4
                style="margin: 0 !important; padding: 0 !important"
                class="d-block d-sm-none d-none d-sm-block d-md-none"
              >
                <strong>ONME RADEN MAS AMINO</strong>
              </h4>
              <h6
                style="
                  margin: 0 !important;
                  padding: 0 !important;
                  font-size: 12px;
                "
                class="d-block d-sm-none d-none d-sm-block d-md-none"
              >
                <strong>Online Nurse Mental Health Care Raden Mas Amino</strong>
              </h6>
            </div>
          </b-col>

          <b-col cols="6" md="4" lg="4">
            <div class="parttwo">
              <b-dropdown
                right
                variant="link"
                toggle-class="text-decoration-none"
                no-caret
              >
                <template v-slot:button-content>
                  <div class="account">
                    <img
                      src="../assets/user.png"
                      style="height: 8vh"
                      class="invert"
                    />
                  </div>
                </template>

                <b-dropdown-item to="/daftarFront">Profile</b-dropdown-item>
                <b-dropdown-item @click="ClickLogout">Logout</b-dropdown-item>
              </b-dropdown>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section style="padding-top: 60px; padding-bottom: 60px">
      <b-container>
        <b-row>
          <b-col md="12" lg="12">
            <div class="partone">
              <div class="boxmenu" >
                <router-link
                  :to="'srqFront'"
                  style="text-decoration: none; color: #333"
                >
                  <center>
                    <img
                      src="../assets/medical-record.png"
                      style="height: 100px"
                    />
                    <h6 class="m-t-15 m-b-0"><strong>SRQ</strong></h6>
                  </center>
                </router-link>
              </div>

              <div class="boxmenu" v-if="srqCount >=6">
                <router-link
                  :to="'kecemasanFront'"
                  style="text-decoration: none; color: #333"
                >
                  <center>
                    <img
                      src="../assets/medical-record.png"
                      style="height: 100px"
                    />
                    <h6 class="m-t-15 m-b-0"><strong>KECEMASAN</strong></h6>
                  </center>
                </router-link>
              </div>

              <div class="boxmenu" v-if="srqCount >=6">
                <router-link
                  :to="'depresiFront'"
                  style="text-decoration: none; color: #333"
                >
                  <center>
                    <img
                      src="../assets/medical-record.png"
                      style="height: 100px"
                    />
                    <h6 class="m-t-15 m-b-0"><strong>DEPRESI</strong></h6>
                  </center>
                </router-link>
              </div>
            </div>
          </b-col>

          <b-col md="12" lg="12" style="margin-top: 15px">
            <div class="partone">
              <div class="boxmenu" v-if="srqCount >=6">
                <router-link
                  :to="'gangguanEmosiFront'"
                  style="text-decoration: none; color: #333"
                >
                  <center>
                    <img
                      src="../assets/medical-record.png"
                      style="height: 100px"
                    />
                    <h6 class="m-t-15 m-b-0">
                      <strong>GANGGUAN KONTROL EMOSI</strong>
                    </h6>
                  </center>
                </router-link>
              </div>

              <div class="boxmenu" v-if="srqCount >=6">
                <router-link
                  :to="'ptsdFront'"
                  style="text-decoration: none; color: #333"
                >
                  <center>
                    <img
                      src="../assets/medical-record.png"
                      style="height: 100px"
                    />
                    <h6 class="m-t-15 m-b-0"><strong>PTSD</strong></h6>
                  </center>
                </router-link>
              </div>

              <div class="boxmenu" v-if="srqCount >=6">
                <router-link
                  :to="'gangguanPenyesuaianBelajarFront'"
                  style="text-decoration: none; color: #333"
                >
                  <center>
                    <img
                      src="../assets/medical-record.png"
                      style="height: 100px"
                    />
                    <h6 class="m-t-15 m-b-0">
                      <strong>GANGGUAN PENYESUAIAN BELAJAR</strong>
                    </h6>
                  </center>
                </router-link>
              </div>

              <div class="boxmenu" style="position:relative">
                <router-link
                  :to="'chatFront'"
                  style="text-decoration: none; color: #333"
                >
                  <center>
                    <img
                      src="../assets/medical-record.png"
                      style="height: 100px"
                    />
                    <h6 class="m-t-15 m-b-0">
                      <strong>CHAT</strong>
                    </h6>
                  </center>
                </router-link>

                <div v-if="chatCount" style="width:40px;height:40px;background-color:#007bff;border-radius:100%;display:flex;justify-content:center;align-items:center;position:absolute;top:-20px;right:-20px;"><h5 style="margin:0;padding:0;color:#fff" ><strong>{{chatCount}}</strong></h5></div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <footer style="background-color: #2c3e50">
      <b-container>
        <b-row>
          <b-col md="12" lg="12">
            <h6
              style="margin: 0; padding: 15px; color: #fff; text-align: center"
            >
              <strong>© 2020 RSJD Amino Gondohutomo</strong>
            </h6>
          </b-col>
        </b-row>
      </b-container>
    </footer>
  </div>
</template>

<script>
import axios from "axios";
import { ipBackend } from "@/config.js";
export default {
  name: "dashboardFront",
    data() {
        return {
            chatCount: 0,
            srqCount: 0,
            responden: []
        }
    },
     sockets: {


      updateJumlahChat(){
           this.updateJumlahChat();
      }
  },
    mounted(){
          axios.get(ipBackend + '/users/profil', {
            headers: {
                'accessToken': localStorage.getItem('token')
            }
        })
        .then(res => {
        // console.log('mounted profile', res);
        // console.log(res.data.respon);
        this.responden = res.data.respon[0]
         this.$socket.emit('join', this.responden.id)
          this.updateJumlahChat()
         
        // console.log(this.responden.id);
        })
        .catch(err => {
            console.log('mounted nya', err);
        })


          axios.get(ipBackend + '/srq/totalPoint', {
            headers: {
                'accessToken': localStorage.getItem('token')
            }
        })
        .then(res => {
      
          this.srqCount = res.data.total;
  
         
        // console.log(this.responden.id);
        })
        .catch(err => {
            console.log('mounted nya', err);
        })

    },
  methods: {
    ClickLogout() {
      alert("terima kasih");
      localStorage.setItem("token", "");
      this.$router.push({ path: "/" });
    },
      updateJumlahChat(){
           axios.get(ipBackend + '/chat/countUnread', {
            headers: {
                'accessToken': localStorage.getItem('token')
            }
        })
        .then(res => {
          // console.log(res.data.jumlahUnread)
        // console.log('mounted profile', res);
        this.chatCount = res.data.jumlahUnread;
      
  
         
        // console.log(this.responden.id);
        })
        .catch(err => {
            console.log('mounted nya', err);
        })
      }
  },
};
</script>

<style scoped>
.btn-primary {
  background-color: #2c3e50;
  border-color: #000;
}

#dashboardFront .bgheader {
  background-color: #2c3e50;
  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  color: #fff;
}

#dashboardFront .bgheader .partone {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 65px;
  flex-direction: column;
}

#dashboardFront .bgheader .parttwo {
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
#dashboardFront .bgheader .parttwo img {
  border-radius: 100%;
}
#dashboardFront .bgheader .parttwo .account {
  display: flex;
  height: 50px;
  align-items: center;
}
#dashboardFront .bgheader .parttwo .accountname {
  display: flex;
  flex-direction: column;
  margin-right: 10px;
}

#dashboardFront .partone {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  /* height: 90vh; */
}

#dashboardFront .partone .boxmenu {
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

#dashboardFront .parttwo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 520px;
  /* background-color: pink; */
}

#dashboardFront .parttwo .boxmenu {
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

#dashboardFront .parttwo .boxmenu img {
  border-radius: 100%;
  color: #fff;
}

/*Filter styles*/
.saturate {
  filter: saturate(3);
}
.grayscale {
  filter: grayscale(100%);
}
.contrast {
  filter: contrast(160%);
}
.brightness {
  filter: brightness(0.25);
}
.blur {
  filter: blur(3px);
}
.invert {
  filter: invert(100%);
}
.sepia {
  filter: sepia(100%);
}
.huerotate {
  filter: hue-rotate(180deg);
}
.rss.opacity {
  filter: opacity(50%);
}
</style>