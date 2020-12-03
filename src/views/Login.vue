<template>
  <div id="login">
    <b-container class="bv-example-row">
      <b-row>
        <b-col md="4" offset-md="4">
          <div style="display:flex;height:100vh;background-color:;align-items:center">
            <div style="width:100%;height:;background-color:;padding:30px;background-color:rgba(0,0,0,0.7);border-radius:6px;color:#fff">
              <h2 class="text-center">LOGIN</h2>
              <h6 class="text-center">ONLINE NURSE MENTAL HEALTH CARE</h6>
              <h6 class="text-center">(RADEN MAS AMINO)</h6>
              <hr/>
              <b-form>
                
                 <div v-if="pesan"><b-alert show variant="danger">{{pesan}}</b-alert></div>
                <b-form-group 
                label="Username" 
                >
                  <b-form-input
                    v-model="email"
                    required
                    placeholder="Enter Username"
                  ></b-form-input>
                </b-form-group>
                
                <b-form-group 
                label="Password" 
                >
                  <b-form-input
                    type="password"
                    v-model="password"
                    required
                    placeholder="Enter Password"
                  ></b-form-input>
                </b-form-group>

                <div v-if="proses">Loading...</div>
                <b-button @click="logindong" variant="primary">Login</b-button>
              </b-form>
              
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: "login",
  data (){
    return{
      isLogin: false,
      email: '',
      password: ''
     
    };
  },

  props:{
    tujuan: String
  },

  watch:{
    //memperhatikan state token dari vuex store
   token(newValue, oldValue) {
   
     if(newValue!= oldValue && newValue!=''&& newValue!= undefined){
       
        //lempar ke halaman dashboard
        (this.$route.query.tujuan)?
        this.$router.push({ path: this.$route.query.tujuan}): 
        this.$router.push({ name:"dashboard"})
        this.$swal.close()
     }
   },
   proses(newValue){
     let vm = this;
     if(newValue==true){
       this.loading()
     }else{
         vm.$swal.close()
     }
   }

  },

 

  // mounted:function(){
  //     console.log(this.$route.query.tujuan)
  // },

  computed: {
  ...mapState('Login', ['token', 'pesan', 'proses']),
  ...mapGetters('Login',['cekLogin']),

  },

  methods:{
    ...mapActions('Login', [ 'doLogin', 'doLogout' ]),
    logindong: function(){
     
      this.doLogin({email: this.email, password:this.password})
      //didalam do login state token di isi
    
    },
    logoutdong: function(){
      this.doLogout()
      // this.isLogin =  this.cekLogin
    },
     loading(){
           let vm = this;
            vm.$swal({
            title: 'Mohon Tunggu...',
            allowEscapeKey: false,
            allowOutsideClick: false,
            onOpen: () => {
            vm.$swal.showLoading();
            }
        })
      },
  }
};
</script>

<style scoped>
#login{
  background-image: url('../assets/bg.jpg');
  background-size: 100%;
  background-repeat: repeat;
  /* background-position: 100% ; */
}
</style>
