<script>
export default {
  data() {
    return {
      isLoading: true,
    };
  },
  methods: {
    onMapLoad() {
      this.isLoading = false;
    },
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <div class="location-container">
        <div class="maps">
          <div class="loading-overlay" v-if="isLoading">
            Caricamento in corso...
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1344.9148652627227!2d11.722232599999991!3d45.74949149999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4778d06945c36aed%3A0x3d1b14918eb5af0!2sLe%20Maniglie%20Di%20Tartaglia%20Stefano!5e1!3m2!1sit!2sit!4v1705347529511!5m2!1sit!2sit"
            width="100%"
            height="100%"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            @load="onMapLoad"
          ></iframe>
        </div>
        <div class="info-address">
          <h2>Come raggiungerci?</h2>
          <p>Ci troviamo a Bassano del Grappa in Strada Cartigliana 136/A</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  min-height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    width: 70%;
    height: 100%;
    .location-container {
      display: flex;
      justify-content: space-between;
      .maps {
        width: 70%;
        height: 70vh;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        .loading-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(255, 255, 255, 0.8); /* Sfondo trasparente */
          z-index: 10; /* Assicurati che l'overlay sia sopra l'iframe */
        }
      }
      .info-address {
        width: 20%;
        height: fit-content;
        padding: 1rem;
        text-align: center;
        background-color: #958d81;
        border-radius: 1rem;

        h2 {
          margin-bottom: 1rem;
        }
      }
    }
  }
}
</style>
