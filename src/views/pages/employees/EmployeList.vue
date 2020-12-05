<template>
  <div>
    <div class="container">
      <div>
        <div><span class="ml-5 ">Filter:</span>
          <b-dropdown id="dropdown-1" variant="info" text="Department" class="m-md-2">
            <b-dropdown-item @click="filter(it)">IT</b-dropdown-item>
            <b-dropdown-item @click="filter(account)"
              >Accounting</b-dropdown-item
            >
            <b-dropdown-item @click="filter(mark)">Marketing</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item @click="filterCancel()">All</b-dropdown-item>
          </b-dropdown>
          <b-dropdown id="dropdown-1" variant="info" text="Gender" class="m-md-2">
            <b-dropdown-item @click="filterBySex(man)">Mans</b-dropdown-item>
            <b-dropdown-item @click="filterBySex(woman)"
              >Womans</b-dropdown-item
            >
            <b-dropdown-item @click="filterCancel()">All</b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
      <b-container fluid='lg'>
       <b-row>
      <staff-list
        v-for="row in pogination()"
        :key="row.id"
        :staff_data="row"
      ></staff-list>
       </b-row> 
      </b-container>
      <div class="overflow-auto mt-5 pb-3">
        <b-pagination-nav
          :link-gen="linkGen"
          :number-of-pages="3"
          v-model="thisPage"
          align="center"
          use-router
        ></b-pagination-nav>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import StaffList from "../../components/StaffList";

export default {
  data() {
    return {
      it: "IT",
      mark: "Marketing",
      account: "Accounting",
      woman: "woman",
      man: "man",
      parPage: 6,
      thisPage: 1,
    };
  },
  components: {
    StaffList,
  },
  methods: {
    filter(it) {
      this.$store.commit("FILTER_BY_DEPARTAMENT", it);
    },
    linkGen(pageNum) {
      return pageNum === 1 ? "?" : `?page=${pageNum}`;
    },
    pogination() {
      const from = (this.thisPage - 1) * this.parPage,
        to = from + 6;
      return this.PERSONNEL.slice(from, to);
    },

    filterBySex(sex) {
      this.$store.commit("FILTER_BY_SEX", sex);
    },

    filterCancel() {
      this.$store.commit("FILTER_CANCEL");
    },
  },
  computed: {
    ...mapGetters(["PERSONNEL"]),
  },
};
</script>
