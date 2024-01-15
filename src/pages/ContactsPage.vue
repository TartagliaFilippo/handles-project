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
      }

      button {
        width: auto;
        padding: 0.5rem 1rem;
      }
    }
  }
}
</style>
