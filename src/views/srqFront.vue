<template>
  <div id="daftarFront">
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
          <b-col xs="12" sm="12" md="12" lg="12">
            <div class="box">
              <b-row>
                <b-col md="12" lg="12">
                  <h2><strong>SELF REPORTING QUESTIONNAIRE (SRQ)</strong></h2>
                  <hr />
                </b-col>
              </b-row>

              <b-row>
                <b-col md="12" lg="12">
                  <!-- <b-form-group>
                    <ol>
                      <li v-for="item in item" :key="item.pertanyaan">
                        {{ item.pertanyaan }}
                        <br>
                        <b-form-select v-model="selection.selected">
                          <b-form-select-option value="0"
                            >Tidak</b-form-select-option
                          >
                          <b-form-select-option value="1"
                            >Ya</b-form-select-option
                          >
                        </b-form-select>
                      </li>
                    </ol>
                  </b-form-group> -->

                  <b-form-group>
                    <span>{{ items }}</span>
                    <b-form-select v-model="selection.selected" :options="pilihan">
                      <!-- <b-form-select-option value="0"
                        >Tidak</b-form-select-option
                      >
                      <b-form-select-option value="1">Ya</b-form-select-option> -->
                    </b-form-select>
                  </b-form-group>
<!-- 
                  <b-form-group>
                    <span>{{ items2 }}</span>
                    <b-form-select v-model="selection.selected2">
                      <b-form-select-option value="0"
                        >Tidak</b-form-select-option
                      >
                      <b-form-select-option value="1">Ya</b-form-select-option>
                    </b-form-select>
                  </b-form-group>

                  <b-form-group>
                    <span>{{ items3 }}</span>
                    <b-form-select v-model="selection.selected3">
                      <b-form-select-option value="0"
                        >Tidak</b-form-select-option
                      >
                      <b-form-select-option value="1">Ya</b-form-select-option>
                    </b-form-select>
                  </b-form-group>

                  <b-form-group>
                    <span>{{ items4 }}</span>
                    <b-form-select v-model="selection.selected4">
                      <b-form-select-option value="0"
                        >Tidak</b-form-select-option
                      >
                      <b-form-select-option value="1">Ya</b-form-select-option>
                    </b-form-select>
                  </b-form-group>

                  <b-form-group>
                    <span>{{ items5 }}</span>
                    <b-form-select v-model="selection.selected5">
                      <b-form-select-option value="0"
                        >Tidak</b-form-select-option
                      >
                      <b-form-select-option value="1">Ya</b-form-select-option>
                    </b-form-select>
                  </b-form-group>

                  <b-form-group>
                    <span>{{ items6 }}</span>
                    <b-form-select v-model="selection.selected6">
                      <b-form-select-option value="0"
                        >Tidak</b-form-select-option
                      >
                      <b-form-select-option value="1">Ya</b-form-select-option>
                    </b-form-select>
                  </b-form-group>

                  <b-form-group>
                    <span>{{ items7 }}</span>
                    <b-form-select v-model="selection.selected7">
                      <b-form-select-option value="0"
                        >Tidak</b-form-select-option
                      >
                      <b-form-select-option value="1">Ya</b-form-select-option>
                    </b-form-select>
                  </b-form-group>

                  <b-form-group>
                    <span>{{ items8 }}</span>
                    <b-form-select v-model="selection.selected8">
                      <b-form-select-option value="0"
                        >Tidak</b-form-select-option
                      >
                      <b-form-select-option value="1">Ya</b-form-select-option>
                    </b-form-select>
                  </b-form-group>

                  <b-form-group>
                    <span>{{ items9 }}</span>
                    <b-form-select v-model="selection.selected9">
                      <b-form-select-option value="0"
                        >Tidak</b-form-select-option
                      >
                      <b-form-select-option value="1">Ya</b-form-select-option>
                    </b-form-select>
                  </b-form-group>

                  <b-form-group>
                    <span>{{ items10 }}</span>
                    <b-form-select v-model="selection.selected10">
                      <b-form-select-option value="0"
                        >Tidak</b-form-select-option
                      >
                      <b-form-select-option value="1">Ya</b-form-select-option>
                    </b-form-select>
                  </b-form-group>

                  <b-form-group>
                    <span>{{ items11 }}</span>
                    <b-form-select v-model="selection.selected11">
                      <b-form-select-option value="0"
                        >Tidak</b-form-select-option
                      >
                      <b-form-select-option value="1">Ya</b-form-select-option>
                    </b-form-select>
                  </b-form-group>

                  <b-form-group>
                    <span>{{ items12 }}</span>
                    <b-form-select v-model="selection.selected12">
                      <b-form-select-option value="0" v-model="answer.no12"
                        >Tidak</b-form-select-option
                      >
                      <b-form-select-option value="1" v-model="answer.yes12"
                        >Ya</b-form-select-option
                      >
                    </b-form-select>
                  </b-form-group>

                  <b-form-group>
                    <span>{{ items13 }}</span>
                    <b-form-select v-model="selection.selected13">
                      <b-form-select-option value="0" v-model="answer.no13"
                        >Tidak</b-form-select-option
                      >
                      <b-form-select-option value="1" v-model="answer.yes13"
                        >Ya</b-form-select-option
                      >
                    </b-form-select>
                  </b-form-group>

                  <b-form-group>
                    <span>{{ items14 }}</span>
                    <b-form-select v-model="selection.selected14">
                      <b-form-select-option value="0" v-model="answer.no14"
                        >Tidak</b-form-select-option
                      >
                      <b-form-select-option value="1" v-model="answer.yes14"
                        >Ya</b-form-select-option
                      >
                    </b-form-select>
                  </b-form-group>

                  <b-form-group>
                    <span>{{ items15 }}</span>
                    <b-form-select v-model="selection.selected15">
                      <b-form-select-option value="0" v-model="answer.no15"
                        >Tidak</b-form-select-option
                      >
                      <b-form-select-option value="1" v-model="answer.yes15"
                        >Ya</b-form-select-option
                      >
                    </b-form-select>
                  </b-form-group>

                  <b-form-group>
                    <span>{{ items16 }}</span>
                    <b-form-select v-model="selection.selected16">
                      <b-form-select-option value="0" v-model="answer.no16"
                        >Tidak</b-form-select-option
                      >
                      <b-form-select-option value="1" v-model="answer.yes16"
                        >Ya</b-form-select-option
                      >
                    </b-form-select>
                  </b-form-group>

                  <b-form-group>
                    <span>{{ items17 }}</span>
                    <b-form-select v-model="selection.selected17">
                      <b-form-select-option value="0" v-model="answer.no17"
                        >Tidak</b-form-select-option
                      >
                      <b-form-select-option value="1" v-model="answer.yes17"
                        >Ya</b-form-select-option
                      >
                    </b-form-select>
                  </b-form-group>

                  <b-form-group>
                    <span>{{ items18 }}</span>
                    <b-form-select v-model="selection.selected18">
                      <b-form-select-option value="0" v-model="answer.no18"
                        >Tidak</b-form-select-option
                      >
                      <b-form-select-option value="1" v-model="answer.yes18"
                        >Ya</b-form-select-option
                      >
                    </b-form-select>
                  </b-form-group>

                  <b-form-group>
                    <span>{{ items19 }}</span>
                    <b-form-select v-model="selection.selected19">
                      <b-form-select-option value="0" v-model="answer.no19"
                        >Tidak</b-form-select-option
                      >
                      <b-form-select-option value="1" v-model="answer.yes19"
                        >Ya</b-form-select-option
                      >
                    </b-form-select>
                  </b-form-group>

                  <b-form-group>
                    <span>{{ items20 }}</span>
                    <b-form-select v-model="selection.selected20">
                      <b-form-select-option value="0" v-model="answer.no19"
                        >Tidak</b-form-select-option
                      >
                      <b-form-select-option value="1" v-model="answer.yes19"
                        >Ya</b-form-select-option
                      >
                    </b-form-select>
                  </b-form-group> -->
                  <b-button variant="primary" @click="simpan">Simpan</b-button>
                  <router-link :to="'dashboardFront'"> </router-link>
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
import { ipBackend } from "@/config.js";
import axios from "axios";

export default {
  name: "daftarFront",

  data() {
    return {
      pilihan:[
        {value: '1', text:'Ya'},
        {value: '0', text:'Tidak'},
      ],

      items: "",
      // items2: "",
      // items3: "",
      // items4: "",
      // items5: "",
      // items6: "",
      // items7: "",
      // items8: "",
      // items9: "",
      // items10: "",
      // items11: "",
      // items12: "",
      // items13: "",
      // items14: "",
      // items15: "",
      // items16: "",
      // items17: "",
      // items18: "",
      // items19: "",
      // items20: "",

      selection: {
        selected: "",
        // selected2: "",
        // selected3: "",
        // selected4: "",
        // selected5: "",
        // selected6: "",
        // selected7: "",
        // selected8: "",
        // selected9: "",
        // selected10: "",
        // selected11: "",
        // selected12: "",
        // selected13: "",
        // selected14: "",
        // selected15: "",
        // selected16: "",
        // selected17: "",
        // selected18: "",
        // selected19: "",
        // selected20: "",
      },

      qsId: {
        id: "",
        // id2: "",
        // id3: "",
        // id4: "",
        // id5: "",
        // id6: "",
        // id7: "",
        // id8: "",
        // id9: "",
        // id10: "",
        // id11: "",
        // id12: "",
        // id13: "",
        // id14: "",
        // id15: "",
        // id16: "",
        // id17: "",
        // id18: "",
        // id19: "",
        // id20: "",
      },

      // answer: {
      //   no: "",
      //   yes: "",
      //   no2: "",
      //   yes2: "",
      //   no3: "",
      //   yes3: "",
      //   no4: "",
      //   yes4: "",
      //   no5: "",
      //   yes5: "",
      //   no6: "",
      //   yes6: "",
      //   no7: "",
      //   yes7: "",
      //   no8: "",
      //   yes8: "",
      //   no9: "",
      //   yes9: "",
      //   no10: "",
      //   yes10: "",
      //   no11: "",
      //   yes11: "",
      //   no12: "",
      //   yes12: "",
      //   no13: "",
      //   yes13: "",
      //   no14: "",
      //   yes14: "",
      //   no15: "",
      //   yes15: "",
      //   no16: "",
      //   yes16: "",
      //   no17: "",
      //   yes17: "",
      //   no18: "",
      //   yes18: "",
      //   no19: "",
      //   yes19: "",
      //   no20: "",
      //   yes20: "",
      // },
    };
    // console.log(items);
  },

  // computed(selected){
  //   let total = 0
  //   function sum(num) {
  //       for (let i = 0; i < selected.length; i++) {
  //     if(i==1){
  //       total = total+num[1]
  //     }
  //   }
  //   return num
  //   let jadi = num
  //   }
  //   console.log(sum);
  // },

  mounted() {
    axios
      .get(ipBackend + "/srq/all", {
        headers: {
          accessToken: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        this.items = res.data.respon[0].pertanyaan;
        // this.items2 = res.data.respon[1].pertanyaan;
        // this.items3 = res.data.respon[2].pertanyaan;
        // this.items4 = res.data.respon[3].pertanyaan;
        // this.items5 = res.data.respon[4].pertanyaan;
        // this.items6 = res.data.respon[5].pertanyaan;
        // this.items7 = res.data.respon[6].pertanyaan;
        // this.items8 = res.data.respon[7].pertanyaan;
        // this.items9 = res.data.respon[8].pertanyaan;
        // this.items10 = res.data.respon[9].pertanyaan;
        // this.items11 = res.data.respon[10].pertanyaan;
        // this.items12 = res.data.respon[11].pertanyaan;
        // this.items13 = res.data.respon[12].pertanyaan;
        // this.items14 = res.data.respon[13].pertanyaan;
        // this.items15 = res.data.respon[14].pertanyaan;
        // this.items16 = res.data.respon[15].pertanyaan;
        // this.items17 = res.data.respon[16].pertanyaan;
        // this.items18 = res.data.respon[17].pertanyaan;
        // this.items19 = res.data.respon[18].pertanyaan;
        // this.items20 = res.data.respon[19].pertanyaan;

        this.id = res.data.respon[0].id;
        // this.id2 = res.data.respon[1].id;
        // this.id3 = res.data.respon[2].id;
        // this.id4 = res.data.respon[3].id;
        // this.id5 = res.data.respon[4].id;
        // this.id6 = res.data.respon[5].id;
        // this.id7 = res.data.respon[6].id;
        // this.id8 = res.data.respon[7].id;
        // this.id9 = res.data.respon[8].id;
        // this.id10 = res.data.respon[9].id;
        // this.id11 = res.data.respon[10].id;
        // this.id12 = res.data.respon[11].id;
        // this.id13 = res.data.respon[12].id;
        // this.id14 = res.data.respon[13].id;
        // this.id15 = res.data.respon[14].id;
        // this.id16 = res.data.respon[15].id;
        // this.id17 = res.data.respon[16].id;
        // this.id18 = res.data.respon[17].id;
        // this.id19 = res.data.respon[18].id;
        // this.id20 = res.data.respon[19].id;
      });
    //   console.log(this.id);
  },

  methods: {
    simpan() {
      let vm = this;
      console.log(vm);
      axios
        .post(
          ipBackend + "/poolSRQ/screening",
          { point: this.selection, id: this.qsId, jawaban: this.answer },
          {
            headers: {
              accessToken: localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          console.log(res);
          alert("Berhasil Mengisi SRQ"),
            vm.$router.push({ path: "/dashboardFront" });
        })
        .catch((err) => {
          console.log(err);
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

#daftarFront .bgheader {
  background-color: #2c3e50;
  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  color: #fff;
}

#daftarFront .bgheader .partone {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 65px;
  flex-direction: column;
}

#daftarFront .bgheader .parttwo {
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
#daftarFront .bgheader .parttwo img {
  border-radius: 100%;
}
#daftarFront .bgheader .parttwo .account {
  display: flex;
  height: 50px;
  align-items: center;
}
#daftarFront .bgheader .parttwo .accountname {
  display: flex;
  flex-direction: column;
  margin-right: 10px;
}
</style>