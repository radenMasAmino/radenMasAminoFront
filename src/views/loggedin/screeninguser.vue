<template>
  <div id="screeninguser">
    <myheader></myheader>
    <b-container>
      <b-row>
        <b-col md="12" style="margin-top: 60px; margin-bottom: 60px">
          <div class="box">
            <b-row>
              <b-col md="12">
                <h3 class="text-center m-t-0 m-b-0">
                  <strong>SCREENING USER</strong>
                </h3>
              </b-col>
            </b-row>

            <b-row class="m-t-15">
              <b-col md="12">
                <b-breadcrumb>
                  <b-breadcrumb-item>
                    <router-link :to="'dashboard'">
                      <b-icon
                        icon="house-fill"
                        scale="1.25"
                        shift-v="1.25"
                        aria-hidden="true"
                      ></b-icon>
                      Dashboard
                    </router-link>
                  </b-breadcrumb-item>

                  <b-breadcrumb-item>
                    <router-link :to="'user'">
                      
                      Data User
                    </router-link>
                  </b-breadcrumb-item>
                  <b-breadcrumb-item active
                    >Screening User</b-breadcrumb-item
                  >
                </b-breadcrumb>
              </b-col>
            </b-row>

            <b-row class="m-t-15">
              <b-col md="12">
                <b-alert show variant="primary">
                  <div style="width:100%;display:table">
                    <div style="display:table-row">
                      <div style="display:table-cell;width:15%">
                        <h5>Nama</h5> 
                      </div>
                      <div style="display:table-cell;width:2.5%">
                        <h5>:</h5> 
                      </div>
                      <div style="display:table-cell">
                        <h5>Namanya</h5> 
                      </div>
                    </div>

                    <div style="display:table-row">
                      <div style="display:table-cell;width:15%">
                        <h5>Alamat</h5> 
                      </div>
                      <div style="display:table-cell;width:2.5%">
                        <h5>:</h5> 
                      </div>
                      <div style="display:table-cell">
                        <h5>alamatnya</h5> 
                      </div>
                    </div>
                  </div>
                </b-alert>
              </b-col>   
            </b-row>

            <b-row class="m-t-15">
              <b-col md="12">
                <div class="accordion" role="tablist">
                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                      <b-button block v-b-toggle.accordion-1 variant="primary" style="text-align:left;text-transform:uppercase;font-weight:bold">SELF REPORTING QUESTIONNAIRE (SRQ)</b-button>
                    </b-card-header>
                    <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                      <b-card-body>
                        <b-form-group label="pertanyaan diambil dari master depresi"> 
                          <b-form-select>
                            <b-form-select-option >Ya</b-form-select-option> 
                            <b-form-select-option>Tidak</b-form-select-option>   
                          </b-form-select>
                        </b-form-group> 
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                      <b-button block v-b-toggle.accordion-2 variant="primary" style="text-align:left;text-transform:uppercase;font-weight:bold">KECEMASAN</b-button>
                    </b-card-header>
                    <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                      <b-card-body>
                        <b-form-group label="pertanyaan diambil dari master Kecemasan"> 
                          <b-form-select>
                            <b-form-select-option >Tidak Pernah</b-form-select-option>
                              <b-form-select-option >Kadang-kadang</b-form-select-option> 
                              <b-form-select-option>Sering</b-form-select-option> 
                              <b-form-select-option >Selalu</b-form-select-option> 
                              </b-form-select>
                            </b-form-group>              
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                      <b-button block v-b-toggle.accordion-3 variant="primary" style="text-align:left;text-transform:uppercase;font-weight:bold">DEPRESI</b-button>
                    </b-card-header>
                    <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                      <b-card-body>
                            <b-form-group label="pertanyaan diambil dari master depresi"> 
                                        <b-form-select>
                                            
                                        </b-form-select>
                                    </b-form-group>               
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                      <b-button block v-b-toggle.accordion-4 variant="primary" style="text-align:left;text-transform:uppercase;font-weight:bold">REGULASI EMOSI</b-button>
                    </b-card-header>
                    <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                      <b-card-body>
                          <b-form-group label="pertanyaan diambil dari master regulasi emosi"> 
                                        <b-form-select>
                                            <b-form-select-option >Tidak Pernah</b-form-select-option>
                                            <b-form-select-option >Jarang</b-form-select-option> 
                                            <b-form-select-option >Sering</b-form-select-option> 
                                            <b-form-select-option >Selalu</b-form-select-option> 
                                        </b-form-select>
                                    </b-form-group>                 
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                      <b-button block v-b-toggle.accordion-5 variant="primary" style="text-align:left;text-transform:uppercase;font-weight:bold">POST TRAUMATIC STRESS DISORDER (PTSD)</b-button>
                    </b-card-header>
                    <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
                      <b-card-body>
                             <b-form-group label="pertanyaan diambil dari master PTSD"> 
                                        <b-form-select>
                                            <b-form-select-option >Sama Sekali Tidak Pernah</b-form-select-option>
                                            <b-form-select-option >Sekali-sekali atau jarang</b-form-select-option> 
                                            <b-form-select-option >Agak Sering</b-form-select-option> 
                                            <b-form-select-option >Sering</b-form-select-option> 
                                        </b-form-select>
                                    </b-form-group>
              
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                   <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                      <b-button block v-b-toggle.accordion-6 variant="primary" style="text-align:left;text-transform:uppercase;font-weight:bold">EFIKASI DIRI DALAM BELAJAR</b-button>
                    </b-card-header>
                    <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
                      <b-card-body>
                             <b-form-group label="pertanyaan diambil dari master gangguan penyesuaian belajar"> 
                                        <b-form-select>
                                            <b-form-select-option >Sangat Tidak Sesuai</b-form-select-option>
                                            <b-form-select-option >Tidak Sesuai</b-form-select-option> 
                                            <b-form-select-option >Cukup Sesuai</b-form-select-option> 
                                            <b-form-select-option >Sangat Sesuai</b-form-select-option> 
                                        </b-form-select>
                                    </b-form-group>             
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                                   
                </div>
              </b-col>

              <b-col md="12" lg="12" style="margin-top:30px">
                 <b-button size="md" variant="primary">Simpan</b-button>
              </b-col>
            </b-row>

          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import myheader from "../../components/header";

export default {
  name: "screeninguser",
  components: {
    myheader,
  },
};
</script>
<style scoped>
</style>