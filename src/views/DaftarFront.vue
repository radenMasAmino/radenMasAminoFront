<template>
    <div id="daftarFront">
        <section class="bgheader">
            <b-container>
                <b-row>
                    <b-col cols="12" md="8" lg="8" style="background-color:">
                        <div class="partone">
                            <h3 style="margin:0 !important;padding:0 !important;" class="d-none d-md-block d-lg-none d-none d-lg-block d-xl-none d-none d-xl-block"><strong>ONME RADEN MAS AMINO</strong></h3>
                            <h6 style="margin:0 !important;padding:0 !important;" class="d-none d-md-block d-lg-none d-none d-lg-block d-xl-none d-none d-xl-block"><strong>Online Nurse Mental Health Care Raden Mas Amino</strong></h6>
                            <!-- <img src="https://via.placeholder.com/50">
                            <div class="brandname">
                                <h3 class="m-t-0 m-b-0 m-l-10"><strong>SIDE</strong></h3>
                            </div> -->
                            <h4 style="margin:0 !important;padding:0 !important;" class="d-block d-sm-none d-none d-sm-block d-md-none"><strong>ONME RADEN MAS AMINO</strong></h4>
                            <h6 style="margin:0 !important;padding:0 !important;font-size:12px" class="d-block d-sm-none d-none d-sm-block d-md-none"><strong>Online Nurse Mental Health Care Raden Mas Amino</strong></h6>
                        </div>
                    </b-col>

                    
                </b-row>
            </b-container>
        </section>

        <section style="padding-top:60px;padding-bottom:60px">
            <b-container>
                <b-row>
                    <b-col xs="12" sm="12" md="8" offset-md="2" lg="8" offset-lg="2">
                        <div class="box">
                            <b-row>
                                <b-col md="12" lg="12">
                                    <h2><strong>DAFTAR</strong></h2>
                                    <hr>
                                </b-col>
                            </b-row>

                            <b-row>
                                <b-col md="12" lg="12">
                                    <b-form-group label="Username">
                                    <b-form-input 
                                        v-model="responden.username"
                                        disabled
                                        required
                                        placeholder=""
                                    ></b-form-input>
                                    </b-form-group>

                                    <b-form-group label="Password">
                                    <b-form-input 
                                        v-model="responden.password"
                                        disabled
                                        required
                                        placeholder=""
                                    ></b-form-input>
                                    </b-form-group>

                                    <b-form-group label="Email">
                                    <b-form-input 
                                        v-model="responden.email"
                                        disabled
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
                                    
                                    <!-- <router-link :to="'/SRQFront'"> -->
                                        <b-button @click="daftarUpdate" variant="primary">Daftar</b-button>
                                    <!-- </router-link> -->
                                    
                                </b-col>
                            </b-row>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </section>
        <footer style="background-color:#2c3e50">
            <b-container>
                <b-row>
                    <b-col md="12" lg="12">
                        <h6 style="margin:0;padding:15px;color:#fff;text-align:center"><strong>© 2020 RSJD Amino Gondohutomo</strong></h6>
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
    name:"daftarFront",
    data() {
        return {
            responden: [],
        }
    },

    mounted() {
        // get profile
        // let idProfile = localStorage.getItem('token.id')
        axios.get(ipBackend + '/users/profil', {
            headers: {
                'accessToken': localStorage.getItem('token')
            }
        })
        .then(res => {
        // console.log('mounted profile', res);
        // console.log(res.data.respon);
        this.responden = res.data.respon[0]
        // console.log(this.responden.id);
        })
        .catch(err => {
            console.log('mounted nya', err);
        })
    },

    methods: {
        daftarUpdate() {
            axios.post(ipBackend + '/users/update', {
                nama: this.responden.nama,
                alamat: this.responden.alamat,
                usia: this.responden.usia,
                pekerjaan: this.responden.pekerjaan,
            }, {
                headers: {
                    'accessToken': localStorage.getItem('token')
                }
            })
            .then(() => {
                alert('ini berhasil')
                // console.log('log setelah "click" daftar',res);
                this.$router.push({ path: '/dashboardFront' })

            })
            .catch(err => {
                alert('ini gagal')
                console.log(err);

            })
        }
    }
}
</script>

<style scoped>
.btn-primary{
  background-color: #2c3e50;
  border-color: #000;
}

#daftarFront .bgheader{
    background-color: #2c3e50;
    box-shadow: 0 7px 20px 0 rgba(0,0,0,.2);
    color: #fff;
}

#daftarFront .bgheader .partone{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 65px;
    flex-direction: column;
}


#daftarFront .bgheader .parttwo{
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
#daftarFront .bgheader .parttwo img{
    border-radius: 100%;
}
#daftarFront .bgheader .parttwo .account{
    display: flex;
    height: 50px;
    align-items: center;
}
#daftarFront .bgheader .parttwo .accountname{
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    
}
</style>