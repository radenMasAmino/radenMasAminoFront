<template>
  <div id="screeninguser">
    <myheader></myheader>
    <b-container>
      <b-row>
        <b-col md="12" style="margin-top: 60px; margin-bottom: 60px">
          <div class="box">
            <b-row>
              <b-col md="12">
                <h3 class="text-center m-t-0 m-b-0">
                  <strong>SCREENING USER</strong>
                </h3>
              </b-col>
            </b-row>

            <b-row class="m-t-15">
              <b-col md="12">
                <b-breadcrumb>
                  <b-breadcrumb-item>
                    <router-link :to="'dashboard'">
                      <b-icon
                        icon="house-fill"
                        scale="1.25"
                        shift-v="1.25"
                        aria-hidden="true"
                      ></b-icon>
                      Dashboard
                    </router-link>
                  </b-breadcrumb-item>

                  <b-breadcrumb-item>
                    <router-link :to="'user'"> Data User </router-link>
                  </b-breadcrumb-item>
                  <b-breadcrumb-item active>Screening User</b-breadcrumb-item>
                </b-breadcrumb>
              </b-col>
            </b-row>

            <b-row class="m-t-15">
              <b-col md="12">
                <b-alert show variant="primary">
                  <div v-if="items.length > 0" style="width: 100%; display: table">

                    <div style="display: table-row">
                      <div style="display: table-cell; width: 15%">
                        <h5>Id</h5>
                      </div>
                      <div style="display: table-cell; width: 2.5%">
                        <h5>:</h5>
                      </div>
                      <div style="display: table-cell">
                        <h5>{{ items[0].id }}</h5>
                      </div>
                    </div>

                    <div style="display: table-row">
                      <div style="display: table-cell; width: 15%">
                        <h5>Username</h5>
                      </div>
                      <div style="display: table-cell; width: 2.5%">
                        <h5>:</h5>
                      </div>
                      <div style="display: table-cell">
                        <h5>{{ items[0].username }}</h5>
                      </div>
                    </div>

                    <div style="display: table-row">
                      <div style="display: table-cell; width: 15%">
                        <h5>Nama</h5>
                      </div>
                      <div style="display: table-cell; width: 2.5%">
                        <h5>:</h5>
                      </div>
                      <div style="display: table-cell">
                        <h5>{{ items[0].nama }}</h5>
                      </div>
                    </div>

                    <div style="display: table-row">
                      <div style="display: table-cell; width: 15%">
                        <h5>Alamat</h5>
                      </div>
                      <div style="display: table-cell; width: 2.5%">
                        <h5>:</h5>
                      </div>
                      <div style="display: table-cell">
                        <h5>{{ items[0].alamat }}</h5>
                      </div>
                    </div>
                  </div>
                </b-alert>
              </b-col>
            </b-row>

            <b-row class="m-t-15">
              <b-col md="12">
                <div class="accordion" role="tablist">
                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                      <b-button
                        block
                        v-b-toggle.accordion-1
                        variant="primary"
                        style="
                          text-align: left;
                          text-transform: uppercase;
                          font-weight: bold;
                        "
                        >SELF REPORTING QUESTIONNAIRE (SRQ)</b-button
                      >
                    </b-card-header>
                    <b-collapse
                      id="accordion-1"
                      accordion="my-accordion"
                      role="tabpanel"
                    >
                      <b-card-body>
                        <b-form-group>
                          <ol id="list-pertanyaan">
                            <template>
                              <li
                                v-for="(item, index) in srqRes"
                                :key="item.id"
                                style="margin-top: 10px"
                              >
                                {{ item.pertanyaan }}
                                <b-form-select
                                  v-model="item.jawaban"
                                  @change="updatePoint(index)"
                                >
                                  <b-form-select-option value="0"
                                    >Tidak</b-form-select-option
                                  >
                                  <b-form-select-option value="1"
                                    >Ya</b-form-select-option
                                  >
                                </b-form-select>
                              </li>
                            </template>
                          </ol>
                        </b-form-group>
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                      <b-button
                        block
                        v-b-toggle.accordion-2
                        variant="primary"
                        style="
                          text-align: left;
                          text-transform: uppercase;
                          font-weight: bold;
                        "
                        >KECEMASAN</b-button
                      >
                    </b-card-header>
                    <b-collapse
                      id="accordion-2"
                      accordion="my-accordion"
                      role="tabpanel"
                    >
                      <b-card-body>
                        <b-form-group
                          v-for="(item, index) in kecemasanRes"
                          :key="item.id"
                          :label="item.pertanyaan"
                        >
                          <b-form-select
                            v-model="item.jawaban"
                            @change="updateKecemasan(index)"
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
                            @change="updateKecemasan(index)"
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
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                      <b-button
                        block
                        v-b-toggle.accordion-3
                        variant="primary"
                        style="
                          text-align: left;
                          text-transform: uppercase;
                          font-weight: bold;
                        "
                        >DEPRESI</b-button
                      >
                    </b-card-header>
                    <b-collapse
                      id="accordion-3"
                      accordion="my-accordion"
                      role="tabpanel"
                    >
                      <b-card-body>
                        <ol id="list-pertanyaan">
                          <template>
                            <li
                              v-for="(item, index) in depresiRes"
                              :key="item.id"
                            >
                              <b-form-select
                                v-model="item.jawaban"
                                @change="updateDepresi(index)"
                              >
                                <b-form-select-option
                                  v-for="(itemm, indexx) in item.isi"
                                  :key="indexx"
                                  :value="itemm.score"
                                  >{{ itemm.pertanyaan }}</b-form-select-option
                                >
                              </b-form-select>
                            </li>
                          </template>
                        </ol>
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                      <b-button
                        block
                        v-b-toggle.accordion-4
                        variant="primary"
                        style="
                          text-align: left;
                          text-transform: uppercase;
                          font-weight: bold;
                        "
                        >REGULASI EMOSI</b-button
                      >
                    </b-card-header>
                    <b-collapse
                      id="accordion-4"
                      accordion="my-accordion"
                      role="tabpanel"
                    >
                      <b-card-body>
                        <li v-for="(item, index) in emosiRes" :key="item.id">
                          {{ item.pertanyaan }}
                          <b-form-select
                            v-model="item.jawaban"
                            @change="updateEmosi(index)"
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
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                      <b-button
                        block
                        v-b-toggle.accordion-5
                        variant="primary"
                        style="
                          text-align: left;
                          text-transform: uppercase;
                          font-weight: bold;
                        "
                        >POST TRAUMATIC STRESS DISORDER (PTSD)</b-button
                      >
                    </b-card-header>
                    <b-collapse
                      id="accordion-5"
                      accordion="my-accordion"
                      role="tabpanel"
                    >
                      <b-card-body>
                        <b-form-group>
                          <ol id="list-pertanyaan">
                            <template>
                              <li
                                v-for="(item, index) in ptsdRes"
                                :key="item.id"
                              >
                                {{ item.pertanyaan }}
                                <b-form-select
                                  v-model="item.jawaban"
                                  @change="updatePTSD(index)"
                                >
                                  <b-form-select-option value="0"
                                    >Sama Sekali Tidak
                                    Pernah</b-form-select-option
                                  >
                                  <b-form-select-option value="1"
                                    >Sekali - Sekali atau
                                    jarang</b-form-select-option
                                  >

                                  <b-form-select-option value="2"
                                    >Agak Sering</b-form-select-option
                                  >

                                  <b-form-select-option value="2.5"
                                    >Sering</b-form-select-option
                                  >
                                </b-form-select>
                              </li>
                            </template>
                          </ol>
                        </b-form-group>
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                      <b-button
                        block
                        v-b-toggle.accordion-6
                        variant="primary"
                        style="
                          text-align: left;
                          text-transform: uppercase;
                          font-weight: bold;
                        "
                        >EFIKASI DIRI DALAM BELAJAR</b-button
                      >
                    </b-card-header>
                    <b-collapse
                      id="accordion-6"
                      accordion="my-accordion"
                      role="tabpanel"
                      ><b-card-body>
                        <ol>
                          <li
                            v-for="(item, index) in belajarRes"
                            :key="item.id"
                          >
                            {{ item.pertanyaan }}
                            <b-form-select
                              v-model="item.jawaban"
                              @change="updateBelajar(index)"
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
                        </ol>
                      </b-card-body>
                    </b-collapse>
                  </b-card>
                </div>
              </b-col>

              <b-col md="12" lg="12" style="margin-top: 30px">
                <b-button size="md" variant="primary" @click="simpanData"
                  >Simpan</b-button
                >
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios';
import myheader from "../../components/header";
import { ipBackend } from "@/config.js";

export default {
  name: "screeninguser",
  components: {
    myheader,
  },
  data() {
    return {
      idUser: "",
      items: [],
      srqRes: [],
      ptsdRes: [],
      belajarRes: [],
      emosiRes: [],
      kecemasanRes: [],
      depresiRes: [],
      idEmosi: [],
      idBelajar: [],
      idPTSD: [],
      idKecemasan: [],
      idDepresi: [],
    };
  },
  mounted() {
    this.idUser = this.$route.query.idx;
    axios
      .get(ipBackend + "/users/profilByAdmin/" + this.idUser, {
        headers: {
          accessToken: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        this.items = res.data.respon;
        // console.log(this.items);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(ipBackend + "/srq/historyAdmin/" + this.idUser, {
        headers: {
          accessToken: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        // console.log('biar keliatan klo ini mounted nya jalan');
        res.data.respon.forEach((element) => {
          let ob = {
            SRQId: element.id,
            pertanyaan: element.pertanyaan,
          };
          if (element.poolSRQs.length > 0) {
            ob.jawaban = element.poolSRQs[0].jawaban;
            ob.point = element.poolSRQs[0].point;
          } else {
            ob.jawaban = 0;
            ob.point = 0;
          }
          this.srqRes.push(ob);
        });
      })
      .catch((err) => {
        console.log("ini gagal oi " + err);
      });

    axios
      .get(ipBackend + "/ptsd/historyAdmin/" + this.idUser, {
        headers: {
          accessToken: localStorage.getItem("token"),
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
            ob.id = element.poolPTSDs[0].id;
          } else {
            ob.jawaban = 0;
            ob.point = 0;
          }
          this.ptsdRes.push(ob);
        });
      })
      .catch((err) => {
        console.log("ini gagal oi " + err);
      });

    axios
      .get(ipBackend + "/kecemasan/historyAdmin/" + this.idUser, {
        headers: {
          accessToken: localStorage.getItem("token"),
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
            ob.id = element.poolKecemasans[0].id;
          } else {
            ob.jawaban = 0;
            ob.point = 0;
          }
          this.kecemasanRes.push(ob);
        });
      })
      .catch((err) => {
        console.log("ini gagal oi " + err);
      });

    axios
      .get(ipBackend + "/depresi/historyAdmin/" + this.idUser, {
        headers: {
          accessToken: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        // console.log('biar keliatan klo ini mounted nya jalan');
        let p = [];
        let no = 0;
        res.data.respon.forEach((element) => {
          if (no == 0) {
            no = element.nomor;
          }
          if (no != element.nomor) {
            let data = {
              nomor: element.nomor,
              depresiId: element.id,
              isi: p,
            };
            if (element.poolDepresis.length > 0) {
              data.jawaban = element.poolDepresis[0].jawaban;
              data.point = element.poolDepresis[0].point;
              data.id = element.poolDepresis[0].id;
            } else {
              data.jawaban = 0;
              data.point = 0;
            }
            this.depresiRes.push(data);
            no = element.nomor;
            p = [];
          }
          let obj = {
            depresiId: element.id,
            pertanyaan: element.pertanyaan,
            score: element.score,
          };

          p.push(obj);
        });
        // console.log(this.depresiRes);
      })
      .catch((err) => {
        console.log("ini gagal oi " + err);
      });

    axios
      .get(ipBackend + "/ggnBelajar/historyAdmin/" + this.idUser, {
        headers: {
          accessToken: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        res.data.respon.forEach((element) => {
          let ob = {
            ggnBelajarId: element.id,
            pertanyaan: element.pertanyaan,
          };
          if (element.poolGgnBelajars.length > 0) {
            ob.jawaban = element.poolGgnBelajars[0].jawaban;
            ob.point = element.poolGgnBelajars[0].point;
            ob.id = element.poolGgnBelajars[0].id;
          } else {
            ob.jawaban = 0;
            ob.point = 0;
          }
          this.belajarRes.push(ob);
        });
        console.log();
      })
      .catch((err) => {
        console.log(err, "ini error jawaban");
      });

    axios
      .get(ipBackend + "/ggnControlEmosi/historyAdmin/" + this.idUser, {
        headers: {
          accessToken: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        // console.log('biar keliatan klo ini mounted nya jalan', res);
        res.data.respon.forEach((element) => {
          let ob = {
            ggnControlEmosiId: element.id,
            pertanyaan: element.pertanyaan,
          };
          if (element.poolGgnControlEmosis.length > 0) {
            ob.jawaban = element.poolGgnControlEmosis[0].jawaban;
            ob.point = element.poolGgnControlEmosis[0].point;
            ob.id = element.poolGgnControlEmosis[0].id;
          } else {
            ob.jawaban = 0;
            ob.point = 0;
          }
          this.emosiRes.push(ob);
          // console.log(this.belajarRes, "ini jawaban belajar");
        });
        console.log();
      })
      .catch((err) => {
        console.log(err, "ini error jawaban");
      });
  },

  methods: {
    updateEmosi(i) {
      this.emosiRes[i].point = this.emosiRes[i].jawaban;
      this.idEmosi = this.emosiRes[i].id;

      axios
        .post(
          ipBackend + "/poolGgnControlEmosi/update/" + this.idEmosi,
          {
            jawaban: this.emosiRes[i].jawaban,
            point: this.emosiRes[i].point,
          },
          {
            headers: {
              accessToken: localStorage.getItem("token"),
            },
          }
        )
        .then(() => {
          // console.log(res);
          // alert("Berhasil Mengisi SRQ");
        })
        .catch((err) => {
          console.log("ini error nya");
          console.log(err);
        });
    },

    updateBelajar(i) {
      this.belajarRes[i].point = this.belajarRes[i].jawaban;
      this.idBelajar = this.belajarRes[i].id;

      axios
        .post(
          ipBackend + "/poolGgnBelajar/update/" + this.idBelajar,
          {
            jawaban: this.belajarRes[i].jawaban,
            point: this.belajarRes[i].point,
          },
          {
            headers: {
              accessToken: localStorage.getItem("token"),
            },
          }
        )
        .then(() => {
          // console.log(res);
          // alert("Berhasil Mengisi SRQ");
        })
        .catch((err) => {
          console.log("ini error nya");
          console.log(err);
        });
    },

    updatePTSD(i) {
      this.ptsdRes[i].point = this.ptsdRes[i].jawaban;
      this.idPTSD = this.ptsdRes[i].id;
      // console.log(this.ptsdRes[i].id);s

      axios
        .post(
          ipBackend + "/poolPTSD/update/" + this.idPTSD,
          {
            jawaban: this.ptsdRes[i].jawaban,
            point: this.ptsdRes[i].point,
          },
          {
            headers: {
              accessToken: localStorage.getItem("token"),
            },
          }
        )
        .then(() => {
          // console.log(res);
          // alert("Berhasil Mengisi SRQ");
        })
        .catch((err) => {
          console.log("ini error nya");
          console.log(err);
        });
    },

    updateKecemasan(i) {
      this.kecemasanRes[i].point = this.kecemasanRes[i].jawaban;
      this.idKecemasan = this.kecemasanRes[i].id;
      // console.log(this.kecemasanRes[i]);

      axios
        .post(
          ipBackend + "/poolKecemasan/update/" + this.idKecemasan,
          {
            jawaban: this.kecemasanRes[i].jawaban,
            point: this.kecemasanRes[i].point,
          },
          {
            headers: {
              accessToken: localStorage.getItem("token"),
            },
          }
        )
        .then(() => {
          // console.log(res);
          // alert("Berhasil Mengisi SRQ");
        })
        .catch((err) => {
          console.log("ini error nya");
          console.log(err);
        });
    },

    updateDepresi(i) {
      this.depresiRes[i].point = this.depresiRes[i].jawaban;
      this.idDepresi[i] = this.depresiRes[i].id;
      axios
        .post(
          ipBackend + "/poolDepresi/update/" + this.idDepresi,
          {
            jawaban: this.depresiRes[i].jawaban,
            point: this.depresiRes[i].point,
          },
          {
            headers: {
              accessToken: localStorage.getItem("token"),
            },
          }
        )
        .then(() => {
          // console.log(res);
          // alert("Berhasil Mengisi SRQ");
        })
        .catch((err) => {
          console.log("ini error nya");
          console.log(err);
        });
    },

    simpanData() {
      alert("Berhasil");
      this.$router.push({ path: "/dashboard" });
    },
  },
};
</script>
<style scoped>
</style>