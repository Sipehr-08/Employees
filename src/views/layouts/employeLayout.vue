<template>
  <div>
    <Header />
    <div class="conatainer">
      <router-view />
    </div>
  </div>
</template>
<script>
import Header from "../components/Header";

export default {
  name: "Home",
  components: {
    Header,
  },
};
</script>