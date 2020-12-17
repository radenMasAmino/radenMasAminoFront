<template>
    <div id="daftarFront">
        <section class="bgheader">
            <b-container>
                <b-row>
                    <b-col cols="12" md="8" lg="8" style="background-color:">
                        <div class="partone">
                            <h3 style="margin:0 !important;padding:0 !important;" class="d-none d-md-block d-lg-none d-none d-lg-block d-xl-none d-none d-xl-block"><strong>ONME RADEN MAS AMINO</strong></h3>
                            <h6 style="margin:0 !important;padding:0 !important;" class="d-none d-md-block d-lg-none d-none d-lg-block d-xl-none d-none d-xl-block"><strong>Online Nurse Mental Health Care Raden Mas Amino</strong></h6>
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
                    <b-col xs="12" sm="12" md="12" lg="12">
                        <div class="box">
                            <b-row>
                                <b-col md="12" lg="12">
                                    <h2><strong>SELF REPORTING QUESTIONNAIRE (SRQ)</strong></h2>
                                    <hr>
                                </b-col>
                            </b-row>

                            <b-row>
                                <b-col md="12" lg="12">
                                    <b-form-group>
                                        <ol id="list-pertanyaan">
                                            <template>
                                            <li v-for="item in dataPertanyaan" :key="item.id">
                                                {{ item.pertanyaan }}
                                                <b-form-select
                                                    v-model="dataJawaban"
                                                    :options="selection"
                                                    @change="updateSelect = null"
                                                >

                                                </b-form-select>
                                                <!-- <b-form-select
                                                    v-model="dataPertanyaan.jawabannya"
                                                    required>
                                                    <b-form-select-option v-for="select in filteredSelect" :key="select" :value="select.value"></b-form-select-option>
                                                </b-form-select> -->
                                            </li>
                                            </template>
                                        </ol>
                                        <!-- <b-form-input v-for="item in dataPertanyaan" :key="item.id">
                                            {{ dataPertanyaan.pertanyaan }}
                                        </b-form-input> -->
                                        <!-- <span>{{ dataPertanyaan.pertanyaan }}</span> -->
                                        <!-- <b-form-select v-model="dataJawaban">
                                            <b-form-select-option value="0">Tidak</b-form-select-option>
                                            <b-form-select-option value="1">Ya</b-form-select-option> 
                                        </b-form-select> -->
                                    </b-form-group>

                                    <!-- <b-form-group label="Diambil dari master SRQ"> 
                                        <b-form-select>
                                            <b-form-select-option value="0">Tidak Pernah</b-form-select-option>
                                            <b-form-select-option value="1">Kadang-kadang</b-form-select-option> 
                                            <b-form-select-option value="2">Sering</b-form-select-option> 
                                            <b-form-select-option value="3">Selalu</b-form-select-option> 
                                        </b-form-select>
                                    </b-form-group>

                                    <b-form-group label="Diambil dari master SRQ"> 
                                        <b-form-select>
                                            <b-form-select-option value="0">Tidak Pernah</b-form-select-option>
                                            <b-form-select-option value="1">Kadang-kadang</b-form-select-option> 
                                            <b-form-select-option value="2">Sering</b-form-select-option> 
                                            <b-form-select-option value="3">Selalu</b-form-select-option> 
                                        </b-form-select>
                                    </b-form-group> -->
                                    
                                    <!-- <router-link :to="'dashboardFront'"> -->
                                    <b-button @click="simpanData" variant="primary">Simpan</b-button>
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
import Axios from 'axios'
import { ipBackend } from '@/config.js'

export default {
    name:"srqFront",
    data() {
        return {
            idPertanyaan: '',
            dataPertanyaan: [],
            dataJawaban: [],
            poolSRQ: [],
            selection:[
                { value: [1, "ya"], text: 'Ya' },
                { value: [0, 'tidak'], text: 'Tidak' },
            ],
        }
    },

    mounted() {
        Axios.all([
            Axios.get(ipBackend + '/srq/all', {
                headers: {
                    'accesstoken': localStorage.getItem('token')}
            }),
            Axios.get(ipBackend + '/poolSRQ/all', {
                headers: {
                    'accesstoken': localStorage.getItem('token')}
            })
        ])
        .then(res => {
            console.log('biar keliatan klo ini mounted nya jalan');
            // console.log(res[0]);
            this.dataPertanyaan = res[0].data.respon
            // this.idPertanyaan = this.dataPertanyaan.id
            console.log(this.dataPertanyaan);
            // console.log(this.idPertanyaan);
            // console.log(res[1]);
            this.dataJawaban = res[1].data.respon
            // console.log(this.dataJawaban);
            this.poolSRQ.jawaban = this.dataPertanyaan
            console.log(this.poolSRQ);
        })
        .catch(err => {
            console.log('ini gagal oi ' + err);
        })
    },

    computed: {
        filteredSelect() {
            return this.selection.filter(obj => {
                return obj.value === this.selection.text
            })
        }
    },

    methods: {
        updateSelect() {
            this.poolSRQ.jawaban.push(this.dataJawaban)
        },
        simpanData() {
            // let data = [ this.dataPertanyaan.id, this.dataJawaban, this.selection ]
            console.log('lho', this.dataJawaban);
            console.log(this.dataPertanyaan.id);
            Axios.post(ipBackend + "/poolSRQ/screening", { 
                // SRQId: this.dataPertanyaan.id,
                // point: this.dataJawaban[0],
                // jawaban: this.dataJawaban[1] 
                // data
            }, {
                headers: {
                    accessToken: localStorage.getItem("token"),
                },
            })
            .then((res) => {
                alert("Berhasil Mengisi SRQ"),
                console.log('ini simpan nya');
                console.log(res);
                // vm.$router.push({ path: "/dashboardFront" });
            })
            .catch((err) => {
                console.log('ini error nya');
                console.log(err);
            });
        },
    },

    
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