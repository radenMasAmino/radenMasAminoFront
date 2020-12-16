<template>
    <div id="kecemasanFront">
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
                            >Kuisioner Kecemasan</b-breadcrumb-item
                        >
                        </b-breadcrumb>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col xs="12" sm="12" md="12" lg="12">
                        <div class="box">
                            <b-row>
                                <b-col md="12" lg="12">
                                    <h2><strong>KUISIONER KECEMASAN</strong></h2>
                                    <hr>
                                </b-col>
                            </b-row>

                            <b-row>
                                <b-col md="12" lg="12">
                                    <b-form-group label="pertanyaan diambil dari master Kecemasan"> 
                                        <b-form-select>
                                            <b-form-select-option >Tidak Pernah</b-form-select-option>
                                            <b-form-select-option >Kadang-kadang</b-form-select-option> 
                                            <b-form-select-option >Sering</b-form-select-option> 
                                            <b-form-select-option >Selalu</b-form-select-option> 
                                        </b-form-select>
                                    </b-form-group>

                                    <b-form-group label="pertanyaan diambil dari master Kecemasan"> 
                                        <b-form-select>
                                            <b-form-select-option >Tidak Pernah</b-form-select-option>
                                            <b-form-select-option >Kadang-kadang</b-form-select-option> 
                                            <b-form-select-option>Sering</b-form-select-option> 
                                            <b-form-select-option >Selalu</b-form-select-option> 
                                        </b-form-select>
                                    </b-form-group>

                                    <b-form-group label="pertanyaan diambil dari master Kecemasan"> 
                                        <b-form-select>
                                            <b-form-select-option >Tidak Pernah</b-form-select-option>
                                            <b-form-select-option >Kadang-kadang</b-form-select-option> 
                                            <b-form-select-option>Sering</b-form-select-option> 
                                            <b-form-select-option >Selalu</b-form-select-option> 
                                        </b-form-select>
                                    </b-form-group>
                                    
                                    <b-button variant="primary">Simpan</b-button>
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
export default {
    name:"kecemasanFront",
}
</script>

<style scoped>
.btn-primary{
  background-color: #2c3e50;
  border-color: #000;
}

#kecemasanFront .bgheader{
    background-color: #2c3e50;
    box-shadow: 0 7px 20px 0 rgba(0,0,0,.2);
    color: #fff;
}

#kecemasanFront .bgheader .partone{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 65px;
    flex-direction: column;
}


#kecemasanFront .bgheader .parttwo{
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
#kecemasanFront .bgheader .parttwo img{
    border-radius: 100%;
}
#kecemasanFront .bgheader .parttwo .account{
    display: flex;
    height: 50px;
    align-items: center;
}
#kecemasanFront .bgheader .parttwo .accountname{
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    
}
</style>