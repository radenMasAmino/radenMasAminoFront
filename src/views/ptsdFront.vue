<template>
  <div id="ptsdFront">
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
                >Kuisioner PTSD</b-breadcrumb-item
              >
            </b-breadcrumb>
          </b-col>
        </b-row>
        <b-row>
          <b-col xs="12" sm="12" md="12" lg="12">
            <div class="box">
              <b-row>
                <b-col md="12" lg="12">
                  <h2><strong>KUISIONER PTSD</strong></h2>
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
                              >Sama Sekali Tidak Pernah</b-form-select-option
                            >
                            <b-form-select-option value="1"
                              >Sekali - Sekali atau jarang</b-form-select-option
                            >

                            <b-form-select-option value="2.5"
                              >Agak Sering</b-form-select-option
                            >

                            <b-form-select-option value="4"
                              >Sering</b-form-select-option
                            >
                          </b-form-select>
                        </li>
                      </template>
                    </ol>
                  </b-form-group>

                  <!-- Skor Harvard Trauma Questionnaire (HTQ)
                  Tidak memiliki PTSD : 0 - 2,5
                  Memiliki PTSD : 2,5 - 3,00
                  PTSD Berat : 3,01 - 4,00 -->
                  
                  <b-form-group>
                    <div class="keterangan">
                      <table>
                        <tbody>
                          <tr>
                            <td style="width: 150px;">Tidak memiliki PTSD</td>
                            <td style="width: 20px;">:</td>
                            <td style="width: 30px;">0</td>
                            <td style="width: 15px;">-</td>
                            <td style="width: 40px;">2,5</td>
                          </tr>
                          <tr>
                            <td style="width: 90px;">Memiliki PTSD</td>
                            <td style="width: 20px;">:</td>
                            <td style="width: 30px;">2,6</td>
                            <td style="width: 15px;">-</td>
                            <td style="width: 40px;">3,0</td>
                          </tr>
                          <tr>
                            <td style="width: 90px;">PTSD Berat</td>
                            <td style="width: 20px;">:</td>
                            <td style="width: 30px;">3,1</td>
                            <td style="width: 15px;">-</td>
                            <td style="width: 40px;">3,0</td>
                          </tr>
                        </tbody>
                      </table>
                      <table>
                        <tbody>
                          <tr>
                            <td style="width: 100px;">Score Anda</td>
                            <td style="width: 20px;">:</td>
                            <td style="width: 30px;">{{ this.totalPoint }}</td>
                            <td style="width: 150px;">{{ `( ${this.totalStatus} )` }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </b-form-group>
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
  name: "ptsdFront",
  data() {
    return {
      dataPertanyaan: [],
      totalPoint: 0,
      totalStatus: ''
    };
  },
  mounted() {
    Axios.get(ipBackend + "/ptsd/history", {
      headers: {
        accesstoken: localStorage.getItem("token"),
      },
    })

      .then((res) => {
        res.data.respon.forEach((element) => {
          let ob = {
            PTSDId: element.id,
            pertanyaan: element.pertanyaan,
          };
          if (element.poolPTSDs.length > 0) {
            ob.jawaban = element.poolPTSDs[0].jawaban;
            ob.point = element.poolPTSDs[0].point;
          } else {
            ob.jawaban = 0;
            ob.point = 0;
          }
          // let r = ob.point
          // let x = Number(r)
          // let z = 0
          // z.push(x)
          // console.log(z);
          // this.totalPoint += x
          this.dataPertanyaan.push(ob);
          this.updateTotal()
        });
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
      this.dataPertanyaan[i].point = this.dataPertanyaan[i].jawaban;
      this.totalPoint = z
      // this.totalPoint = z / this.dataPertanyaan.length;
    },
    simpanData() {
      let vm = this;
      Axios.post(ipBackend + "/poolPTSD/screening", this.dataPertanyaan, {
        headers: {
          accessToken: localStorage.getItem("token"),
        },
      })
        .then(() => {
          alert("Berhasil");
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
      let array = this.dataPertanyaan
      let z = 0
      console.log(array);
      for (let index = 0; index < array.length; index++) {
        const element = array[index].point;
        // console.log(element);
        z += Number(element);
      }
      console.log(z);
      this.totalPoint = z / array.length
      // this.totalPoint = z
      if(this.totalPoint < 2.6) {
        this.totalStatus = 'Tidak Memiliki PSTD'
      }
      else if(this.totalPoint < 3.1) {
        this.totalStatus = 'Memiliki PTSD'
      }
      else {
        this.totalStatus = 'PTSD Berat'
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
#ptsdFront .bgheader {
  background-color: #2c3e50;
  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  color: #fff;
}
#ptsdFront .bgheader .partone {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 65px;
  flex-direction: column;
}
#ptsdFront .bgheader .parttwo {
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
#ptsdFront .bgheader .parttwo img {
  border-radius: 100%;
}
#ptsdFront .bgheader .parttwo .account {
  display: flex;
  height: 50px;
  align-items: center;
}
#ptsdFront .bgheader .parttwo .accountname {
  display: flex;
  flex-direction: column;
  margin-right: 10px;
}
</style>