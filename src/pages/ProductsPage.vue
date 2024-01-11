<script>
export default {
  data() {
    return {
      title: "Products",
    };
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <h1 class="main-title">{{ title }}</h1>
      <div class="carousel-container">
        <div class="left-preview"></div>
        <div class="image-container">
          <img
            src="../../public/cataloghi_maniglie/img_cataloghi/Antique_iron.jpg"
            alt=""
          />
        </div>
        <div class="right-preview"></div>
      </div>
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
    position: relative;

    .main-title {
      padding-bottom: 70px;
    }

    .carousel-container {
      width: 90%;
      height: 400px;
      background-color: #584935;
      position: relative;
      border-radius: 20px;
      display: flex;
      flex-direction: row;
      justify-content: center;

      .image-container {
        img {
          max-height: 100%;
        }
      }
    }
  }
}
</style>
