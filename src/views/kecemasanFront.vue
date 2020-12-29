<template>
  <div id="kecemasanFront">
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
              <b-breadcrumb-item active>Kuisioner Kecemasan</b-breadcrumb-item>
            </b-breadcrumb>
          </b-col>
        </b-row>
        <b-row>
          <b-col xs="12" sm="12" md="12" lg="12">
            <div class="box">
              <b-row>
                <b-col md="12" lg="12">
                  <h2><strong>KUISIONER KECEMASAN</strong></h2>
                  <hr />
                </b-col>
              </b-row>

              <b-row>
                <b-col md="12" lg="12">
                  <b-form-group
                    v-for="(item, index) in dataPertanyaan"
                    :key="item.id"
                    :label="item.pertanyaan"
                  >
                    <b-form-select
                      v-model="item.jawaban"
                      @change="updatePoint(index)"
                      v-if="item.descending"
                    >
                      <b-form-select-option value="1"
                        >Tidak Pernah</b-form-select-option
                      >
                      <b-form-select-option value="2"
                        >Kadang-kadang</b-form-select-option
                      >
                      <b-form-select-option value="3"
                        >Sering</b-form-select-option
                      >
                      <b-form-select-option value="4"
                        >Selalu</b-form-select-option
                      >
                    </b-form-select>

                    <b-form-select
                      v-model="item.jawaban"
                      @change="updatePoint(index)"
                      v-else
                    >
                      <b-form-select-option value="4"
                        >Tidak Pernah</b-form-select-option
                      >
                      <b-form-select-option value="3"
                        >Kadang-kadang</b-form-select-option
                      >
                      <b-form-select-option value="2"
                        >Sering</b-form-select-option
                      >
                      <b-form-select-option value="1"
                        >Selalu</b-form-select-option
                      >
                    </b-form-select>
                  </b-form-group>
                </b-col>
              </b-row>

              <b-row>
                <b-col cols="12" md="12" lg="12">
                  <b-alert show variant="primary" style="margin-top: 15px">
                    <b-row>
                      <b-col md="12" lg="12">
                        <h2 v-if="this.totalPoint < 20">
                          <strong
                            >Score Kuisioner Kecemasan Anda Adalah :
                            {{ this.totalPoint }}&nbsp;&nbsp;&nbsp;</strong
                          >
                        </h2>
                        <h2 v-else-if="this.totalPoint < 45">
                          <strong
                            >Score Kuisioner Kecemasan Anda Adalah :
                            {{
                              this.totalPoint
                            }}&nbsp;&nbsp;&nbsp;(Normal)</strong
                          >
                        </h2>
                        <h2 v-else-if="this.totalPoint < 60">
                          <strong
                            >Score Kuisioner Kecemasan Anda Adalah :
                            {{
                              this.totalPoint
                            }}&nbsp;&nbsp;&nbsp;(Ringan)</strong
                          >
                        </h2>
                        <h2 v-else-if="this.totalPoint < 75">
                          <strong
                            >Score Kuisioner Kecemasan Anda Adalah :
                            {{
                              this.totalPoint
                            }}&nbsp;&nbsp;&nbsp;(Sedang)</strong
                          >
                        </h2>
                        <h2 v-else>
                          <strong
                            >Score Kuisioner Kecemasan Anda Adalah :
                            {{
                              this.totalPoint
                            }}&nbsp;&nbsp;&nbsp;(Berat)</strong
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
                              <b-td style="width: 10%">Normal</b-td>
                              <b-td style="width: 25%">:</b-td>
                              <b-td style="width: 20%">20</b-td>
                              <b-td style="width: 25%">-</b-td>
                              <b-td style="width: 20%">44</b-td>
                            </b-tr>
                            <tr>
                              <b-td>Ringan</b-td>
                              <b-td>:</b-td>
                              <b-td>45</b-td>
                              <b-td>-</b-td>
                              <b-td>59</b-td>
                            </tr>
                            <tr>
                              <b-td>Sedang</b-td>
                              <b-td>:</b-td>
                              <b-td>60</b-td>
                              <b-td>-</b-td>
                              <b-td>74</b-td>
                            </tr>
                            <tr>
                              <b-td>Berat</b-td>
                              <b-td>:</b-td>
                              <b-td>75</b-td>
                              <b-td>-</b-td>
                              <b-td>80</b-td>
                            </tr>
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
                        >Terapi Relaksasi Progresif Untuk Menurunkan
                        Kecemasan</strong
                      >
                    </h2>
                    <hr />
                    <b-embed
                      type="iframe"
                      aspect="16by9"
                      src="https://www.youtube.com/embed/RYe8KPZUzg4"
                      allowfullscreen
                    ></b-embed>
                  </b-alert>
                </b-col>

                <b-col md="12" lg="12">
                  <b-alert show variant="success">
                    <h2>
                      <strong
                        >Booklet ROP (Relaksasi Otot Progresif)
                        Kecemasan</strong
                      >
                    </h2>
                    <hr />
                    <b-button
                      href="http://backend.radenmasamino.org/booklet ROP kecemasan.pdf"
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
  name: "kecemasan",
  data() {
    return {
      dataPertanyaan: [],
      totalPoint: 0,
      totalStatus: null,
    };
  },
  mounted() {
    Axios.get(ipBackend + "/kecemasan/history", {
      headers: {
        accesstoken: localStorage.getItem("token"),
      },
    })

      .then((res) => {
        res.data.respon.forEach((element) => {
          let ob = {
            kecemasanId: element.id,
            pertanyaan: element.pertanyaan,
            descending: element.descending,
          };
          if (element.poolKecemasans.length > 0) {
            ob.jawaban = element.poolKecemasans[0].jawaban;
            ob.point = element.poolKecemasans[0].point;
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
      z += r - x;
      let m = parseInt(z);
      this.dataPertanyaan[i].point = this.dataPertanyaan[i].jawaban;
      this.totalPoint = m;
    },
    simpanData() {
      let vm = this;
      Axios.post(ipBackend + "/poolKecemasan/screening", this.dataPertanyaan, {
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
      // if (z < "45") {
      //   this.totalStatus = "Normal";
      // } else if (z < "60") {
      //   this.totalStatus = "Ringan";
      // } else if (z < 75) {
      //   this.totalStatus = "Sedang";
      // } else {
      //   this.totalStatus = "Berat";
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

#kecemasanFront .bgheader {
  background-color: #2c3e50;
  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  color: #fff;
}

#kecemasanFront .bgheader .partone {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 65px;
  flex-direction: column;
}

#kecemasanFront .bgheader .parttwo {
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
#kecemasanFront .bgheader .parttwo img {
  border-radius: 100%;
}
#kecemasanFront .bgheader .parttwo .account {
  display: flex;
  height: 50px;
  align-items: center;
}
#kecemasanFront .bgheader .parttwo .accountname {
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
</style>