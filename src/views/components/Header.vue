<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="navbar-nav mr-auto">
        <router-link
          tag="li"
          class="nav-item"
          exact
          to="/"
          active-class="active"
          ><a class="nav-link">Dashboard</a></router-link
        >
        <router-link
          tag="li"
          class="nav-item"
          :to="{ name: 'EmployeList' }"
          active-class="active"
          ><a class="nav-link">Employee list</a></router-link
        >
      </div>
      <b-button variant="primary" v-b-toggle.sidebar-backdrop-1
        ><b-icon icon="person-plus"></b-icon
      ></b-button>
    </nav>
   <add-form></add-form>
  </div>
</template>

<script>
  import AddForm from "../components/AddForm"
export default {
  components: {
    AddForm
  }
};
</script>