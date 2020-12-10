
<template>
  <div id="gangguanEmosi">

    <MyHeader></MyHeader>

    <b-container>
      <b-row>
        <b-col md="12" style="margin-top: 60px; margin-bottom: 60px">
          <div class="box">
            <b-row>
              <b-col md="12">
                <h3 class="text-center m-t-0 m-b-0">
                  <strong>DATA MASTER GANGGUAN EMOSI</strong>
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
                    >Data Master Gangguan Emosi</b-breadcrumb-item
                  >
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
                    style="font-weight: bold"
                  >
                    <b-input-group>
                      <b-form-select
                        id="sortBySelect"
                        class="w-75"
                      >
                        <template v-slot:first>
                          <option value="">-- Nama Kolom --</option>
                        </template>
                      </b-form-select>
                      <b-form-select
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
                        >Pertanyaan Gangguan Emosi</b-form-checkbox
                      >
                    </b-form-checkbox-group>
                  </b-form-group>
                </b-alert>
              </b-col>
            </b-row>

            <b-table
              :items="gangguanEmosi"
              :fields="fieldGangguanEmosi"
              show-empty
              bordered
              hover
              id="tableGangguanEmosi"
              responsive
            >

              <template v-slot:cell(actions)="row">
                <b-button
                  size="sm"
                  variant="warning"
                  class="mr-1"
                  @click="editModal(row.item, row.index, $event.target)"
                >
                  Edit
                </b-button>
                <b-button
                  size="sm"
                  variant="danger"
                  class="mr-1"
                  @click="eraseModal(row.item.id)"
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
                    id="perPageSelect"
                    size="sm"
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
            <b-modal
              hide-footer
              centered
              ok-only
              :id="infoModal.id"
              :title="infoModal.title"
              @hide="resetInfoModal"
            >
              <b-form class="bv-example-rtes12345ow">
                <b-form-group label="Pertanyaan">

                  <b-form-input
                    v-model="editPertanyaan"
                    required
                    placeholder=""
                  >
                  </b-form-input>

                  <b-button variant="primary" class="m-t-15" @click="editData" >Simpan</b-button>

                </b-form-group>
              </b-form>
            </b-modal>

            <!-- Delete Modal -->
            <!-- <b-modal
              hide-footer
              centered
              ok-only
              :id="clearModal.id"
              :title="clearModal.title"
              @hide="resetInfoModal"
            >
              <b-form class="bv-example-rtes12345ow">
                <b-form-group label="Pertanyaan">

                  <b-form-input
                    v-model="deletePertanyaan"
                    required
                    placeholder=""
                  >
                  </b-form-input>

                  <b-button variant="primary" class="m-t-15" @click="eraseData" >Hapus</b-button>

                </b-form-group>
              </b-form>
            </b-modal> -->
          </div>
        </b-col>
      </b-row>
    </b-container>

    <b-modal
      id="modal-1"
      hide-footer
      centered
      title="TAMBAH DATA MASTER GANGGUAN EMOSI"
    >
      <b-form class="bv-example-row">
        <b-form-group label="Pertanyaan">
          <b-form-input
            v-model="tambahPertanyaan"
            required
            placeholder="Masukan Pertanyaan.."
          ></b-form-input>
        </b-form-group>
          <b-button variant="primary" class="m-t-15" @click="tambahData">Simpan</b-button
          >
      </b-form>
    </b-modal>
  </div>
</template>
<script>
import MyHeader from "../../components/header";
import axios from "axios";
import { ipBackend } from "@/config.js";

export default {
  name: "gangguanEmosi",
  components: {
    MyHeader,
  },

  data() {
    return {
      gangguanEmosi: [],
      tambahPertanyaan: "",

      editPertanyaan: "",
      idEdit: "",

      // deletePertanyaan: "",
      // idDelete: "",

      fieldGangguanEmosi: [
        { key: 'id', label: 'Id'},
        { key: 'pertanyaan', label: 'Pertanyaan'},
        { key: 'actions', label: 'Actions'},
      ],

      infoModal: {
        id: 'info-modal',
        title: '',
        content: ''
      },

      // clearModal: {
      //   id: 'clear-modal',
      //   title: '',
      //   content: ''
      // },

    }
  },

  mounted() {
    axios.get(ipBackend + '/ggnControlEmosi/all', {
      headers: {
        'accesstoken': localStorage.getItem('token')
      }
    })
    .then(res => {
      this.gangguanEmosi = res.data.respon
      this.gangguanEmosi.sort((a, b) => {return b.id - a.id})
    })
    .catch(err => {
      console.log(`Error on mounted ${err}`);
    })
  },

  methods: {
    tambahData() {
      axios.post(ipBackend + '/ggnControlEmosi/register', {
        pertanyaan: this.tambahPertanyaan
      }, {
        headers: {
          'accesstoken': localStorage.getItem('token')
        }
      })
      .then(res => {
        this.gangguanEmosi.unshift(res.data);
        this.$root.$emit("bv::hide::modal", "modal-1");
      })
      .catch(err => {
        console.log(err);
      })
    },

    editModal(item, index, button) {
      this.infoModal.title = `${index+1}. EDIT DATA GANGGUAN EMOSI NO = ${item.id}`
      this.infoModal.content = item
      this.idEdit = item.id
      this.editPertanyaan = item.pertanyaan
      this.$root.$emit('bv::show::modal', this.infoModal.id, button)
    },

    editData() {
      axios.post(ipBackend + '/ggnControlEmosi/update/' + this.idEdit, {
        pertanyaan: this.editPertanyaan
      }, {
        headers: {
          'accesstoken': localStorage.getItem('token')
        }
      })
      .then(res => {
        console.log(res.data);
        let idE = this.gangguanEmosi.findIndex(o => o.id === this.idEdit );
        this.gangguanEmosi[idE].pertanyaan = this.editPertanyaan;
        this.$root.$emit("bv::hide::modal", "info-modal");
      })
      .catch(err => {
        console.log(err);
      })
    },

    // eraseModal(item, index, button) {
    //   this.clearModal.title = `${index+1}. YAKIN ANDA MAU DELETE = ${item.id}`
    //   this.clearModal.content = item
    //   this.idDelete = item.id
    //   this.deletePertanyaan = item.pertanyaan
    //   this.$root.$emit('bv::show::modal', this.clearModal.id, button)
    // },

    // eraseData(idDelete) {
    //   axios.delete(ipBackend + '/ggnControlEmosi/delete/' + idDelete, {
    //     id: this.idDelete
    //   }, {
    //     headers: {
    //       'accesstoken': localStorage.getItem('token')
    //     }
    //   })
    //   .then(res => {
    //     console.log(res.data);
    //     let idD = this.gangguanEmosi.findIndex(o => o.id === this.idDelete );
    //     this.gangguanEmosi.splice(idD, 1);
    //     this.$root.$emit("bv::hide::modal", "clear-modal");
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })
    // },

    eraseModal(idData) {
      axios.delete(ipBackend + "/ggnControlEmosi/delete/" + idData, {
        headers: {
          accesstoken: localStorage.getItem("token"),
        },
      })
      .then(res => {
        console.log(res.data);
        alert("berhasil");
        let idDelete = this.gangguanEmosi.findIndex((o) => o.id === idData);
        this.gangguanEmosi.splice(idDelete, 1);
        this.$root.$emit("bv::hide::modal");
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    
    resetInfoModal() {
      this.infoModal.title = ''
      this.infoModal.content = ''
    },

  },
  
};
</script>

<style scoped>
</style>