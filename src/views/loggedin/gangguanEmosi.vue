
<template>

    <div id="gangguanEmosi">
        <myheader></myheader>
        <b-container>
            <b-row>
                <b-col md="12" style="margin-top:60px;margin-bottom:60px">
                    <div class="box">
                        <b-row>
                          <b-col md="12">
                            <h3 class="text-center m-t-0 m-b-0"><strong>DATA MASTER GANGGUAN EMOSI</strong></h3>
                          </b-col>
                        </b-row>

                        <b-row class="m-t-15">
                            <b-col md="12">
                                <b-breadcrumb>
                                    <b-breadcrumb-item>
                                        <router-link :to="'dashboard'">
                                            <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
                                            Dashboard
                                        </router-link>
                                    </b-breadcrumb-item>
                                    <b-breadcrumb-item active>Data Master Gangguan Emosi</b-breadcrumb-item>
                                </b-breadcrumb>
                            </b-col>
                        </b-row>

                        <b-row class="m-t-30">
                           <b-col md="12">
                                <b-button v-b-modal.modal-1 variant="primary">Tambah Data</b-button>
                           </b-col>
                        </b-row>

                        <b-row class="m-t-15">
                            <b-col lg="12">
                                <b-alert show variant="primary" class="m-b-0">
                                    <b-form-group
                                        label="Urutkan"
                                        label-for="sortBySelect"
                                        class="m-t-15"
                                        style="font-weight:bold;"

                                        >
                                        <b-input-group>
                                            <b-form-select v-model="sortBy" id="sortBySelect" :options="sortOptions" class="w-75">
                                            <template v-slot:first>
                                                <option value="">-- Nama Kolom --</option>
                                            </template>
                                            </b-form-select>
                                            <b-form-select v-model="sortDesc" :disabled="!sortBy" class="w-25">
                                            <option :value="false">Kecil-Besar</option>
                                            <option :value="true">Besar-Kecil</option>
                                            </b-form-select>
                                        </b-input-group>
                                    </b-form-group>

                                    <b-form-group
                                        label="Pencarian"
                                        label-for="filterInput"
                                        style="font-weight:bold;"
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
                                            <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                                            </b-input-group-append>
                                        </b-input-group>
                                    </b-form-group>

                                    <b-form-group
                                        label="Pencarian Berdasarkan"
                                        description="Hilangkan semua centang, jika ingin semua kolom"
                                        style="font-weight:bold;">
                                        <b-form-checkbox-group v-model="filterOn">
                                            <b-form-checkbox value="">Pertanyaan Gangguan Emosi</b-form-checkbox>
                                         
                                        </b-form-checkbox-group>
                                    </b-form-group>
                                </b-alert>
                            </b-col>
                        </b-row>

                        <b-table
                            show-empty
                            bordered
                            hover
                            :items="items"
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
                            <!-- <template v-slot:cell(name)="row">
                                {{ row.value.first }} {{ row.value.last }}
                            </template> -->

                            <template v-slot:cell(actions)="row">
                                <b-button size="sm" variant="warning" @click="info(row.item, row.index, $event.target)" class="mr-1">
                               Edit
                                </b-button>
                                 <b-button size="sm" variant="danger" @click="hapus(row.item.id)" class="mr-1">
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
                            <!-- <pre>{{ infoModal.content.namaPenyakit }}</pre> -->
                             <b-form class="bv-example-row">
                                <b-form-group 
                                label="Pertanyaan" 
                                >
                                <!-- {{infoModal.content.namaPenyakit}}
                                 -->
                                   
                                  <b-form-input
                                  v-model="gangguanEmosi"
                                    required
                                    placeholder=""
                     
                                  ></b-form-input>
                                    <b-button @click="edit" variant="primary" class="m-t-15">Simpan</b-button>
                                </b-form-group>
                                
                            </b-form>
                        </b-modal>
                    </div>
                    
                </b-col>
            </b-row>
        </b-container>

        <b-modal id="modal-1" hide-footer centered title="TAMBAH DATA MASTER GANGGUAN EMOSI">
            <b-form class="bv-example-row">
                <b-form-group 
                label="Pertanyaan" 
                >
                  <b-form-input
                  v-model="depresi"
                    required
                    placeholder=""
                   
                  ></b-form-input>
                    <b-button @click="tambah" variant="primary" class="m-t-15">Simpan</b-button>
                </b-form-group>
                
            </b-form>
        </b-modal>

       
    </div>
    
</template>
<script>

import myheader from "../../components/header"
// import axios from 'axios';
export default {
    name:"gangguanEmosi",
    components:{
        myheader
    },
    data() {
      return {
        // namaPenyakit: '',
        // idChoose: '',
        // namaPenyakitEdit:'',
        items: [
         {  pertanyaan: 'Data Pertanyaannya'}
        ],
        fields: [
        //   { key: 'namaPenyakit', label: 'Nama Penyakit', sortable: true, sortDirection: 'desc' },
          { key: 'pertanyaan', label: 'Pertanyaan', sortable: true, sortDirection: 'desc' },
          // { key: 'age', label: 'Person age', sortable: true, class: 'text-center' },
          // {
          //   key: 'isActive',
          //   label: 'is Active',
          //   formatter: (value) => {
          //     return value ? 'Yes' : 'No'
          //   },
          //   sortable: true,
          //   sortByFormatted: true,
          //   filterByFormatted: true
          // },
          { key: 'actions', label: 'Actions' }
        ],
        totalRows: 1,
        currentPage: 1,
        perPage: 5,
        pageOptions: [5, 10, 15, 50, 100],
        sortBy: '',
        sortDesc: false,
        sortDirection: 'asc',
        filter: null,
        filterOn: [],
        infoModal: {
          id: 'info-modal',
          title: '',
          content: ''
        }
      }
    },
    computed: {
      sortOptions() {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return { text: f.label, value: f.key }
          })
      }
    },
    mounted() {
      // Set the initial number of items
    
        // axios.get('http://sideku.org:8801/penyakit/all',{
        //    headers: {
        //           'accesstoken': localStorage.getItem('token')
        //       }
        // }).then(data=>{
        //        console.log(data)
        //         this.items = data.data.respon
        //          this.totalRows = this.items.length
        //       })
    },
    methods: {
      info(item, index, button) {
        this.infoModal.title = `EDIT DATA MASTER GANGGUAN EMOSI`
        // this.infoModal.content = item
        // console.log( item.namaPenyakit)
        //keluarkan model sesuai id
        // this.idChoose = item.id
        // this.namaPenyakitEdit = item.namaPenyakit
        this.$root.$emit('bv::show::modal', this.infoModal.id, button)
      },
      resetInfoModal() {
        this.infoModal.title = ''
        this.infoModal.content = ''
      },
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      },
    
    //   tambah(){
    //          let vm = this;
    //        axios.post('http://sideku.org:8801/penyakit/register', {
    //              namaPenyakit: this.namaPenyakit
               
    //           },{
    //               headers: {
    //                       'accesstoken': localStorage.getItem('token')
    //                   }
    //             })
    //           .then(function (response) {
    //             console.log(response);
    //               alert('berhasil')
    //             vm.items.unshift(response.data)
    //             vm.$root.$emit('bv::hide::modal', 'modal-1')
               
    //           })
    //           .catch(function (error) {
    //             console.log(error);
               
    //           });
    //   },

    //     edit(){
    //         let vm = this;
    //        axios.patch('http://sideku.org:8801/penyakit/'+this.idChoose, {
    //              namaPenyakit: this.namaPenyakitEdit
               
    //           },{
    //           headers: {
    //                   'accesstoken': localStorage.getItem('token')
    //               }
    //         })
    //           .then(function (response) {
    //             console.log(response);
    //             //  console.log(vm.items)
    //             alert('berhasil')
    //             let idx = vm.items.findIndex(o => o.id === vm.idChoose );
    //             // console.log(idx)
    //             vm.items[idx].namaPenyakit = vm.namaPenyakitEdit
    //             vm.$root.$emit('bv::hide::modal')
               
    //           })
    //           .catch(function (error) {
    //             console.log(error);
               
    //           });
    //   },
    //        hapus(id){
    //             let vm = this;
    //        axios.delete('http://sideku.org:8801/penyakit/delete/'+id,{
    //           headers: {
    //                   'accesstoken': localStorage.getItem('token')
    //               }
    //         })
    //           .then(function (response) {
    //             console.log(response);
    //             alert('berhasil')
    //             let idx = vm.items.findIndex(o => o.id === id );
    //             vm.items.splice(idx, 1);
    //             // this.$root.$emit('bv::show::modal')
               
    //           })
    //           .catch(function (error) {
    //             console.log(error);
               
    //           });
    //   }
    }
}


</script>
<style scoped>

</style>