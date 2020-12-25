<template>
  <div id="myheader">
    <section class="bgheader">
      <b-container>
        <b-row>
          <b-col cols="9" md="8" lg="8">
            <div class="partone">
              <h4 class="m-t-0 m-b-0">
                <strong>ONME - CARE RADEN MAS AMINO</strong>
              </h4>
            </div>
          </b-col>

          <b-col cols="3" md="4" lg="4">
            <div class="parttwo">
              <b-dropdown
                right
                variant="link"
                toggle-class="text-decoration-none"
                no-caret
              >
                <template v-slot:button-content>
                  <div class="account">
                    <img src="../assets/user.png" style="height: 8vh" />
                  </div>
                </template>
                <b-dropdown-item v-on:click="logoutdong()"
                  >Logout</b-dropdown-item
                >
              </b-dropdown>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "myheader",
  data() {
    return {};
  },

  computed: {
    ...mapState("Login", ["token"]),
    ...mapGetters("Login", ["cekLogin"]),
  },

  methods:{
    ...mapActions('Login', [ 'actLogin', 'actLogout' ]),
  
    logoutdong: function(){
      this.actLogout()
      this.$router.push({ name: "login"})
      // this.isLogin =  this.cekLogin
    },
  }
};
</script>

<style scoped>
#myheader .bgheader {
  background-color: #fff;
  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.2);
}

#myheader .bgheader .partone {
  display: flex;
  align-items: center;
  height: 10vh;
}

#myheader .bgheader .parttwo {
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
#myheader .bgheader .parttwo img {
  border-radius: 100%;
}
#myheader .bgheader .parttwo .account {
  display: flex;
  height: 8vh;
  align-items: center;
  /* background-color: red; */
}
#myheader .bgheader .parttwo .accountname {
  display: flex;
  flex-direction: column;
  margin-right: 10px;
}

#myheader .bgheader .parttwo .account :nth-child(1) {
  order: 2;
}
#myheader .bgheader .parttwo .account :nth-child(2) {
  order: 1;
}

#myheader .bgheader .parttwo .accountname :nth-child(1) {
  order: 1;
}
#myheader .bgheader .parttwo .accountname :nth-child(2) {
  order: 2;
}

#myheader .bgheader .parttwo .account h5,
h6 {
  text-align: right;
  color: #2c3e50;
}
</style>