<script>
const WEB3FORMS_ACCESS_KEY = "ef56bc67-f4ef-4fdc-b8b8-9041d9b01fd7";

export default {
  data() {
    return {
      title: "Contattaci",
      name: "",
      email: "",
      message: "",
    };
  },

  methods: {
    async submitForm() {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: this.name,
          email: this.email,
          message: this.message,
        }),
      });
      const result = await response.json();
      if (result.success) {
        const sendMessageElement = document.querySelector(".send-message");
        if (sendMessageElement) {
          sendMessageElement.style.display = "block";

          // timer messaggio inviato
          setTimeout(() => {
            sendMessageElement.style.display = "none";
          }, 10000);
        }
        console.log(result);
        this.name = "";
        this.email = "";
        this.message = "";
      }
    },
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <form @submit.prevent="submitForm">
        <h1 class="main-title">{{ title }}</h1>
        <div class="send-message">Il messaggio è stato inviato</div>
        <input
          type="text"
          name="name"
          v-model="name"
          placeholder="Nome"
          required
        />
        <input
          type="email"
          name="email"
          v-model="email"
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          v-model="message"
          rows="4"
          placeholder="In cosa possiamo aiutarti?"
        ></textarea>
        <button type="submit">Invia</button>
      </form>
      <div class="contacts">
        <h2>Informazioni di contatto utili</h2>
        <p><span class="bold-text">Cellulare:</span> +39 333 2846381</p>
        <p><span class="bold-text">Telefono Fisso:</span> 0424 566024</p>
        <p>
          <span class="bold-text">E-mail:</span
          ><a href="mailto:stefano@maniglietartaglia.it">
            stefano@maniglietartaglia.it</a
          >
        </p>
        <p>
          <span class="bold-text">Codice Fiscale:</span> TRT SFN 66H18 A703P
        </p>
        <p><span class="bold-text">Partita Iva:</span> 02786250247</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  min-height: 100vh;
  padding-bottom: 1rem;

  .container {
    width: 70%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 2rem;

    @media screen and (max-width: 765px) {
      flex-direction: column;
    }
    .main-title {
      padding: 1rem 0;
      text-align: center;
      font-size: 3rem;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      padding: 2rem 0;
      .send-message {
        display: none;
        font-size: 1rem;
        color: white;
      }

      & > * {
        width: 30vw;
        font-size: 1.5rem;
        border-radius: 0.5rem;
        padding: 1rem;

        @media screen and (max-width: 765px) {
          width: 100%;
        }
      }

      button {
        width: auto;
        padding: 0.5rem 1rem;
      }
    }
    .contacts {
      background-color: #958d81;
      padding: 1rem 2rem;
      border-radius: 2rem;
      h2 {
        margin-bottom: 1rem;
      }
      p {
        margin-bottom: 0.5rem;
        .bold-text {
          font-weight: bold;
        }
        a {
          text-decoration: none;
          color: black;
        }
      }
    }
  }
}
</style>
