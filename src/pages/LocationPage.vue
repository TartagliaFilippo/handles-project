<script>
export default {
  data() {
    return {
      title: "Location",
    };
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <h1 class="main-title">{{ title }}</h1>
      <div class="location-container"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  min-height: 100vh;
  .container {
    width: 70%;
    margin: 0 auto;

    .main-title {
      padding: 1rem 0 5rem;
      text-align: center;
    }
    .location-container {
      width: 100%;
      height: 70vh;
      border: 1px solid white;
    }
  }
}
</style>
