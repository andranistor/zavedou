<template>
  <div>
    <h1>Domovská stránka</h1>
    <div class="contactUs">
      <h3>Napište nám</h3>
      <form @submit.prevent="sendMail">
        <label for="name">
          Jméno
          <br />
          <input
            type="text"
            id="name"
            placeholder="Jméno"
            v-model.trim="name"
          />
        </label>
        <br />

        <label for="email">
          E-mail
          <br />
          <input
            type="email"
            id="email"
            placeholder="E-mail"
            v-model.trim="email"
          />
        </label>
        <br />

        <label for="message">
          Zpráva
          <br />
          <textarea
            name="message"
            rows="4"
            placeholder="Zpráva"
            v-model.trim="message"
          ></textarea>
        </label>
        <br />
        <button type="submit" v-on:submit.prevent="sendMail">
          Poslat zprávu
        </button>
      </form>
    </div>
  </div>
</template>

// NOT DONE! the sending function is missing
<script>
export default {
  name: "Home",
  data() {
    return {
      contact: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    sendMail() {
      // Clearing the input value
      this.name = "";
      this.email = "";
      this.message = "";

      event.preventDefault();
    },
  },
};
</script>
