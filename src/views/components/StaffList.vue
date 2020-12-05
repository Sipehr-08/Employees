<template>
  <b-col sm="12" md="6" lg="4" class="mt-4 mb-10">
    <b-card
      @click="
        $router.push({ name: 'EmployeShow', params: { id: staff_data.id, sex: staff_data.sex } })
      "
      class="p-3 pb-5 bg-dark"
      :img-src="imgUrl"
      img-alt="Card Image"
      text-variant="white"
      :title="staff_data.fullName"
      title-tag="h5"
      :sub-title="staff_data.position"
      img-top
    >
    </b-card>
  </b-col>
</template>

<script>
export default {
  name: "staff-list",
  props: {
    staff_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      imgUrl: "turb",
    };
  },
  methods: {
    changeUrl () {
      if (this.staff_data.sex === "man") {
        this.imgUrl =
          "https://www.flaticon.com/svg/static/icons/svg/3048/3048122.svg";
      } else if (this.staff_data.sex === "woman") {
        this.imgUrl = "https://www.flaticon.com/svg/static/icons/svg/3048/3048163.svg"
      }
      
    },
  },
  mounted() {
    this.changeUrl();
  },
};
</script>


