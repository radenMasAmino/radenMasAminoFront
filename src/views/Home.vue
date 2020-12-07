<template>
  <div id="home">
    <b-container>
      <b-row style="margin-top:60px; margin-bottom:60px">
        <b-col md="12" lg="12">
          <div class="box">
            <b-row>
              <b-col md="12" lg="12">
                <h1 class="m-t-0 m-b-0 text-center"><strong>S I D E</strong></h1>
                <h4 class="m-t-0 m-b-0 text-center">Sistem Informasi Deteksi Emosi</h4>
              </b-col>

              <b-col md="12" lg="12" class="m-t-30">
                <p style="text-align:justify">
                  Pandemi COVID-19 menimbulkan emosi yang dapat menurunkan imun seseorang dan akan menyebabkan risiko tertular COVID-19 meningkat. Emosi merupakan aspek kesehatan mental yang sangat berpengaruh terhadap kesehatan fisik. Pelayanan kesehatan saat ini masih fokus pada pendekatan kuratif dengan belum memperhatikan faktor stress, emosi, sosial maupun spiritual yang sangat berpengaruh terhadap kesehatan secara holistik
                </p>
                <p style="text-align:justify">
                  Beberapa penelitian tentang intervensi emosi melalui pendekatan spiritual di Indonesia telah membuktikan adanya kepatuhan dalam berobat dan meningkatkan kemandirian. Kemandirian terdiri dari kemandirian fisik, mental, sosial, cultural dan spiritual membuat seseorang mampu mencegah penyakit secara holistic. 
                </p>

                <p style="text-align:justify">
                  Penelitian ini bertujuan untuk mendeteksi emosi dan pengaruhnya terhadap tanda-tanda vital dari kemampuan meningkatkan imun dalam tubuh. Penelitian ini menggunakan sebuah sistem informasi yang bernama SIDE (Sistem Informasi Dekteksi Emosi) untuk mendeteksi emosi masyrakat usia produktif.
                </p>

                <p style="text-align:justify">
                  Untuk mulai mendeteksi emosi, silahkan klik button dibawah ini kemudian isi data dengan sebener-benarnya sehingga emosi anda dapat kami analisa lebih lanjut.
                </p>
              </b-col>
            </b-row>
            
            <b-row class="m-t-30">
              <b-col md="12" lg="12">
                <center>
                  <router-link :to="'login'">
                  <b-button  variant="primary" size="lg">Deteksi Emosi Anda Sekarang !</b-button>
                  </router-link>
                </center>
                
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
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

</style>
