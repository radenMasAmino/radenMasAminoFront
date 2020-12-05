
<template>
  <div id="depresi">
    <myheader></myheader>
    <b-container>
      <b-row>
        <b-col md="12" style="margin-top: 60px; margin-bottom: 60px">
          <div class="box">
            <b-row>
              <b-col md="12">
                <h3 class="text-center m-t-0 m-b-0">
                  <strong>DATA MASTER DEPRESI</strong>
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
                  <b-breadcrumb-item active
                    >Data Master Depresi</b-breadcrumb-item
                  >
                </b-breadcrumb>
              </b-col>
            </b-row>

            <b-row class="m-t-30">
              <b-col md="12">
                <b-button v-b-modal.modal-1 variant="primary"
                  >Tambah Data</b-button
                >
              </b-col>
            </b-row>

            <b-row class="m-t-15">
              <b-col lg="12">
                <b-alert show variant="primary" class="m-b-0">
                  <b-form-group
                    label="Urutkan"
                    class="m-t-15"
                    style="font-weight: bold"
                  >
                    <b-input-group>
                      <b-form-select id="sortBySelect" class="w-75">
                        <template v-slot:first>
                          <option value="">-- Nama Kolom --</option>
                        </template>
                      </b-form-select>
                      <b-form-select class="w-25">
                        <option :value="false">Kecil-Besar</option>
                        <option :value="true">Besar-Kecil</option>
                      </b-form-select>
                    </b-input-group>
                  </b-form-group>

                  <b-form-group
                    label="Pencarian"
                    label-for="filterInput"
                    style="font-weight: bold"
                    class="m-t-15"
                  >
                    <b-input-group>
                      <b-form-input
                        type="search"
                        id="filterInput"
                        placeholder="Type to Search"
                      ></b-form-input>
                      <b-input-group-append>
                        <b-button>Clear</b-button>
                      </b-input-group-append>
                    </b-input-group>
                  </b-form-group>

                  <b-form-group
                    label="Pencarian Berdasarkan"
                    description="Hilangkan semua centang, jika ingin semua kolom"
                    style="font-weight: bold"
                  >
                    <b-form-checkbox-group>
                      <b-form-checkbox value=""
                        >Pertanyaan Depresi</b-form-checkbox
                      >
                    </b-form-checkbox-group>
                  </b-form-group>
                </b-alert>
              </b-col>
            </b-row>

            <b-table
              show-empty
              bordered
              hover
              
              responsive
            >
              <!-- <template v-slot:cell(name)="row">
                                {{ row.value.first }} {{ row.value.last }}
                            </template> -->

              <template v-slot:cell(actions)="row">
                <b-button
                  size="sm"
                  variant="warning"
                  @click="info(row.item, row.index, $event.target)"
                  class="mr-1"
                >
                  Edit
                </b-button>
                <b-button
                  size="sm"
                  variant="danger"
                  @click="hapus(row.item.id)"
                  class="mr-1"
                >
                  Hapus
                </b-button>
              </template>
            </b-table>

            <b-row>
              <b-col sm="5" md="6" class="my-1">
                <b-form-group
                  label="Per page"
                  label-cols-sm="6"
                  label-cols-md="4"
                  label-cols-lg="3"
                  label-align-sm="right"
                  label-size="sm"
                  label-for="perPageSelect"
                  class="mb-0"
                >
                  <b-form-select
                    v-model="perPage"
                    id="perPageSelect"
                    size="sm"
                    :options="pageOptions"
                  ></b-form-select>
                </b-form-group>
              </b-col>

              <b-col sm="7" md="6" class="my-1">
                <b-pagination
                  align="fill"
                  size="sm"
                  class="my-0"
                ></b-pagination>
              </b-col>
            </b-row>

            <!-- Info modal -->
            <b-modal hide-footer centered ok-only>
              <pre></pre>
              <b-form class="bv-example-row">
                <b-form-group label="Pertanyaan">
                  
                                

                  <b-form-input required placeholder=""></b-form-input>
                  <b-button variant="primary" class="m-t-15"
                    >Simpan</b-button
                  >
                </b-form-group>
              </b-form>
            </b-modal>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <b-modal
      id="modal-1"
      hide-footer
      centered
      title="TAMBAH DATA MASTER DEPRESI"
    >
      <b-form class="bv-example-row">
        <b-form-group label="Pertanyaan">
          <b-form-input required placeholder=""></b-form-input>
          <b-button  variant="primary" class="m-t-15"
            >Simpan</b-button
          >
        </b-form-group>
      </b-form>
    </b-modal>
  </div>
</template>
<script>
import myheader from "../../components/header";
// import axios from 'axios';
export default {
  name: "depresi",
  components: {
    myheader,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
</style>