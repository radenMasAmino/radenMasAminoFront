<template>
  <div id="user">
    <myheader></myheader>
    <b-container>
      <b-row>
        <b-col md="12" style="margin-top: 60px; margin-bottom: 60px">
          <div class="box">
            <b-row>
              <b-col md="12">
                <h3 class="text-center m-t-0 m-b-0">
                  <strong>DATA USER</strong>
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
                  <b-breadcrumb-item active>Data User</b-breadcrumb-item>
                </b-breadcrumb>
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
              <template v-slot:cell(actions)="row">
                
                <b-button
                  size="sm"
                  variant="success"
                  class="mr-1"
                  @click="detail(row.item.id)"
                  >Detail</b-button
                >

                <b-button
                  size="sm"
                  variant="warning"
                  class="mr-1"
                  v-b-modal.modal-1
                  style="position:relative"
                   @click="popupChat(row.item.id)"
                  >Chat
                  <div style="width:30px;height:30px;background-color:#007bff;border-radius:100%;display:flex;justify-content:center;align-items:center;position:absolute;top:-15px;right:-15px;"><h6 style="margin:0;padding:0;color:#fff"><strong>00</strong></h6></div>
                  </b-button
                >

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
          </div>
        </b-col>
      </b-row>
    </b-container>

    <b-modal id="modal-1" size="lg" title="Chat" hide-footer>
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

      <b-row>
        <b-col md="12" lg="12">
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
        </b-col>
      </b-row>
    </b-modal>
  </div>

  
</template>


<script>
import myheader from "../../components/header";
import axios from "axios";
import { ipBackend } from "@/config.js";
export default {
  name: "user",
  components: {
    myheader,
  },
  data() {
    return {
      items: [],
       chat: [],
       isi:'',
       selectedUserId:0,
      responden: [],
      fields: [
        { key: "id", label: "Id", sortable: true, sortDirection: "desc" },
        { key: "nama", label: "Nama", sortable: true, sortDirection: "desc" },
        {
          key: "alamat",
          label: "Alamat",
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
      userId: 0,
    };
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
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter((f) => f.sortable)
        .map((f) => {
          return { text: f.label, value: f.key };
        });
    },
  },
  mounted() {
    axios.get(ipBackend + "/users/all", {
        headers: {
          accessToken: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        this.items = res.data.respon;
        this.items.sort(function (a, b) {
          return b.id - a.id;
        });
        this.totalRows = this.items.length;
      });

          axios.get(ipBackend + '/users/profil', {
            headers: {
                'accessToken': localStorage.getItem('token')
            }
        })
        .then(res => {
        // console.log('mounted profile', res);
        // console.log(res.data.respon);
        this.responden = res.data.respon[0]
  
         
        // console.log(this.responden.id);
        })
        .catch(err => {
            console.log('mounted nya', err);
        })
  },
  methods: {
    detail(idx) {
      this.$router.push({path:'screeninguser', query: { idx }})
    },

    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    popupChat(userId){
         this.$socket.emit('join', userId)
           this.$socket.emit('allchat', userId, 1)
           this.selectedUserId = userId
    },

       kirimChat(){
            this.$socket.emit('chat', this.selectedUserId, this.isi, this.responden.id)
            this.isi = '';
        }
  },
};
</script>
<style scoped>
</style>