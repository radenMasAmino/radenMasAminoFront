<template>
  <div id="gangguanEmosiFront">
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
                >Kuisioner Regulasi Emosi</b-breadcrumb-item
              >
            </b-breadcrumb>
          </b-col>
        </b-row>
        <b-row>
          <b-col xs="12" sm="12" md="12" lg="12">
            <div class="box">
              <b-row>
                <b-col md="12" lg="12">
                  <h2><strong>KUISIONER REGULASI EMOSI</strong></h2>
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
                        >
                          {{ item.pertanyaan }}
                          <b-form-select
                            v-model="item.jawaban"
                            @change="updatePoint(index)"
                          >
                            <b-form-select-option value="0"
                              >Tidak Pernah</b-form-select-option
                            >
                            <b-form-select-option value="2"
                              >Jarang</b-form-select-option
                            >

                            <b-form-select-option value="3"
                              >Sering</b-form-select-option
                            >

                            <b-form-select-option value="4"
                              >Selalu</b-form-select-option
                            >
                          </b-form-select>
                        </li>
                      </template>
                    </ol>
                  </b-form-group>
                  <b-form-group>
                    <div class="keterangan">
                      <table style="width: 400px">
                        <tbody>
                          <tr>
                            <td style="width: 400x">Buruk</td>
                            <td style="width: 20px">:</td>
                            <td style="width: 30px">00</td>
                            <td style="width: 15px">-</td>
                            <td style="width: 1000px">20</td>
                          </tr>
                          <tr>
                            <td style="width: 90px">Sedang</td>
                            <td style="width: 20px">:</td>
                            <td style="width: 30px">21</td>
                            <td style="width: 15px">-</td>
                            <td style="width: 40px">30</td>
                          </tr>
                          <tr>
                            <td style="width: 90px">Baik</td>
                            <td style="width: 20px">:</td>
                            <td style="width: 30px">31</td>
                            <td style="width: 15px">-</td>
                            <td style="width: 40px">40</td>
                          </tr>
                        </tbody>
                      </table>
                      <table>
                        <tbody>
                          <tr>
                            <td style="width: 150px">Score Anda</td>
                            <td style="width: 20px">:</td>
                            <td style="width: 30px">{{ this.totalPoint }}</td>
                            <td style="width: 1000px">
                              {{ `( ${this.totalStatus} )` }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </b-form-group>
                  <div>
                    <b-embed
                      type="iframe"
                      aspect="16by9"
                      src="https://www.youtube.com/embed/1e33Y71VPb4"
                      allowfullscreen
                    ></b-embed>
                  </div>
                  <div>
                    <a
                      href="http://backend.radenmasamino.org/booklet kontrol  emosi.pdf"
                      target="_blank"
                      ><h3>Download booklet</h3></a
                    >
                  </div>
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
  name: "ggnEmosi",
  data() {
    return {
      dataPertanyaan: [],
      totalPoint: 0,
      totalStatus: "",
    };
  },
  mounted() {
    Axios.get(ipBackend + "/ggnControlEmosi/history", {
      headers: {
        accesstoken: localStorage.getItem("token"),
      },
    })

      .then((res) => {
        // console.log('biar keliatan klo ini mounted nya jalan');
        res.data.respon.forEach((element) => {
          let ob = {
            ggnControlEmosiId: element.id,
            pertanyaan: element.pertanyaan,
          };
          if (element.poolGgnControlEmosis.length > 0) {
            ob.jawaban = element.poolGgnControlEmosis[0].jawaban;
            ob.point = element.poolGgnControlEmosis[0].point;
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
      // console.log(vm);
      Axios.post(
        ipBackend + "/poolGgnControlEmosi/screening",
        this.dataPertanyaan,
        {
          headers: {
            accessToken: localStorage.getItem("token"),
          },
        }
      )
        .then(() => {
          alert("Berhasil Mengisi Jawaban");
          // console.log('ini simpan nya');
          // console.log(res, '<<<<< ini');
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
      this.totalPoint = z;
      if (z < 21) {
        this.totalStatus = "Kontrol Emosi Buruk";
      } else if (z < 31) {
        this.totalStatus = "Kontrol Emosi Sedang";
      } else {
        this.totalStatus = "Kontrol Emosi Baik";
      }
    },
  },
};
</script>

<style scoped>
.btn-primary {
  background-color: #2c3e50;
  border-color: #000;
}
#gangguanEmosiFront .bgheader {
  background-color: #2c3e50;
  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  color: #fff;
}
#gangguanEmosiFront .bgheader .partone {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 65px;
  flex-direction: column;
}
#gangguanEmosiFront .bgheader .parttwo {
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
#gangguanEmosiFront .bgheader .parttwo img {
  border-radius: 100%;
}
#gangguanEmosiFront .bgheader .parttwo .account {
  display: flex;
  height: 50px;
  align-items: center;
}
#gangguanEmosiFront .bgheader .parttwo .accountname {
  display: flex;
  flex-direction: column;
  margin-right: 10px;
}
</style>