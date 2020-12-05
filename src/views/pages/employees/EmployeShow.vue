<template>
  <div class="container">
    <b-card
      class="overflow-hidden mt-5 bg-secondary"
      style="max-width: 1200px"
      v-if="show"
    >
      <b-row cols-md="12">
        <b-col class="bg-info">
          <b-card-img :src="imgUrl" alt="Image" class="rounded-0"></b-card-img>
        </b-col>
        <b-col class="bg-light">
          <b-card-body :title="EMPLOYE.fullName" title-tag="h1" class="pt-5">
            <b-card-text text-tag="h3"
              ><span class="text-dark">Departament: </span>
              {{ EMPLOYE.departament }}</b-card-text
            >
            <b-card-text text-tag="h3"
              ><span class="text-dark">Position: </span>
              {{ EMPLOYE.position }}</b-card-text
            >
            <b-card-text text-tag="h3"
              ><span class="text-dark">Sex: </span>
              {{ EMPLOYE.sex }}</b-card-text
            >
            <b-card-text text-tag="h3"
              ><span class="text-dark">Born: </span>
              {{ EMPLOYE.birthd }}</b-card-text
            >
            <b-button class="m-4 mt-5" v-b-toggle.sidebar-backdrop
              ><b-icon icon="pencil-square"></b-icon
            ></b-button>
            <b-button class="m-4 mt-5" variant="danger" @click="deleteById"
              ><b-icon icon="trash-fill"></b-icon
            ></b-button>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>

    <b-sidebar
      id="sidebar-backdrop"
      width="500px"
      title="Edit Employee"
      backdrop-variant="dark"
      backdrop
      right
      shadow
    >
      <div class="px-3 py-2">
        <b-card bg-variant="light">
          <b-form>
            <b-form-group
              label-cols-lg="12"
              label-size="xl"
              label-class="font-weight-bold pt-0"
              class="mb-0"
            >
              <b-form-group
                id="input-group-1"
                label-cols-sm="3"
                label="Full name:"
                label-for="input-1"
                label-align-sm=""
              >
                <b-form-input
                  class="text-capitalize"
                  id="input-1"
                  type="text"
                  :class="{ 'is-invalid': $v.EMPLOYE.fullName.$error }"
                  @blur="$v.EMPLOYE.fullName.$touch()"
                  v-model="EMPLOYE.fullName"
                ></b-form-input>
                <p
                  class="invalid-feedback"
                  v-if="!$v.EMPLOYE.fullName.required"
                >
                  Fill this field please
                </p>
              </b-form-group>
              <b-form-group
                id="input-group-1"
                label-cols-sm="3"
                label="Department:"
                label-for="input-1"
                label-align-sm=""
              >
                <select
                  v-model="EMPLOYE.departament"
                  class="form-control"
                  :class="{ 'is-invalid': $v.EMPLOYE.departament.$error }"
                  @blur="$v.EMPLOYE.departament.$touch()"
                >
                  <option value="IT">IT</option>
                  <option value="Accounting">Accounting</option>
                  <option value="Marketing">Marketing</option>
                </select>
                <p
                  class="invalid-feedback"
                  v-if="!$v.EMPLOYE.departament.required"
                >
                  Select any options
                </p>
              </b-form-group>
              <b-form-group
                label-cols-sm="3"
                label="Position"
                label-align-sm="left"
                label-for="nested-state"
              >
                <b-form-input
                  v-model="EMPLOYE.position"
                  placeholder=""
                  type="text"
                  id="nested-state"
                  @blur="$v.EMPLOYE.position.$touch()"
                  :class="{ 'is-invalid': $v.EMPLOYE.position.$error }"
                ></b-form-input>
                <p
                  class="invalid-feedback"
                  v-if="!$v.EMPLOYE.position.required"
                >
                  Fill this field please
                </p>
              </b-form-group>
              <b-form-group
                label-cols-sm="3"
                label="Sex:"
                label-align-sm="left"
                label-for="nested-state"
              >
                <b-form-radio-group
                  id="radio-group-2"
                  v-model="EMPLOYE.sex"
                  name="radio-sub-component"
                  :class="{ 'is-invalid': $v.EMPLOYE.sex.$error }"
                  @blur="$v.EMPLOYE.sex.$touch()"
                >
                  <b-form-radio class="pt-2" value="man">man</b-form-radio>
                  <b-form-radio value="woman">woman</b-form-radio>
                </b-form-radio-group>
                <p class="invalid-feedback" v-if="!$v.EMPLOYE.sex.required">
                  Select any option
                </p>
              </b-form-group>

              <b-form-group
                id="input-group-3"
                label-cols-sm="3"
                label="Born:"
                label-align-sm="left"
                label-for="input-3"
              >
                <b-form-input
                  id="type-date"
                  v-model="EMPLOYE.birthd"
                  type="date"
                  :class="{ 'is-invalid': $v.EMPLOYE.birthd.$error }"
                  @blur="$v.EMPLOYE.birthd.$touch()"
                ></b-form-input>
                <p class="invalid-feedback" v-if="!$v.EMPLOYE.birthd.required">
                  Fill this field please
                </p>
              </b-form-group>
              <b-button
                v-b-toggle.sidebar-backdrop
                @click.prevent="editFunc(id, EMPLOYE)"
                close-label
                class="w-100 mb-3"
                type="submit"
                variant="success"
                >Save</b-button
              >
              <b-button
                v-b-toggle.sidebar-backdrop
                class="w-100 mb-3"
                variant="danger"
                >Cancel</b-button
              >
            </b-form-group>
          </b-form>
        </b-card>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import api from "@/services/EmployeDataService";
import { mapActions, mapGetters } from "vuex";
import { required } from "vuelidate/lib/validators";
export default {
  props: ["id", "sex"],
  data() {
    return {
      test: "08.03.2000",
      show: true,
      edit: false,
      imgUrl:
        this.sex === "man"
          ? "https://www.flaticon.com/svg/static/icons/svg/3048/3048122.svg"
          : "https://www.flaticon.com/svg/static/icons/svg/3048/3048163.svg",
    };
  },
  validations: {
    EMPLOYE: {
      fullName: { required },
      departament: { required },
      position: { required },
      sex: { required },
      birthd: { required },
    },
  },
  methods: {
    ...mapActions(["GET_BY_ID", "DELETE_BY_ID", "EDIT_BY_ID", "GET_EMPLOYEES"]),

    deleteById() {
      api.deleteById(this.id);
      this.$router.push("/employeList");
      this.GET_EMPLOYEES();
    },
    editFunc(id, data) {
      if (!this.$v.$invalid) {
        api.update(id, data);
      }
    },
    edited() {},
  },

  computed: {
    ...mapGetters(["EMPLOYE"]),
  },
  mounted() {
    this.GET_BY_ID(this.id);
  },
};
</script>