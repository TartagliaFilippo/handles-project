<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "Mettiti in contatto con noi",
    };
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <h1>{{ title }}</h1>
      <form action="mailto:pippotartaglia@gmail.com" method="get">
        <label for="email-text">Testo email</label>
        <input type="text" name="email-text" id="email-text" />
        <button>invia</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  min-height: 100vh;

  .container {
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
