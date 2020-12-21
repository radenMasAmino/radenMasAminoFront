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
  },
  methods: {
    detail(idx) {
      this.$router.push({path:'screeninguser', query: { idx }})
    },

    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
};
</script>
<style scoped>
</style>