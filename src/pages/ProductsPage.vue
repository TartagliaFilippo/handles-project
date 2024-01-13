<script>
export default {
  data() {
    return {
      title: "Products",
      activeSlide: 0,
      autoSlide: true,
      imageList: [
        {
          name: "Antique Iron",
          url: "../../public/image-cataloghi/antique-iron.jpg",
        },
        {
          name: "Arredo Giardino",
          url: "../../public/image-cataloghi/arredo-giardino.jpg",
        },
        {
          name: "Arte e Design",
          url: "../../public/image-cataloghi/arte-design.jpg",
        },
        {
          name: "Catalogo Generale",
          url: "../../public/image-cataloghi/catalogo-generale.jpg",
        },
        {
          name: "Cucine e Dintorni",
          url: "../../public/image-cataloghi/catalogo-cucine.jpg",
        },
        {
          name: "Design e Colore",
          url: "../../public/image-cataloghi/design-colore.jpg",
        },
        {
          name: "l'Officina dello Stile",
          url: "../../public/image-cataloghi/officina-dello-stile.jpg",
        },
      ],
    };
  },

  created() {
    this.startAutoSlide();
  },

  methods: {
    goPrev() {
      if (this.activeSlide === 0) {
        this.activeSlide = this.imageList.length - 1;
      } else {
        this.activeSlide--;
      }
      this.handleAutoSlide();
    },

    goNext() {
      if (this.activeSlide === this.imageList.length - 1) {
        this.activeSlide = 0;
      } else {
        this.activeSlide++;
      }
      this.handleAutoSlide();
    },

    selectThumb(index) {
      this.activeSlide = index;
      this.stopAutoSlide();
    },

    startAutoSlide() {
      if (this.autoSlide === true) {
        this.stopAutoSlide();
        this.autoSlideInterval = setInterval(() => {
          this.goNext();
        }, 2000);
      }
    },

    stopAutoSlide() {
      clearInterval(this.autoSlideInterval);
    },

    handleAutoSlide() {
      if (this.autoSlide === false) {
        this.stopAutoSlide();
      } else {
        this.startAutoSlide();
      }
    },

    handlePrevClick() {
      this.goPrev();
      this.autoSlide = false;
    },

    handleNextClick() {
      this.goNext();
      this.autoSlide = false;
    },
  },

  computed: {
    prevIndex() {
      // Calcola l'indice dell'immagine precedente
      return this.activeSlide === 0
        ? this.imageList.length - 1
        : this.activeSlide - 1;
    },
    nextIndex() {
      // Calcola l'indice dell'immagine successiva
      return this.activeSlide === this.imageList.length - 1
        ? 0
        : this.activeSlide + 1;
    },
  },

  beforeUnmount() {
    this.stopAutoSlide();
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <h1 class="main-title">{{ title }}</h1>
      <div class="carousel-container">
        <div class="left-button" @click="handlePrevClick">
          <font-awesome-icon :icon="['fas', 'angle-left']" />
        </div>
        <div
          class="container-slider"
          v-for="(image, index) in imageList"
          :key="index"
          :class="{ active: index === activeSlide }"
        >
          <div class="left-preview">
            <img :src="imageList[prevIndex].url" alt="" />
          </div>
          <div class="main-image">
            <img :src="image.url" alt="" />
          </div>
          <div class="right-preview">
            <img :src="imageList[nextIndex].url" alt="" />
          </div>
        </div>
        <div class="right-button" @click="handleNextClick">
          <font-awesome-icon :icon="['fas', 'angle-right']" />
        </div>
      </div>
      <div class="container-thumbs">
        <div
          class="thumb"
          v-for="(thumb, index) in imageList"
          :key="index"
          :class="{ active: index === activeSlide }"
          @click="selectThumb(index)"
        ></div>
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

    .main-title {
      padding: 1rem 0 5rem;
      text-align: center;
    }
    .carousel-container {
      width: 100%;
      height: 70vh;
      background-color: #584935;
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      border-radius: 1rem;
      .left-button,
      .right-button {
        height: 100%;
        display: flex;
        align-items: center;
        position: absolute;
        padding: 0 1rem;
        background-color: #ffff;
        opacity: 0.5;
        cursor: pointer;
      }
      .left-button {
        left: 0;
        border-radius: 1rem 0 0 1rem;
      }
      .right-button {
        right: 0;
        border-radius: 0 1rem 1rem 0;
      }
      .container-slider {
        width: 100%;
        height: 90%;
        display: none;
        &.active {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }
        .left-preview,
        .right-preview {
          width: 33%;
          height: 100%;
          transform: scale(0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0.3;
          img {
            max-width: 100%;
            max-height: 100%;
          }
        }
        .main-image {
          width: 33%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          img {
            max-width: 100%;
            max-height: 100%;
          }
        }
      }
    }
    .container-thumbs {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      margin: 1rem 0;
      .thumb {
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background-color: #ffff;
        &.active {
          opacity: 0.3;
        }
      }
    }
  }
}
</style>
