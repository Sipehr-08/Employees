<template>
  <div class="home container" >
    <h1 class="text-center mt-3 pb-2 bg-dark text-white text-italic" >STATISTICS</h1>
    <b-card-group deck  class='mt-4 text-center'>
      <b-card
        bg-variant="dark"
        text-variant="white"
        title-tag="h5"
        title="Number of employees"
        img-src="https://www.flaticon.com/svg/static/icons/svg/2405/2405283.svg"
        img-alt="Image"
        img-top
        class='mb-5 pt-5  pl-5 pr-5'
      >
        <b-card-text text-tag="h3" class="text-center">{{ STAFF.length }}</b-card-text>
      </b-card>
      <b-card
        bg-variant="dark"
        text-variant="white"
        title-tag="h5"
        title="Number of man"
        img-src="https://www.flaticon.com/svg/static/icons/svg/3048/3048122.svg"
        img-alt="Image"
        img-top
        class='mb-5 pt-5 pl-5 pr-5'
      >
        <b-card-text text-tag="h3" class="text-center">{{
          this.STAFF.filter((x) => x.sex === "man").length
        }}</b-card-text>
      </b-card>

      <b-card
        bg-variant="dark"
        text-variant="white"
        title-tag="h5"
        title="Number of woman"
        img-src="https://www.flaticon.com/svg/static/icons/svg/3048/3048163.svg"
        img-alt="Image"
        img-top
        class='mb-5 pt-5 pl-5 pr-5'
      >
        <b-card-text text-tag="h3" class="text-center">{{
          this.STAFF.filter((x) => x.sex === "woman").length
        }}</b-card-text>
      </b-card>
    </b-card-group>
    <b-card-group deck text-center>
      <b-card
        bg-variant="dark"
        text-variant="white"
        title-tag="h6"
        title="Number of employees in IT department"
        img-src="https://www.flaticon.com/svg/static/icons/svg/1055/1055683.svg"
        img-alt="Image"
        img-top
        class='mb-5 pt-5 pl-3 pr-3'
      >
        <b-card-text text-tag="h3" class="text-center">{{
          this.STAFF.filter((x) => x.departament === "IT").length
        }}</b-card-text>
      </b-card>
      <b-card
        bg-variant="dark"
        text-variant="white"
        title-tag="h6"
        title="Number of employees in Accounting department"
        img-src="https://www.flaticon.com/svg/static/icons/svg/3176/3176361.svg"
        img-alt="Image"
        img-top
        class='mb-5 pt-5 pl-3 pr-3'
      >
        <b-card-text text-tag="h3" class="text-center">{{
          this.STAFF.filter((x) => x.departament === "Accounting").length
        }}</b-card-text>
      </b-card>

      <b-card
        bg-variant="dark"
        text-variant="white"
        title-tag="h6"
        title="Number of employees in Marketing department"
        img-src="https://www.flaticon.com/svg/static/icons/svg/3601/3601364.svg"
        img-alt="Image"
        img-top
        class='mb-5 pt-5 pl-3 pr-3'
      >
        <b-card-text text-tag="h3" class="text-center">{{
          this.STAFF.filter((x) => x.departament === "Marketing").length
        }}</b-card-text>
      </b-card>

      <b-card
        bg-variant="dark"
        text-variant="white"
        title-tag="h6"
        title="Average age of employees"
        img-src="https://www.flaticon.com/svg/static/icons/svg/2720/2720537.svg"
        img-alt="Image"
        img-top
        class='mb-5 pt-5 pl-3 pr-3'
      >
        <b-card-text text-tag="h3" class="text-center">
          {{ getCurrentAge() }}
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {
    getCurrentAge() {
      const newObj = this.STAFF.map((x) => {
        return x.birthd;
      });
      let ageArr = [];
      let i = 0;

      for (0; i < newObj.length; i++) {
        const newArr =
          ((new Date().getTime() - new Date(newObj[i])) /
            (24 * 3600 * 365.25 * 1000)) |
          0;
        ageArr.push(newArr);
      }
      const newAgeArr = ageArr.reduce((a, b) => a + b, 0);
      const everageAge = Math.round(newAgeArr / ageArr.length);
      return everageAge;
    },
  },
  computed: {
    ...mapGetters(["STAFF"]),
  },
};
</script>



{
  "employees": [
    {
      "id": 1,
      "fullName": "Jurazoda Sipehr Sadriddin",
      "position": "froend-developer",
      "sex": "man",
      "departament": "IT",
      "birthd": "08.03.2000"
    },
    {
      "id": 2,
      "fullName": "Mirzoev Umar Turaqulovich",
      "position": "accountant-general",
      "sex": "man",
      "departament": "Accounting",
      "birthd": "08.03.2000"
    },
    {
      "id": 3,
      "fullName": "Saidov Abdumanon Magamedovich",
      "position": "froend-developer",
      "sex": "man",
      "departament": "IT",
      "birthd": "08.03.2000"
    },
    {
      "id": 4,
      "fullName": "Kamolov Daler Muminovich",
      "position": "froend-developer",
      "sex": "man",
      "departament": "IT",
      "birthd": "08.03.2000"
    },
    {
      "id": 5,
      "fullName": "Safarova Dilnoza Qurbonovna",
      "position": "froend-developer",
      "sex": "women",
      "departament": "IT",
      "birthd": "08.03.2000"
    },
    {
      "id": 6,
      "fullName": "Shamsova Bonu Mirzoevana",
      "position": "marketer",
      "sex": "women",
      "departament": "Marketing",
      "birthd": "08.03.2000"
    },
    {
      "id": 7,
      "fullName": "Kamolov Daler Muminovich",
      "position": "froend-developer",
      "sex": "man",
      "departament": "IT",
      "birthd": "08.03.2000"
    }
  ]
}
