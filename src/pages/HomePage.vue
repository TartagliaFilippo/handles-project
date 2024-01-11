<script>
export default {
  data() {
    return {
      contents: [
        {
          id: "1",
          title: "Chi Siamo",
          overview:
            "Siamo un'azienda artigiana a conduzione familiare con una storia di oltre 50 anni nel cuore dell'arte delle maniglie. Da padre a figlio, la nostra passione per la creazione di maniglie uniche e di alta qualità è il filo conduttore che ha intessuto la nostra storia.",
        },

        {
          id: "2",
          title: "La Nostra Storia",
          overview:
            "Tutto ebbe inizio nel 1972 quando il nostro fondatore, con il suo banco da lavoro e un talento innato per il design, iniziò a creare maniglie artigianali. Nel corso degli anni, la maestria artigiana è stata tramandata di generazione in generazione, arricchendosi di nuove tecniche e innovazioni.",
        },

        {
          id: "3",
          title: "La Nostra Arte",
          overview:
            "Ogni maniglia che produciamo è il risultato di anni di esperienza e dedizione. Utilizziamo solo i migliori materiali, lavorati con cura e maestria. La nostra gamma spazia dal classico all'avanguardia, offrendo soluzioni per tutti i gusti e stili.",
        },

        {
          id: "4",
          title: "L'Eccellenza Artigiana",
          overview:
            "Ci impegniamo per l'eccellenza in ogni dettaglio. Ogni maniglia è un'opera d'arte unica, riflettente della nostra eredità artigiana. Oltre alla qualità estetica, mettiamo un'enfasi particolare sulla funzionalità e la durata nel tempo.",
        },

        {
          id: "5",
          title: "La Nostra Missione",
          overview:
            "La nostra missione è quella di arricchire gli spazi con maniglie che non solo siano funzionali, ma che aggiungano anche un tocco di raffinatezza e stile. Siamo guidati dalla passione per il nostro mestiere e dalla soddisfazione dei nostri clienti.",
        },

        {
          id: "6",
          title: "Collaborazioni Personalizzate",
          overview:
            "Offriamo servizi di consulenza personalizzata per garantire che le vostre maniglie siano in perfetta armonia con l'ambiente circostante. Siamo pronti a collaborare con architetti, designer e privati per realizzare progetti su misura.",
        },
        {
          id: "7",
          title: "Contattaci",
          overview:
            "Esplora la nostra collezione e scopri come possiamo trasformare le tue porte e finestre. Se hai domande o desideri discutere progetti personalizzati, non esitare a contattarci. Siamo qui per creare maniglie straordinarie che rendano unico ogni spazio.",
        },
      ],
    };
  },
};
</script>

<template>
  <main class="wrapper-home">
    <section class="section" v-for="content in contents" :key="content.id">
      <div class="container">
        <div class="container-content">
          <h2>{{ content.title }}</h2>
          <p>{{ content.overview }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.wrapper-home {
  color: #c8c7bc;
}
.section {
  height: 200px;
  display: flex;
  align-items: center;

  .container {
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .container-content {
      width: 60%;
      display: flex;
      flex-direction: column;
    }
  }
}

.section:nth-child(odd) {
  background-color: #4a4238;
}

.section:nth-child(even) {
  background-color: #584935;
}

.container-content:nth-child(odd) {
  justify-content: flex-start;
}

.container-content:nth-child(even) {
  justify-content: flex-end;
}
</style>
