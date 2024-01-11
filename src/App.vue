<script>
import NavbarUi from "./ui/NavbarUi.vue";
import HomePage from "./pages/HomePage.vue";

export default {
  data() {
    return {};
  },

  components: {
    NavbarUi,
  },
};
</script>

<template>
  <NavbarUi />
  <div class="wrapper-app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.wrapper-app {
  padding-top: 80px;
  background-color: #4a4238;
}
</style>
