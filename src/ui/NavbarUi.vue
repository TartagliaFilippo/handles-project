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
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" :to="{ name: 'homepage' }"
        >Le Maniglie di Tartaglia Stefano</RouterLink
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <font-awesome-icon :icon="['fas', 'bars']" style="color: #c9c9c9" />
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarNavDropdown"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link" :to="{ name: 'homepage' }"
              >Home</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" :to="{ name: 'products' }"
              >Cataloghi</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" :to="{ name: 'contacts' }"
              >Contatti</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" :to="{ name: 'location' }"
              >Dove siamo</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
.bg-body-tertiary {
  background-color: #5a4832 !important;

  .navbar-brand {
    color: #c9c9c9;
  }

  .nav-link {
    color: #c9c9c9;
  }

  .navbar-toggler {
    border-color: #c9c9c9;
  }
}
</style>
