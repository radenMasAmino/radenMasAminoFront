<template>
    <div id="screening">

      <b-container>
        <b-row>
          <b-col md="12" style="margin-top:60px;margin-bottom:60px">
            <div class="box">
              <b-row>
                <b-col md="12">
                  <h3 class="text-center m-t-0 m-b-0"><strong>IDENTITAS DIRI</strong></h3>
                </b-col>
              </b-row>

              <b-row class="m-t-30">
                <b-col md="12">
                  <b-form class="bv-example-row">
                    <b-form-group label="Username">
                      <b-form-input 
                          v-model="responden.username"
                          required
                          placeholder=""
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group label="Password">
                      <b-form-input 
                          v-model="responden.password"
                          required
                          placeholder=""
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group label="Nama">
                      <b-form-input 
                          v-model="responden.nama"
                          required
                          placeholder=""
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group label="Usia">
                      <b-form-input 
                          v-model="responden.usia"
                          required
                          placeholder=""
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group label="Pekerjaan">
                      <b-form-input 
                          v-model="responden.pekerjaan"
                          required
                          placeholder=""
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group label="Alamat">
                      <b-form-input 
                          v-model="responden.alamat"
                          required
                          placeholder=""
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group label="Email">
                      <b-form-input 
                          v-model="responden.email"
                          required
                          placeholder=""
                      ></b-form-input>
                    </b-form-group>

                    <b-button class="m-1" @click="signup" variant="primary">Simpan</b-button>
                    <b-button class="m-1" to="/login" variant="info">Cancel</b-button>
                  </b-form>
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
import { ipBackend } from "@/config.js";

export default {
    name:"Pernyataan",

    data() {
      return {
        responden: {
          username: "",
          password: "",
          nama: "",
          usia: "",
          pekerjaan: "",
          alamat: "",
          email: "",
        }
      }
    },

    methods: {
      signup(){
        let vm = this;
        axios.post(ipBackend + '/users/register', {
          username: vm.responden.username,
          password: vm.responden.password,
          nama: vm.responden.nama,
          alamat: vm.responden.alamat,
          usia: vm.responden.usia,
          pekerjaan: vm.responden.pekerjaan,
          email: vm.responden.email,
        })
        .then(res => {
          console.log(res);
          alert('berhasil');
          // vm.$router.push({ path:"/screeningfront/"+res.data.id});
          vm.$router.push({ path:"/login"});
        })
        .catch(err => {
          console.log(err);
        });
      },

    }
}


</script>
<style scoped>

</style>