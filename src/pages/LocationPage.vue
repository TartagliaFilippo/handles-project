<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "Location",
    };
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <div class="wrapper">
    <h1>{{ title }}</h1>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  min-height: 100vh;
}
</style>
