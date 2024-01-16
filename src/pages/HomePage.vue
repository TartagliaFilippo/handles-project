<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <div class="top-section clearfix">
        <div class="image-container">
          <img src="public/image-home/liberty-1.jpg" alt="Immagine Top" />
        </div>
        <h1 class="main-title">
          Benvenuti nel mondo della raffinatezza artigianale da oltre 50 anni!
        </h1>
        <p>
          Benvenuti nel mondo della raffinatezza artigianale da oltre 50 anni!
          Da oltre quattro decenni, siamo i pionieri nel settore degli accessori
          per il mobile, specializzati nella produzione di pomoli, maniglie,
          chiavi, bocchette e molto altro, il tutto realizzato con la nostra
          passione e maestria in ottone.
        </p>
        <p>
          Immersi nel mercato del mobile in stile e moderno, la nostra
          esperienza di 40 anni è un testimone della nostra dedizione
          all'eccellenza artigianale. Ogni dettaglio dei nostri prodotti è
          plasmato con cura e attenzione, riflettendo il nostro impegno per
          offrire accessori distintivi e di alta qualità.
        </p>
      </div>
      <div class="bottom-section clearfix">
        <div class="image-container">
          <img src="public\image-home\liberty-2.jpg" alt="Immagine Bottom" />
        </div>
        <p>
          Se siete alla ricerca di soluzioni uniche che si distinguano per
          eleganza e durabilità, siete nel posto giusto. Non esitate a
          contattarci per ulteriori informazioni o per soddisfare le vostre
          esigenze personalizzate. Siamo pronti a trasformare la vostra visione
          in realtà.
        </p>
        <p>
          Unisciti alla nostra famiglia di clienti soddisfatti e scopri il tocco
          distintivo dei nostri prodotti artigianali. Ci auguriamo di darvi il
          benvenuto nel mondo dell'eleganza senza tempo.
        </p>
        <p class="signature">Stefano Tartaglia</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  min-height: 100vh;

  .container {
    width: 80%;
    margin: 0 auto;

    .clearfix::after {
      content: "";
      display: block;
      clear: both;
    }

    .top-section {
    }

    .top-section,
    .bottom-section {
      position: relative;
      p {
        font-size: 1.5rem;
        color: #c9c9c9;
      }

      .image-container {
        border-radius: 2rem;
        overflow: hidden;
        img {
          max-width: 100%;
          height: auto;
        }
      }
    }

    .top-section {
      margin: 3rem 0 2rem;
      .image-container {
        float: left;
        margin-right: 1rem;
      }
    }

    .bottom-section {
      .image-container {
        float: right;
        margin-left: 1rem;
      }

      .signature {
        font-family: "Dancing Script", cursive;
        margin-top: 3rem;
      }
    }

    .main-title {
      padding: 1rem 0 2rem;
      text-align: center;
    }
  }
}
</style>
