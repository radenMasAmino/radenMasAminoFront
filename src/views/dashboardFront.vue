<template>
  <div id="dashboardFront">
    <section class="bgheader">
      <b-container>
        <b-row>
          <b-col cols="9" md="8" lg="8" style="background-color: ">
            <div class="partone">
              <h3
                style="margin: 0 !important; padding: 0 !important"
                class="
                  d-none
                  d-md-block
                  d-lg-none
                  d-none
                  d-lg-block
                  d-xl-none
                  d-none
                  d-xl-block
                "
              >
                <strong>ONME RADEN MAS AMINO</strong>
              </h3>
              <h6
                style="margin: 0 !important; padding: 0 !important"
                class="
                  d-none
                  d-md-block
                  d-lg-none
                  d-none
                  d-lg-block
                  d-xl-none
                  d-none
                  d-xl-block
                "
              >
                <strong>Online Nurse Mental Health Care Raden Mas Amino</strong>
              </h6>
              <!-- <img src="https://via.placeholder.com/50">
                            <div class="brandname">
                                <h3 class="m-t-0 m-b-0 m-l-10"><strong>SIDE</strong></h3>
                            </div> -->
              <h4
                style="
                  margin: 0 !important;
                  padding: 0 !important;
                  font-size: 20px;
                "
                class="d-block d-sm-none d-none d-sm-block d-md-none"
              >
                <strong>ONME RADEN MAS AMINO</strong>
              </h4>
              <h6
                style="
                  margin: 0 !important;
                  padding: 0 !important;
                  font-size: 10px;
                "
                class="d-block d-sm-none d-none d-sm-block d-md-none"
              >
                <strong>Online Nurse Mental Health Care Raden Mas Amino</strong>
              </h6>
            </div>
          </b-col>

          <b-col cols="3" md="4" lg="4">
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
            <!-- <div
              style="display: flex; justify-content: center"
            >
              <h2 style="text-align: center">
                <strong>Anda Tidak Memiliki Gangguan Kejiwaan</strong>
              </h2>
            </div>
            <div v-else style="display: flex; justify-content: center">
              <h2 style="text-align: center">
                <strong>Silahkan Isi Form Deteksi Lain</strong>
              </h2>
            </div> -->

            <div class="partone">
              <div class="boxmenu">
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

              <div class="boxmenu">
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

              <div class="boxmenu">
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
              <div class="boxmenu">
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

              <div class="boxmenu">
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

              <div class="boxmenu">
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

              <div class="boxmenu" style="position: relative">
                <router-link
                  :to="'chatFront'"
                  style="text-decoration: none; color: #333"
                >
                  <center>
                    <img src="../assets/chat.png" style="height: 100px" />
                    <h6 class="m-t-15 m-b-0">
                      <strong>CHAT</strong>
                    </h6>
                  </center>
                </router-link>

                <div
                  v-if="chatCount"
                  style="
                    width: 40px;
                    height: 40px;
                    background-color: #007bff;
                    border-radius: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: absolute;
                    top: -20px;
                    right: -20px;
                  "
                >
                  <h5 style="margin: 0; padding: 0; color: #fff">
                    <strong>{{ chatCount }}</strong>
                  </h5>
                </div>
              </div>

              <div class="boxmenu">
                <center>
                  <span v-b-modal.modal-lg>
                    <img src="../assets/exercise.png" style="height: 100px" />
                    <h6 class="m-t-15 m-b-0">
                      <strong>Training Mindfulness</strong>
                    </h6>
                  </span>
                </center>
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

    <b-modal
      id="modal-lg"
      size="xl"
      title="Large Modal"
      hide-footer
      hide-header
    >
      <b-row>
        <b-col md="12">
          <h3 class="text-center">
            <strong>Training Mindfulness Spiritual Islam</strong>
          </h3>
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col md="3">
          <div class="box-icon1">
            <center>
              <img src="../assets/001-goal.png" alt="" style="width: 100%" />
            </center>
          </div>
        </b-col>
        <b-col md="9">
          <div class="box">
            <b-row>
              <b-col md="12"
                ><h3 class="mt-0 mb-0"><strong>Tujuan</strong></h3>
                <p>Tujuan dari Mindfulness Spiritual Islam:</p></b-col
              >
            </b-row>

            <b-row>
              <b-col md="12">
                <b-table-simple small borderless>
                  <b-tbody>
                    <b-tr>
                      <b-td>1.</b-td>
                      <b-td
                        >Membantu individu untuk secara sadar memahami kondisi
                        atau pengalaman yang dihadapi bukan sebagai kebetulan
                        tetapi peristiwa dibuat oleh Allah SWT</b-td
                      >
                    </b-tr>

                    <b-tr>
                      <b-td>2.</b-td>
                      <b-td
                        >Membantu individu secara fokus menemukan solusi yang
                        dapat digunakan untuk menyelesaikan masalah yang sedang
                        dihadapi sesuai dengan aturan Allah SWT</b-td
                      >
                    </b-tr>

                    <b-tr>
                      <b-td>3.</b-td>
                      <b-td
                        >Membantu seseorang untuk menentukan target-target sehat
                        mandiri sebagai bentuk usaha agar tidak kembali
                        mengalami masalah yang sama</b-td
                      >
                    </b-tr>
                  </b-tbody>
                </b-table-simple>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>

      <b-row class="mt-5">
        <b-col md="9">
          <div class="box">
            <b-row>
              <b-col md="12"
                ><h3 class="mt-0 mb-0"><strong>Manfaat</strong></h3>
                <p>Manfaat dari Mindfulness Spiritual Islam:</p></b-col
              >
            </b-row>

            <b-row>
              <b-col md="12">
                <b-table-simple small borderless>
                  <b-tbody>
                    <b-tr>
                      <b-td>1.</b-td>
                      <b-td
                        >Membuat individu menjadi lebih dekat dengan Allah,
                        memahami eksistensi-Nya dalam kehidupan manusia, serta
                        memahami makna hidup sebenarnya.</b-td
                      >
                    </b-tr>

                    <b-tr>
                      <b-td>2.</b-td>
                      <b-td
                        >Membuat individu menyadari dosa-dosa yang telah lalu
                        dan bertaubat secara nasuha.</b-td
                      >
                    </b-tr>

                    <b-tr>
                      <b-td>3.</b-td>
                      <b-td
                        >Membuat individu mampu memaknai sakit yang dialaminya,
                        mampu berpikir positif pada Allah, manusia dan
                        lingkungannya.</b-td
                      >
                    </b-tr>

                    <b-tr>
                      <b-td>4.</b-td>
                      <b-td
                        >Membuat individu yakin bahwa yang memberikan penyakit
                        itu adalah Allah SWT dan Allah SWT lah yang mampu
                        menyembuhkan penyakitnya.</b-td
                      >
                    </b-tr>
                  </b-tbody>
                </b-table-simple>
              </b-col>
            </b-row>
          </div>
        </b-col>
        <b-col md="3">
          <div class="box-icon1">
            <center>
              <img src="../assets/003-benefit.png" alt="" style="width: 100%" />
            </center>
          </div>
        </b-col>
      </b-row>

      <b-row class="mt-5">
        <b-col md="3">
          <div class="box-icon1">
            <img src="../assets/004-jigsaw.png" alt="" style="width: 100%" />
          </div>
        </b-col>
        <b-col md="9">
          <div class="box">
            <b-row>
              <b-col md="12"
                ><h3 class="mt-0 mb-0">
                  <strong>Komponen Mindfulness Spiritual Islam</strong>
                </h3></b-col
              >
            </b-row>

            <b-row class="mt-3">
              <b-col md="12">
                <b-table-simple small borderless>
                  <b-tbody>
                    <b-tr>
                      <b-td>1.</b-td>
                      <b-td
                        >Kesadaran bahwa Allah Senantiasa Mengawasi
                        (Muqarabah)</b-td
                      >
                    </b-tr>

                    <b-tr>
                      <b-td>&nbsp;</b-td>
                      <b-td
                        >Mindfulness merupakan kondisi kesadaran dari setiap
                        moment secara terus menerus dan meyakini bahwa setiap
                        aktivitas kita diawasi dan diatur Allah (muqorobah),
                        baik itu kebahagiaan, atau kesedihan, sehingga
                        diharapkan manusia selalu berhusnudhon pada Allah atas
                        peristiwa yang terjadi.
                      </b-td>
                    </b-tr>

                    <b-tr>
                      <b-td>2.</b-td>
                      <b-td
                        >Hubungan antara Tuhan dan Manusia dengan cara
                        mendekatkan diri pada Allah (Taqorrub)</b-td
                      >
                    </b-tr>

                    <b-tr>
                      <b-td>&nbsp;</b-td>
                      <b-td
                        >Mindfulness spiritual islam akan lebih mendekatkan
                        manusia pada Allah, karena membuat manusia sadar bahwa
                        manusia diciptakan untuk beribadah dan tidak ada daya
                        upaya tanpa Allah, sehingga manusia akan meningkatkan
                        taqwa sehingga lebih dekat dengan Allah. Hubungan antara
                        manusia dan Allah yang dekat akan diliputi kebahagiaan,
                        rasa syukur, tidak ada pikiran negatif, memiliki
                        hubungan dengan manusia lain dan lingkungan akan
                        terjalin baik.
                      </b-td>
                    </b-tr>

                    <b-tr>
                      <b-td>3.</b-td>
                      <b-td>Healing process</b-td>
                    </b-tr>

                    <b-tr>
                      <b-td>&nbsp;</b-td>
                      <b-td>
                        merupakan proses penyembuhan untuk mengembalikan
                        keseimbangan pikiran dan tubuh. Bentuk penyembuhan dalam
                        mindfulness spiritual islam yaitu berdoa memohon pada
                        Allah disertai dengan ikhtiar yang tidak meninggalkan
                        tawakkal untuk meminta kesembuhan dari Allah SWT.
                      </b-td>
                    </b-tr>
                  </b-tbody>
                </b-table-simple>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>

      <b-row class="mt-5">
        <b-col md="9">
          <div class="box">
            <b-row>
              <b-col md="12"
                ><h3 class="mt-0 mb-0">
                  <strong>Latihan Prosedur Mindfulness Spiritual Islam</strong>
                </h3></b-col
              >

              <b-col md="12" class="mt-3">
                <a href="http://msi.radenmasamino.org/" target="_blank"
                  >Menuju Latihan Prosedur Mindfulness Spiritual Islam</a
                >
              </b-col>
            </b-row>

            <b-row>
              <b-col md="12">
                <hr class="mb-0" />
              </b-col>
            </b-row>

            <b-row class="mt-3">
              <b-col md="12"
                ><h3 class="mt-0 mb-0">
                  <strong>Latihan Mengelola Emosi</strong>
                </h3></b-col
              >
              <b-col md="12" class="mt-3">
                <!-- <iframe
                  src="//docs.google.com/gview?url=https://www.yourwebsite.com/powerpoint.ppt&embedded=true"
                  style="width: 600px; height: 500px"
                  frameborder="0"
                ></iframe> -->
                <iframe
                  width="100%"
                  height="500"
                  src="https://www.youtube.com/embed/lxy6a92DCZQ?autoplay=1&loop=1"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </b-col>
            </b-row>
          </div>
        </b-col>
        <b-col md="3">
          <div class="box-icon1">
            <img src="../assets/006-video-tutorial.png" alt="" />
          </div>
        </b-col>
      </b-row>

      <b-row class="mt-5">
        <b-col md="3">
          <div class="box-icon1">
            <img src="../assets/eva.png" alt="" style="width: 100%" />
          </div>
        </b-col>
        <b-col md="9">
          <div class="box">
            <b-row>
              <b-col md="12"
                ><h3 class="mt-0 mb-0">
                  <strong>E. Evaluasi</strong>
                </h3></b-col
              >
            </b-row>

            <b-row class="mt-3">
              <b-col md="12">
                <p>
                  Kemampuan untuk mengidentifikasi masalah yang dialami oleh
                  peserta.
                </p>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-modal>

    <!-- <b-modal
      id="modal-akun"
      size="sm"
      title="Download Latihan Prosedur Mindfulness "
      hide-footer
    >
      <b-form-group label="Silahkan masukkan password">
        <b-form-input type="password"></b-form-input>
      </b-form-group>

      <b-button variant="primary">Unduh</b-button>
    </b-modal> -->
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
      responden: [],
    };
  },
  sockets: {
    updateJumlahChat() {
      this.updateJumlahChat();
    },
  },
  mounted() {
    axios
      .get(ipBackend + "/users/profil", {
        headers: {
          accessToken: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        // console.log('mounted profile', res);
        // console.log(res.data.respon);
        this.responden = res.data.respon[0];
        this.$socket.emit("join", this.responden.id);
        this.updateJumlahChat();

        // console.log(this.responden.id);
      })
      .catch((err) => {
        console.log("mounted nya", err);
      });

    axios
      .get(ipBackend + "/srq/totalPoint", {
        headers: {
          accessToken: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        this.srqCount = res.data.total;

        // console.log(this.responden.id);
      })
      .catch((err) => {
        console.log("mounted nya", err);
      });
  },
  methods: {
    ClickLogout() {
      alert("terima kasih");
      localStorage.setItem("token", "");
      this.$router.push({ path: "/" });
    },
    updateJumlahChat() {
      axios
        .get(ipBackend + "/chat/countUnread", {
          headers: {
            accessToken: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          // console.log(res.data.jumlahUnread)
          // console.log('mounted profile', res);
          this.chatCount = res.data.jumlahUnread;

          // console.log(this.responden.id);
        })
        .catch((err) => {
          console.log("mounted nya", err);
        });
    },
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

.box-icon1 {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 320px;
}
.box {
  width: 100%;
  /* height: 100px; */
  background-color: bisque;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}
</style>