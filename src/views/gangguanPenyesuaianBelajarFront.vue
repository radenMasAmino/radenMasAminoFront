<template>
  <div id="gangguanPenyesuaianBelajarFront">
    <section class="bgheader">
      <b-container>
        <b-row>
          <b-col cols="9" md="8" lg="8" style="background-color: ">
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
            <b-breadcrumb>
              <b-breadcrumb-item>
                <router-link :to="'dashboardFront'">
                  <b-icon
                    icon="house-fill"
                    scale="1.25"
                    shift-v="1.25"
                    aria-hidden="true"
                  ></b-icon>
                  Dashboard
                </router-link>
              </b-breadcrumb-item>
              <b-breadcrumb-item active
                >Kuisioner Efikasi Diri Dalam Belajar</b-breadcrumb-item
              >
            </b-breadcrumb>
          </b-col>
        </b-row>
        <b-row>
          <b-col xs="12" sm="12" md="12" lg="12">
            <div class="box">
              <b-row>
                <b-col md="12" lg="12">
                  <h2><strong>KUISIONER EFIKASI DIRI DALAM BELAJAR</strong></h2>
                  <hr />
                </b-col>
              </b-row>

              <b-row>
                <b-col md="12" lg="12">
                  <b-form-group>
                    <ol id="list-pertanyaan">
                      <template>
                        <li
                          v-for="(item, index) in dataPertanyaan"
                          :key="item.id"
                          style="margin-top: 15px"
                        >
                          {{ item.pertanyaan }}
                          <b-form-select
                            v-model="item.jawaban"
                            @change="updatePoint(index)"
                          >
                            <b-form-select-option value="0"
                              >Sangat Tidak Sesuai</b-form-select-option
                            >
                            <b-form-select-option value="2"
                              >Tidak Sesuai</b-form-select-option
                            >

                            <b-form-select-option value="3"
                              >Cukup Sesuai</b-form-select-option
                            >

                            <b-form-select-option value="4"
                              >Sangat Sesuai</b-form-select-option
                            >
                          </b-form-select>
                        </li>
                      </template>
                    </ol>
                  </b-form-group>
                </b-col>
              </b-row>

              <b-row>
                <b-col md="12" lg="12">
                  <b-alert show variant="primary" style="margin-top: 15px">
                    <b-row>
                      <b-col md="12" lg="12">
                        <h2 v-if="this.totalPoint < 21">
                          <strong
                            >Score Kuisioner Anda Adalah :
                            {{ this.totalPoint }}&nbsp;&nbsp;&nbsp;(Buruk)</strong
                          >
                        </h2>
                        <h2 v-else-if="this.totalPoint < 31">
                          <strong
                            >Score Kuisioner Anda Adalah :
                            {{
                              this.totalPoint
                            }}&nbsp;&nbsp;&nbsp;(Sedang)</strong
                          >
                        </h2>
                        <h2 v-else>
                          <strong
                            >Score Kuisioner Anda Adalah :
                            {{
                              this.totalPoint
                            }}&nbsp;&nbsp;&nbsp;(Baik)</strong
                          >
                        </h2>
                      </b-col>

                      <b-col md="12" lg="12">
                        <hr />
                      </b-col>

                      <b-col md="12" lg="12">
                        <h4><strong>KETERANGAN :</strong></h4>
                      </b-col>

                      <b-col md="12" lg="12">
                        <b-table-simple>
                          <b-tbody>
                            <b-tr>
                              <b-td style="width: 20%">Buruk</b-td>
                              <b-td style="width: 20%">:</b-td>
                              <b-td style="width: 20%">00</b-td>
                              <b-td style="width: 20%">-</b-td>
                              <b-td style="width: 20%">20</b-td>
                            </b-tr>
                            <b-tr>
                              <b-td>Sedang</b-td>
                              <b-td>:</b-td>
                              <b-td>21</b-td>
                              <b-td>-</b-td>
                              <b-td>30</b-td>
                            </b-tr>
                            <b-tr>
                              <b-td>Baik</b-td>
                              <b-td>:</b-td>
                              <b-td>31</b-td>
                              <b-td>-</b-td>
                              <b-td>40</b-td>
                            </b-tr>
                          </b-tbody>
                        </b-table-simple>
                      </b-col>
                    </b-row>
                  </b-alert>
                </b-col>
              </b-row>

              <b-row>
                <b-col md="12" lg="12">
                  <b-alert show variant="warning">
                    <h2>
                      <strong
                        >Meningkatkan Efikasi Diri Dalam Belajar di Era Sosial
                        Distancing COVID - 19</strong
                      >
                    </h2>
                    <hr />
                    <b-embed
                      type="iframe"
                      aspect="16by9"
                      src="https://www.youtube.com/embed/8xj5qgN2Km0"
                      allowfullscreen
                    ></b-embed>
                  </b-alert>
                </b-col>

                <b-col md="12" lg="12">
                  <b-alert show variant="success">
                    <h2>
                      <strong
                        >Booklet Efikasi Diri Dalam Belajar di Era Sosial
                        Distancing COVID - 19</strong
                      >
                    </h2>
                    <hr />
                    <b-button
                      href="http://backend.radenmasamino.org/Booklet efikasi diri dalam belajar.pdf"
                      target="_blank"
                      variant="primary"
                      size="lg"
                      >Download Booklet</b-button
                    >
                  </b-alert>
                </b-col>
              </b-row>
              <b-row>
                <b-col md="12" lg="12">
                  <hr />
                </b-col>
                <b-col md="12" lg="12">
                  <b-button @click="simpanData" variant="primary"
                    >Simpan</b-button
                  >
                </b-col>
              </b-row>
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
import Axios from "axios";
import { ipBackend } from "@/config.js";
export default {
  name: "ggnBelajar",
  data() {
    return {
      dataPertanyaan: [],
      totalPoint: 0,
      totalStatus: "",
    };
  },
  mounted() {
    Axios.get(ipBackend + "/ggnBelajar/history", {
      headers: {
        accesstoken: localStorage.getItem("token"),
      },
    })

      .then((res) => {
        // console.log('biar keliatan klo ini mounted nya jalan');
        res.data.respon.forEach((element) => {
          let ob = {
            ggnBelajarId: element.id,
            pertanyaan: element.pertanyaan,
          };
          if (element.poolGgnBelajars.length > 0) {
            ob.jawaban = element.poolGgnBelajars[0].jawaban;
            ob.point = element.poolGgnBelajars[0].point;
          } else {
            ob.jawaban = 0;
            ob.point = 0;
          }
          this.dataPertanyaan.push(ob);
        });
        this.updateTotal();
      })
      .catch((err) => {
        console.log("ini gagal oi " + err);
      });
  },
  computed: {
    filteredSelect() {
      return this.selection.filter((obj) => {
        return obj.value === this.selection.text;
      });
    },
  },
  methods: {
     ClickLogout() {
      alert("terima kasih");
      localStorage.setItem("token", "");
      this.$router.push({ path: "/" });
    },
    updatePoint(i) {
      let r = this.dataPertanyaan[i].jawaban;
      let x = this.dataPertanyaan[i].point;
      let z = this.totalPoint;
      // console.log(r, x, z);
      z += r - x;
      var m = parseInt(z);
      this.dataPertanyaan[i].point = this.dataPertanyaan[i].jawaban;
      this.totalPoint = m;
      // this.updateTotal()
      // console.log(this.dataPertanyaan[i].point);
    },
    simpanData() {
      let vm = this;
      Axios.post(ipBackend + "/poolGgnBelajar/screening", this.dataPertanyaan, {
        headers: {
          accessToken: localStorage.getItem("token"),
        },
      })
        .then(() => {
          alert("Berhasil");
          vm.$router.push({ path: "/dashboardFront" });
        })
        .catch((err) => {
          console.log("ini error nya");
          console.log(err);
        });
    },
    updateTotal() {
      let array = this.dataPertanyaan;
      let z = 0;
      console.log(array);
      for (let index = 0; index < array.length; index++) {
        const element = array[index].point;
        // console.log(element);
        z += element;
      }
      console.log(z);
      // this.totalPoint = z / array.length
      // this.totalPoint = z;
      // if (z < 21) {
      //   this.totalStatus = "Buruk";
      //   console.log(this.totalStatus);
      // } else if (z < 31) {
      //   this.totalStatus = "Sedang";
      // } else {
      //   this.totalStatus = "Baik";
      // }
    },
  },
};
</script>

<style scoped>
.btn-primary {
  background-color: #2c3e50;
  border-color: #000;
}
#gangguanPenyesuaianBelajarFront .bgheader {
  background-color: #2c3e50;
  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  color: #fff;
}
#gangguanPenyesuaianBelajarFront .bgheader .partone {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 65px;
  flex-direction: column;
}
#gangguanPenyesuaianBelajarFront .bgheader .parttwo {
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
#gangguanPenyesuaianBelajarFront .bgheader .parttwo img {
  border-radius: 100%;
}
#gangguanPenyesuaianBelajarFront .bgheader .parttwo .account {
  display: flex;
  height: 50px;
  align-items: center;
}
#gangguanPenyesuaianBelajarFront .bgheader .parttwo .accountname {
  display: flex;
  flex-direction: column;
  margin-right: 10px;
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

ol {
  padding-left: 20px;
}

li {
  padding-left: 10px;
}
</style>