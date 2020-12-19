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
                  <h2><strong>KUISIONER REGULASI DEPRESI</strong></h2>
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
                      
                          <b-form-select
                            v-model="item.jawaban"
                            @change="updatePoint(index)"
                          >
                         
                            <b-form-select-option  v-for="(itemm, indexx) in item.isi"
                          :key="indexx" :value="itemm.score"
                              >{{itemm.pertanyaan}}</b-form-select-option
                            >
                          
                          </b-form-select>
                        </li>
                      </template>
                    </ol>
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
  name: "depresi",
  data() {
    return {
      dataPertanyaan: [],
    };
  },
  mounted() {
    Axios.get(ipBackend + "/depresi/history", {
      headers: {
        accesstoken: localStorage.getItem("token"),
      },
    })

      .then((res) => {
        // console.log('biar keliatan klo ini mounted nya jalan');
        let p = [];
        let no = 0;
        res.data.respon.forEach((element) => {
          if(no==0){
               no = element.nomor;
          }
            if(no != element.nomor){
            let data = {
              nomor: element.nomor,
              depresiId: element.id,
              isi: p
            }
             if (element.poolDepresis.length > 0) {
                data.jawaban = element.poolDepresis[0].jawaban;
                data.point = element.poolDepresis[0].point;
              } else {
                data.jawaban = 0;
                data.point = 0;
              }
              this.dataPertanyaan.push(data);
              no = element.nomor;
              p=[];
          }
         let obj = {
            depresiId: element.id,
            pertanyaan: element.pertanyaan,
            score: element.score
          };
         
          p.push(obj);
        
        });
        console.log( this.dataPertanyaan)
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
      this.dataPertanyaan[i].point = this.dataPertanyaan[i].jawaban;
    },
    simpanData() {
      let vm = this;
      console.log(this.dataPertanyaan)
      Axios.post(ipBackend + "/poolDepresi/screening", this.dataPertanyaan, {
        headers: {
          accessToken: localStorage.getItem("token"),
        },
      })
        .then(() => {
          alert("Berhasil Mengisi Jawaban");
          // console.log('ini simpan nya');
        //   console.log(res, '<<<<< ini');
          vm.$router.push({ path: "/dashboardFront" });
        })
        .catch((err) => {
          console.log("ini error nya");
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