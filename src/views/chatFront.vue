<template>
    <div id="chatFront">
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

    <section style="padding-top:60px;padding-bottom:60px">
        <b-container>
            <b-row>
                <b-col md="12" lg="12">
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
                                >Chat</b-breadcrumb-item
                            >
                            </b-breadcrumb>
                        </b-col>
                    </b-row>

                    <b-row>
                        <b-col md="12" lg="12">
                            <div class="box">
                                <b-row>
                                    <b-col md="12" lg="12">
                                        <div style="width:100%;height:60vh;background-color:;overflow-y:auto;overflow-x:hidden" id="chatnya">

                                            <b-row v-for="item in chat" :key="item.id">
                                                  <b-col md="12" lg="12" v-if="item.adminId">
                                                    <div style="width: 90%;padding: 5px 15px;background-color: #007bff;border-top-right-radius: 4px;border-top-left-radius: 4px;border-bottom-left-radius: 4px;border-bottom-right-radius: 4px;color: #ffffff;font-weight: bold;margin-right:10%">
                                                        <b-row>
                                                            <b-col md="12" lg="12">
                                                                <h6 style="margin:0;text-align:right">{{item.createdAt}}</h6>
                                                            </b-col>
                                                        </b-row>

                                                        <b-row>
                                                            <b-col md="12" lg="12">
                                                                <hr style="margin:10px 0;">
                                                            </b-col>
                                                        </b-row>

                                                        <b-row>
                                                            <b-col md="12" lg="12">
                                                                <p>{{item.isi}}</p>
                                                            </b-col>
                                                        </b-row>
                                                    </div>
                                                </b-col>
                                                <b-col md="12" lg="12" v-else>
                                                    <div style="width: 90%;padding: 10px;background-color: #2C3D50;border-top-right-radius: 4px;border-top-left-radius: 4px;border-bottom-left-radius: 4px;border-bottom-right-radius: 4px;color: #ffffff;font-weight: bold;margin-left:10%">
                                                        <b-row>
                                                            <b-col md="12" lg="12">
                                                                <h6 style="margin:0;text-align:right">{{item.createdAt}}</h6>
                                                            </b-col>
                                                        </b-row>

                                                        <b-row>
                                                            <b-col md="12" lg="12">
                                                                <hr style="margin:10px 0;">
                                                            </b-col>
                                                        </b-row>

                                                        <b-row>
                                                            <b-col md="12" lg="12">
                                                                   <p>{{item.isi}}</p>
                                                            </b-col>
                                                        </b-row>
                                                    </div>
                                                </b-col>
                                            </b-row>

                                         
                                        </div>
                                    </b-col>
                                </b-row>
                            </div>
                            
                        </b-col>

                        <b-col md="12" lg="12" style="margin-top:15px">
                            <div class="box">
                                <div style="width:100%;height:10vh;background-color:;display:flex;justify-content:center;align-items:center">
                                    <div style="width:90%">
                                        <b-form-input 
                                            required
                                            placeholder=""
                                            v-model="isi"
                                        ></b-form-input>
                                    </div>
                                    <div style="width:2.5%"></div>
                                    <div style="width:7.5%">
                                        <b-button variant="primary" block @click="kirimChat">Kirim</b-button>
                                    </div>
                                </div>
                            </div>
                            
                        </b-col>
                    </b-row>
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
    name: "chatFront",
       data() {
        return {
            responden: [],
            chat: [],
            isi:''
        }
    },
  sockets: {
    semuachat(data){
        // console.log(data, 'aaa')
        this.chat = data
    
    },

      chatMasuk(data){
        // console.log(data, 'aaa')
        this.chat.push(data)

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
         this.$socket.emit('join', this.responden.id)
        this.$socket.emit('allchat', this.responden.id, 0)
         
        // console.log(this.responden.id);
        })
        .catch(err => {
            console.log('mounted nya', err);
        })

        
    },
    methods:{
        kirimChat(){
            this.$socket.emit('chat', this.responden.id, this.isi, 0)
            this.isi = '';
        }
    }
}
</script>

<style scoped>
#chatFront .bgheader {
  background-color: #2c3e50;
  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  color: #fff;
}
#chatFront .bgheader .partone {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 65px;
  flex-direction: column;
}
#chatFront .bgheader .parttwo {
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
#chatFront .bgheader .parttwo img {
  border-radius: 100%;
}
#chatFront .bgheader .parttwo .account {
  display: flex;
  height: 50px;
  align-items: center;
}
#chatFront .bgheader .parttwo .accountname {
  display: flex;
  flex-direction: column;
  margin-right: 10px;
}
</style>