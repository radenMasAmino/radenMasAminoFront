<template>
  <div id="kecemasan">

    <MyHeader></MyHeader>

    <b-container>
      <b-row>
        <b-col md="12" style="margin-top: 60px; margin-bottom: 60px">
          <div class="box">
            <b-row>
              <b-col md="12">
                <h3 class="text-center m-t-0 m-b-0">
                  <strong>DATA MASTER KECEMASAN</strong>
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
                    >Data Master Kecemasan</b-breadcrumb-item
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
                    label-for="sortBySelect"
                    class="m-t-15"
                    style="font-weight: bold"
                  >
                    <b-input-group>
                      <b-form-select
                        v-model="sortBy"
                        id="sortBySelect"
                        :options="sortOptions"
                        class="w-75"
                      >
                        <template v-slot:first>
                          <option value="">-- Nama Kolom --</option>
                        </template>
                      </b-form-select>
                      <b-form-select
                        v-model="sortDesc"
                        :disabled="!sortBy"
                        class="w-25"
                      >
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
                        v-model="filter"
                        type="search"
                        id="filterInput"
                        placeholder="Type to Search"
                      ></b-form-input>
                      <b-input-group-append>
                        <b-button :disabled="!filter" @click="filter = ''"
                          >Clear</b-button
                        >
                      </b-input-group-append>
                    </b-input-group>
                  </b-form-group>

                  <b-form-group
                    label="Pencarian Berdasarkan"
                    description="Hilangkan semua centang, jika ingin semua kolom"
                    style="font-weight: bold"
                  >
                    <b-form-checkbox-group v-model="filterOn">
                      <b-form-checkbox value=""
                        >Pertanyaan Kecemasan</b-form-checkbox
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
                :items="formInput"
                :fields="fields"
                :current-page="currentPage"
                :per-page="perPage"
                :filter="filter"
                :filter-included-fields="filterOn"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                :sort-direction="sortDirection"
                @filtered="onFiltered"
                class="m-t-15"
                responsive
                >

                <template v-slot:cell(actions)="row">
                    <b-button size="sm" variant="warning" @click="editInfo(row.item, row.index, $event.target)" class="mr-1">
                        Edit
                    </b-button>
                      <b-button size="sm" variant="danger" @click="delQs(row.item.id)" class="mr-1">
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
                  v-model="currentPage"
                  :total-rows="totalRows"
                  :per-page="perPage"
                  align="fill"
                  size="sm"
                  class="my-0"
                  ></b-pagination>
              </b-col>
            </b-row>

            <!-- Info modal -->
            <b-modal :id="infoModal.id" hide-footer centered :title="infoModal.title" ok-only @hide="resetInfoModal">

              <b-form class="bv-example-row">
                <b-form-group 
                    label="Pertanyaan" 
                >                                   
                <b-form-input
                    v-model="editPertanyaan"
                    required
                    placeholder=""
                >
                </b-form-input>
                <b-button @click="editQs" variant="primary" class="m-t-15">Simpan</b-button>
                </b-form-group>
              </b-form>

            </b-modal>

          </div>
          
        </b-col>
      </b-row>
    </b-container>

      <b-modal id="modal-1" hide-footer centered title="TAMBAH DATA MASTER KECEMASAN">
        <b-form class="bv-example-row">
          <b-form-group label="Pertanyaan">
            <b-form-input
              v-model="addPertanyaan.pertanyaan"
              required
              placeholder="" 
            >
            </b-form-input>  
          </b-form-group>
            
          <b-form-group label="Descending">
            <b-form-select
              v-model="addPertanyaan.descending"
              :options="listDescending"
              required
            >
            </b-form-select>
          </b-form-group>

          <b-button @click="addQs" variant="primary" class="m-t-15">Simpan</b-button>
            
        </b-form>
      </b-modal>

  </div>
</template>

<script>
import MyHeader from "@/components/header.vue";
import axios from "axios";
import { ipBackend } from "@/config.js";
// import { mapState } from "vuex";

export default {
  name: "kecemasan",
  components: {
    MyHeader, // uppercased to change color, feel free to revert
  },
  data() {
    return {
      formInput: [], // changed from object{ } to array[ ]

      addPertanyaan: [],

      editPertanyaan: "",

      listDescending: [
        { text: "Select One", value: null }, 0, 1
      ],

      fields: [
        {
          key: "pertanyaan",
          label: "Pertanyaan",
          sortable: true,
          sortDirection: "desc",
        },
        { key: "actions", label: "Actions" },
      ],

      totalRows: 1,
      
      currentPage: 1,
      
      perPage: 5,
      
      pageOptions: [5, 10, 15, 50, 100],
      
      sortBy: "",
      sortDesc: false,
      sortDirection: "asc",
      
      filter: null,
      filterOn: [],

      infoModal: {
        id: "info-modal",
        title: "",
        content: "",
      },
    };
  },

  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter((f) => f.sortable)
        .map((f) => {
          return { text: f.label, value: f.key };
        });
    },
    // ...mapState("Data", ["dataPertanyaan"]),
  },

  mounted() {
    // get data
    axios.get(ipBackend + '/kecemasan/all', {
      headers: {
        'accessToken': localStorage.getItem('token')
      }
    })
    .then(res => {
      // console.log('ini test mounted isinya ' + res);
      // console.log(res);
      this.formInput = res.data.respon;
      this.formInput.sort(function(a, b){return a - b})
      this.totalRows = this.formInput.length;
    })
  },

  created() {
    // this.$store.dispatch("Data/listPertanyaan"); // <-- vuex
    // this.dispatchData(); // <-- changed from vuex

  },

  methods: {
    // dispatchData() { // get data on created
    //   axios.get(ipBackend + '/kecemasan/all', {
    //     headers: {
    //       'accessToken': localStorage.getItem('token')
    //     }
    //   })
    //   .then(res => {
    //     console.log(`ini test mounted isinya ${res}`);
    //     console.log(res);
    //     this.formInput = res.data.respon;
    //   })
    // },

    editInfo(item, index, button) {
      this.infoModal.title = `EDIT DATA MASTER KECEMASAN`;
      this.infoModal.content = item;
      this.idEdit = item.id;
      this.editPertanyaan = item.pertanyaan;
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },

    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
    },

    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },

    addQs() {
      let vm = this;
      axios.post(ipBackend + "/kecemasan/register", {
        pertanyaan: this.addPertanyaan.pertanyaan,
        descending: this.addPertanyaan.descending,
      }, {
        headers: {
          accessToken: localStorage.getItem("token"),
        },
      })
      .then(res => {
        // console.log(res.data);
        alert("berhasil");
        vm.formInput.unshift(res.data);
        vm.$root.$emit("bv::hide::modal", "modal-1");
        // vm.$store.dispatch("Data/listPertanyaan");
        vm.addPertanyaan = {};
      })
      .catch(err => {
        console.log(err);
      });
    },

    editQs() {
      let vm = this;
      axios.post("http://147.139.169.33:8805/kecemasan/update/" + vm.idEdit, {
        pertanyaan: vm.editPertanyaan,
      }, {
        headers: {
          accessToken: localStorage.getItem("token"),
        },
      })
      .then(() => {
        // console.log(res.data);
        alert("berhasil");
        // vm.$store.dispatch("Data/listPertanyaan");
        let idNew = vm.formInput.findIndex((o) => o.id === vm.idEdit);
        vm.formInput[idNew].pertanyaan = vm.editPertanyaan;
        // vm.formInput.unshift(res.data);
        // console.log(`ini ${vm.idNew}`);
        // console.log(`ini ${vm.formInput[idNew].pertanyaan}`);
        vm.$root.$emit("bv::hide::modal", "info-modal");
      })
      .catch(err=> {
        console.log(err);
      });
    },

    delQs(idData) {
      // console.log(`ini delQs idData ${idData}`);
      let vm = this;
      axios.delete(ipBackend + "/kecemasan/delete/" + idData, {
        headers: {
          accesstoken: localStorage.getItem("token"),
        },
      })
      .then(() => {
        // console.log(res);
        alert("berhasil");
        // vm.$store.dispatch("Data/listPertanyaan");
        let idParam = vm.formInput.findIndex((o) => o.id === idData);
        vm.formInput.splice(idParam, 1);
        vm.$root.$emit("bv::hide::modal");
      })
      .catch(function (error) {
        console.log(error);
      });
    },

  },
};
</script>

<style scoped>
</style>