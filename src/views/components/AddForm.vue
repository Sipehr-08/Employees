<template>
  <b-sidebar
    id="sidebar-backdrop-1"
    width="500px"
    title="New Employee"
    backdrop-variant="dark"
    backdrop
    right
    shadow
  >
    <div class="px-3 py-2">
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
              :class="{ 'is-invalid': $v.NEWEMPLOYEE.fullName.$error }"
              @blur="$v.NEWEMPLOYEE.fullName.$touch()"
              v-model="NEWEMPLOYEE.fullName"
            ></b-form-input>
            <p
              class="invalid-feedback"
              v-if="!$v.NEWEMPLOYEE.fullName.required"
            >
              Fill this field please
            </p>
          </b-form-group>
          <b-form-group
            id="input-group-1"
            label-cols-sm="3"
            label="Deportament:"
            label-for="input-1"
          >
            <select
              v-model="NEWEMPLOYEE.departament"
              class="form-control"
              :class="{ 'is-invalid': $v.NEWEMPLOYEE.departament.$error }"
              @blur="$v.NEWEMPLOYEE.departament.$touch()"
            >
              <option value="IT">IT</option>
              <option value="Accounting">Accounting</option>
              <option value="Marketing">Marketing</option>
            </select>
            <p
              class="invalid-feedback"
              v-if="!$v.NEWEMPLOYEE.departament.required"
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
              type="text"
              id="nested-state"
              @blur="$v.NEWEMPLOYEE.position.$touch()"
              :class="{ 'is-invalid': $v.NEWEMPLOYEE.position.$error }"
              v-model="NEWEMPLOYEE.position"
            ></b-form-input>
            <p
              class="invalid-feedback"
              v-if="!$v.NEWEMPLOYEE.position.required"
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
              v-model="NEWEMPLOYEE.sex"
              name="radio-sub-component"
              :class="{ 'is-invalid': $v.NEWEMPLOYEE.sex.$error }"
              @blur="$v.NEWEMPLOYEE.sex.$touch()"
            >
              <b-form-radio class="pt-2" value="man">man</b-form-radio>
              <b-form-radio value="woman">woman</b-form-radio>
            </b-form-radio-group>
            <p class="invalid-feedback" v-if="!$v.NEWEMPLOYEE.sex.required">
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
              v-model="NEWEMPLOYEE.birthd"
              type="date"
              :class="{ 'is-invalid': $v.NEWEMPLOYEE.birthd.$error }"
              @blur="$v.NEWEMPLOYEE.birthd.$touch()"
            ></b-form-input>
            <p class="invalid-feedback" v-if="!$v.NEWEMPLOYEE.birthd.required">
              Fill this field please
            </p>
          </b-form-group>
          <b-button
            v-b-toggle.sidebar-backdrop
            @click.prevent="addFunc"
            class="w-100 mb-3"
            type="submit"
            variant="success"
            >Add</b-button
          >
          <b-button
            v-b-toggle.sidebar-backdrop-1
            class="w-100 mb-3"
            variant="danger"
            >Cancel</b-button
          >
        </b-form-group>
      </b-form>
    </div>
  </b-sidebar>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { required } from "vuelidate/lib/validators";
export default {
  methods: {
    ...mapActions(["GET_EMPLOYEES", "ADD"]),
    addFunc() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.ADD();
      }
      console.log("work");
    },
  },
  validations: {
    NEWEMPLOYEE: {
      fullName: { required },
      departament: { required },
      position: { required },
      sex: { required },
      birthd: { required },
    },
  },
  mounted() {
    this.GET_EMPLOYEES();
  },
  computed: {
    ...mapGetters(["NEWEMPLOYEE"]),
  },
};
</script>

<style>
</style>