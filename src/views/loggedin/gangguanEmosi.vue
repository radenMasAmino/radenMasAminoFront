
<template>
  <div id="gangguanEmosi">
    <myheader></myheader>
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
              responsive
            >
              <!-- <template v-slot:cell(name)="row">
                                {{ row.value.first }} {{ row.value.last }}
                            </template> -->

              <template v-slot:cell(actions)="row">
                <b-button
                  size="sm"
                  variant="warning"
                  @click="infoQs(row.item, row.index, $event.target)"
                  class="mr-1"
                >
                  Edit
                </b-button>
                <b-button
                  size="sm"
                  variant="danger"
                  @click="deleteQs(row.item.id)"
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
            <b-modal
              :id="id"
              hide-footer
              centered
              :title="infoModal.title"
              ok-only
              @hide="resetInfoModal"
            >
              <!-- <pre>{{ infoModal.content.namaPenyakit }}</pre> -->
              <b-form class="bv-example-row">
                <b-form-group label="Pertanyaan">
                  <!-- {{infoModal.content.namaPenyakit}}
                                 -->

                  <b-form-input
                    v-model="gangguanEmosiQs"
                    required
                    placeholder=""
                  ></b-form-input>
                  <b-button @click="editQs" variant="primary" class="m-t-15"
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
      title="TAMBAH DATA MASTER GANGGUAN EMOSI"
    >
      <b-form class="bv-example-row">
        <b-form-group label="Pertanyaan">
          <b-form-input
            required
            v-model="gangguanEmosiQs"
            placeholder="Masukan Pertanyaan.."
          ></b-form-input>
          <b-button variant="primary" class="m-t-15" @click="addQs"
            >Simpan</b-button
          >
        </b-form-group>
      </b-form>
    </b-modal>
  </div>
</template>
<script>
import myheader from "../../components/header";
import axios from "axios";
import { ipBackend } from "@/config.js";
export default {
  name: "gangguanEmosi",
  components: {
    myheader,
  },
  data() {
    return {
      gangguanEmosiQs: "",
      idQs: "",
      gangguanEmosiQsEdit: "",
      items: [{ pertanyaan: "Data Pertanyaannya" }],
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
      return this.fields
        .filter((f) => f.sortable)
        .map((f) => {
          return { text: f.label, value: f.key };
        });
    },
  },
  // props: {
  //   id: { type: Number },
  // },
  mounted() {
    axios
      .get(ipBackend + "/depresi/all", {
        headers: {
          accesstoken: localStorage.getItem("token"),
        },
      })
      .then((data) => {
        // console.log(data);
        this.items = data.data.respon;
        this.totalRows = this.items.length;
      });
  },
  methods: {
    infoQs(item, index, button) {
      this.infoModal.title = `EDIT PERTANYAAN GANGGUAN EMOSI`;
      // this.infoModal.id.toString()
      this.idQs = item.id;
      this.infoModal = item;
      this.gangguanEmosiQsEdit = item.gangguanEmosiQs;
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
      console.log(this.idQs);
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
      axios
        .post(
          ipBackend + "/depresi/register",
          {
            pertanyaan: this.gangguanEmosiQs,
          },
          {
            headers: {
              accesstoken: localStorage.getItem("token"),
            },
          }
        )
        .then(function () {
          alert("Berhasil Menambahkan Pertanyaan");
          // vm.items.unshift(response.data);
          vm.$root.$emit("bv::hide:modal", "modal=1");
          // vm.this = '';
          // vm.$router.push({ path: "/depresi" });
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    editQs() {
      let vm = this;
      axios
        .post(
          ipBackend + "/update/" + this.idQs,
          {
            pertanyaan: this.gangguanEmosiQsEdit,
          },
          {
            headers: {
              accesstoken: localStorage.getItem("token"),
            },
          }
        )
        .then(function () {
          alert("Berhasil Mengubah Pertanyaan");
          let idx = vm.items.findIndex((o) => o.id === vm.idQs);
          vm.item[idx].gangguanEmosiQs = vm.gangguanEmosiQsEdit;
          vm.$root.$emit("bv::hide::modal");
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    deleteQs(id) {
      let vm = this;
      axios
        .delete("/delete/" + id, {
          headers: {
            accesstoken: localStorage.getItem("token"),
          },
        })
        .then(function (response) {
          console.log(response);
          alert("Pertanyaan Telah dihapus");
          let idx = vm.items.findIndex((o) => o.id === id);
          vm.items.splice(idx, 1);
          // this.$root.$emit('bv::show::modal')
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