<template>
  <div id="screening">
    <myheader></myheader>
    <b-container>
      <b-row>
        <b-col md="12" style="margin-top: 60px; margin-bottom: 60px">
          <div class="box">
            <b-row>
              <b-col md="12">
                <h3 class="text-center m-t-0 m-b-0">
                  <strong>IDENTITAS DIRI</strong>
                </h3>
              </b-col>
            </b-row>

            <b-row class="m-t-30">
              <b-col md="12">
                <b-form class="bv-example-row">
                  <b-form-group label="Nama">
                    <b-form-input
                      v-model="formm.nama"
                      required
                      placeholder=""
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group label="Username">
                    <b-form-input
                      v-model="formm.username"
                      required
                      placeholder=""
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group label="Usia">
                    <b-form-input
                      v-model="formm.usia"
                      required
                      placeholder=""
                      type="number"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group label="Pekerjaan">
                    <b-form-input
                      v-model="formm.pekerjaan"
                      required
                      placeholder=""
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group label="Alamat Email">
                    <b-form-input
                      v-model="formm.email"
                      required
                      type="email"
                      placeholder=""
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group label="Password">
                    <b-form-input
                      v-model="formm.password"
                      required
                      placeholder=""
                      type="password"
                    ></b-form-input>
                  </b-form-group>

                  <b-button @click="addInfo" variant="primary">Simpan</b-button>
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
import axios from "axios";
import myheader from "../../components/header";
import { ipBackend } from "@/config.js";
export default {
  components: {
    myheader,
  },
  data() {
    return {
      formm: {
        username:"",
        nama: "",
        usia: "",
        pekerjaan: "",
        email: "",
        password: "",
      },
    };
  },

  methods: {
    addInfo() {
      let vm = this;
      let isiForm = vm.formm;
      axios
        .post(ipBackend + "/users/register", isiForm)
        .then(function (response) {
          console.log(response);
          alert("berhasil");
          vm.$router.push({ path: "/" + response.data.id });
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
</style>