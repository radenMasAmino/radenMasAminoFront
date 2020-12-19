<template>
  <div id="home">
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
          <b-col xs="12" sm="12" md="5" lg="5">
            <div style="width:100%;" class="d-none d-md-block d-lg-none d-none d-lg-block d-xl-none d-none d-xl-block">
             <img src="../assets/doctor.png" alt="" style="width:100%;height:433px">
            </div>
            <img src="../assets/doctor.png" alt="" style="width:100%" class="d-block d-sm-none d-none d-sm-block d-md-none">
          </b-col>

          <b-col xs="12" sm="12" md="7" lg="7">
            <b-row>
              <b-col md="12" lg="12">
                <h2 style="margin-top:0;margin-bottom:0;" class="d-none d-md-block d-lg-none d-none d-lg-block d-xl-none d-none d-xl-block"><strong>ONLINE NURSE MENTAL HEALTH CARE (ONME)</strong></h2>
                <h2 style="margin-top:0;margin-bottom:0;" class="d-none d-md-block d-lg-none d-none d-lg-block d-xl-none d-none d-xl-block"><strong>RADEN MAS AMINO</strong></h2>

                <h2 style="margin-top:30px;margin-bottom:0;text-align:center" class="d-block d-sm-none d-none d-sm-block d-md-none"><strong>ONLINE NURSE MENTAL HEALTH CARE (ONME)</strong></h2>
                <h2 style="margin-top:0;margin-bottom:0;text-align:center" class="d-block d-sm-none d-none d-sm-block d-md-none"><strong>RADEN MAS AMINO</strong></h2>
              </b-col>
            </b-row>

            <b-row style="margin-top:15px">
              <b-col md="12" lg="12">
                <p style="text-align:justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius optio ipsam expedita impedit? Facilis ab ipsa numquam rem similique reprehenderit odio qui error ut iste exercitationem quasi eveniet pariatur inventore doloremque officiis sequi, delectus aliquam, beatae sunt animi ea aperiam! Quod architecto eveniet similique perferendis, voluptatem, neque aliquid modi ullam velit eum impedit dolores sapiente ipsa. Minus, veritatis dicta molestiae cumque praesentium tempore. Sit placeat ratione nobis quas molestiae. Similique, distinctio nobis, optio accusamus, tempora sunt labore deleniti nemo ducimus esse vel numquam autem unde quis quod! Incidunt quis aliquid consequatur nemo, exercitationem explicabo nostrum pariatur modi doloremque eaque ipsam commodi magnam at nisi unde fugit. Ex expedita eveniet non et eius eum neque placeat mollitia enim, possimus vero, consequatur perferendis commodi. Voluptates, ut commodi et officiis ullam veritatis fugiat aut voluptatem distinctio doloremque natus amet! Pariatur saepe quae totam illo nemo hic maiores rem? Mollitia sint recusandae natus sit?</p>
              </b-col>
            </b-row>


            <b-row>
              <b-col xs="12" sm="12" md="12" lg="12">
                <div style="text-align: center">
                <!-- <router-link :to="'daftarFront'"> -->
                  <h4><strong> Online Nurse Mental Health Care (ONME) </strong></h4>
                  <!-- <b-button disabled size="lg" class="mb-2"> Online Nurse Mental Health Care (ONME) </b-button> -->
                  <!-- <br> -->
                  <b-button pill id="tooltip-target-1" href="http://backend.radenmasamino.org/auth/google/" variant="light" size="lg">
                    <img src="@/assets/icons/200px-Google.png" height="25" />
                    <!-- <br> -->
                    <!-- Daftar Online Nurse Mental Health Care (ONME) -->
                  </b-button>
                  <b-tooltip target="tooltip-target-1" triggers="hover">Login via <b>Google</b></b-tooltip>
                  <p><b>Google</b></p>
                <!-- </router-link> -->
                </div>
              </b-col>
            </b-row>
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
// @ is an alias to /src
// import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: "Home",
 data (){
   return{
     isLogin: false,
   };
 }

};
</script>

<style scoped>
.btn-primary{
  background-color: #2c3e50;
  border-color: #000;
}

#home .bgheader{
    background-color: #2c3e50;
    box-shadow: 0 7px 20px 0 rgba(0,0,0,.2);
    color: #fff;
}

#home .bgheader .partone{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 65px;
    flex-direction: column;
}


#home .bgheader .parttwo{
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
#home .bgheader .parttwo img{
    border-radius: 100%;
}
#home .bgheader .parttwo .account{
    display: flex;
    height: 50px;
    align-items: center;
}
#home .bgheader .parttwo .accountname{
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    
}
</style>
