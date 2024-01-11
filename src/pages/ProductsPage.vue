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
        <div class="left-button">
          <font-awesome-icon :icon="['fas', 'angle-left']" />
        </div>
        <div class="left-preview">
          <img
            src="../../public/cataloghi_maniglie/img_cataloghi/Antique_iron.jpg"
            alt=""
          />
        </div>
        <div class="image-container">
          <img
            src="../../public/cataloghi_maniglie/img_cataloghi/Antique_iron.jpg"
            alt=""
          />
        </div>
        <div class="right-preview">
          <img
            src="../../public/cataloghi_maniglie/img_cataloghi/Antique_iron.jpg"
            alt=""
          />
        </div>
        <div class="right-button">
          <font-awesome-icon :icon="['fas', 'angle-right']" />
        </div>
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
      padding: 1rem 0 5rem;
    }

    .carousel-container {
      width: 90%;
      height: 400px;
      padding: 2rem 0;
      background-color: #584935;
      position: relative;
      border-radius: 20px;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;

      .image-container {
        img {
          max-height: 100%;
        }
      }

      .left-preview,
      .right-preview {
        scale: 0.8;
        img {
          max-height: 100%;
        }
      }
    }
  }
}
</style>
