<template>
  <div id="kecemasanFront">
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
                      <b-form-select-option value=1
                        >Tidak Pernah</b-form-select-option
                      >
                      <b-form-select-option value=2
                        >Kadang-kadang</b-form-select-option
                      >
                      <b-form-select-option value=3
                        >Sering</b-form-select-option
                      >
                      <b-form-select-option value=4
                        >Selalu</b-form-select-option
                      >
                    </b-form-select>

                    <b-form-select
                      v-model="item.jawaban"
                      @change="updatePoint(index)"
                      v-else
                    >
                      <b-form-select-option value=4
                        >Tidak Pernah</b-form-select-option
                      >
                      <b-form-select-option value=3
                        >Kadang-kadang</b-form-select-option
                      >
                      <b-form-select-option value=2
                        >Sering</b-form-select-option
                      >
                      <b-form-select-option value=1
                        >Selalu</b-form-select-option
                      >
                    </b-form-select>
                  </b-form-group>
                  <b-form-group>
                    <div class="keterangan">
                      <table style="width: 100px;">
                        <tbody>
                          <tr>
                            <td style="width: 90px;">Normal</td>
                            <td style="width: 20px;">:</td>
                            <td style="width: 30px;">20</td>
                            <td style="width: 15px;">-</td>
                            <td style="width: 40px;">44</td>
                          </tr>
                          <tr>
                            <td style="width: 90px;">Ringan</td>
                            <td style="width: 20px;">:</td>
                            <td style="width: 30px;">45</td>
                            <td style="width: 15px;">-</td>
                            <td style="width: 40px;">59</td>
                          </tr>
                          <tr>
                            <td style="width: 90px;">Sedang</td>
                            <td style="width: 20px;">:</td>
                            <td style="width: 30px;">60</td>
                            <td style="width: 15px;">-</td>
                            <td style="width: 40px;">74</td>
                          </tr>
                          <tr>
                            <td style="width: 90px;">Berat</td>
                            <td style="width: 20px;">:</td>
                            <td style="width: 30px;">75</td>
                            <td style="width: 15px;">-</td>
                            <td style="width: 40px;">80</td>
                          </tr>
                        </tbody>
                      </table>
                      <table>
                        <tbody>
                          <tr>
                            <td style="width: 100px;">Score Anda</td>
                            <td style="width: 20px;">:</td>
                            <td style="width: 30px;">{{ this.totalPoint }}</td>
                            <td style="width: 50px;">{{ `( ${this.totalStatus} )` }}</td>
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
  name: "kecemasan",
  data() {
    return {
      dataPertanyaan: [],
      totalPoint: 0,
      totalStatus: ''
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
        // console.log(this.dataPertanyaan);
        // this.totalPoint = this.dataPertanyaan
        this.updateTotal()
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
      // this.updateTotal()
      // console.log(this.dataPertanyaan[i].point);
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
      let array = this.dataPertanyaan
      let z = 0
      console.log(array);
      for (let index = 0; index < array.length; index++) {
        const element = array[index].point;
        // console.log(element);
        z += element;
      }
      console.log(z);
      // this.totalPoint = z / array.length
      this.totalPoint = z
      if(z < 45) {
        this.totalStatus = 'Normal'
      }
      else if(z < 60) {
        this.totalStatus = 'Ringan'
      }
      else if(z < 75) {
        this.totalStatus = 'Sedang'
      }
      else {
        this.totalStatus = 'Berat'
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
</style>