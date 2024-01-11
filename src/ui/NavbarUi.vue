<script>
import { RouterLink } from "vue-router";

export default {
  data() {
    return {};
  },
  components: { RouterLink },
};
</script>

<template>
  <nav class="navbar-main">
    <div class="container">
      <div class="logo">
        <RouterLink :to="{ name: 'homepage' }"
          >Le Maniglie di Tartaglia Stefano</RouterLink
        >
      </div>
      <div class="items-navbar">
        <RouterLink :to="{ name: 'homepage' }">Home</RouterLink>
        <RouterLink :to="{ name: 'products' }">Products</RouterLink>
        <RouterLink :to="{ name: 'contacts' }">Contacts</RouterLink>
        <RouterLink :to="{ name: 'location' }">Location</RouterLink>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
.navbar-main {
  background-color: #36312a;
  color: #c8c7bc;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  align-items: center;

  .container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .logo {
      width: 30%;
      font-size: 27px;

      a {
        text-decoration: none;
        color: #c8c7bc;
      }
    }

    .items-navbar {
      width: 50%;
      display: flex;
      justify-content: flex-end;
      gap: 40px;
      font-size: 25px;

      a {
        text-decoration: none;
        color: #c8c7bc;
      }
    }
  }
}
</style>
