<template>
  <div>
    <h2>Formulář</h2>
    <form @submit.prevent="addProfile">
      <label for="first-name">
        Jméno
        <input type="text" id="first-name" v-model.trim="firstName" placeholder="Jméno" />
      </label>
      <label for="last-name">
        Příjmení
        <input type="text" id="last-name" v-model.trim="lastName" placeholder="Příjmení" />
      </label>
      <br />
      <label for="branch">
        Obor
        <input type="text" id="branch" v-model.trim="branch" placeholder="Obor" />
      </label>
      <br />
      <label for="institution">
        Instituce
        <input
          type="text"
          id="institution"
          v-model.trim="institution"
          placeholder="Instituce"
        />
      </label>
      <br />
      <label for="offer">
        Nabízím:
        <textarea id="offer" v-model.trim="offer" placeholder="Vysvětlím teorii relativity"></textarea>
      </label>
      <br />
      <label for="whom">
        Pro koho:
        <input
          type="text"
          id="whom"
          v-model.trim="whom"
          placeholder="1.a 2. st. ZŠ, SŠ, dospělý"
        />
      </label>

      <label for="region-select">
        Pro oblast:
        <select name="type" id="region-select" v-model="region">
          <option>--Můžete vybrat i více možností--</option>
          <option>Celá ČR</option>
          <option>Hlavní město Praha</option>
          <option>Středočeský kraj</option>
          <option>Jihočeský kraj</option>
          <option>Plzeňský kraj</option>
          <option>Karlovarský kraj</option>
          <option>Ústecký kraj</option>
          <option>Liberecký kraj</option>
          <option>Královéhradecký kraj</option>
          <option>Pardubický kraj</option>
          <option>Kraj Vysočina</option>
          <option>Jihomoravský kraj</option>
          <option>Olomoucký kraj</option>
          <option>Zlínský kraj</option>
          <option>Moravskoslezský kraj</option>
        </select>
      </label>
      <br />
      <label for="contact">
        Kontakt
        <input
          type="text"
          id="contact"
          v-model.trim="contact"
          placeholder="jmeno.prijmeni@email.cz"
        />
      </label>
      <br />

      <button type="submit" @click="addProfile">Přidej profil</button>
    </form>
  </div>
</template>

<script>
import { db } from "../utils/db";

export default {
  name: "FormProfile",
  data() {
    return {
      profiles: [],
      firstName: "",
      lastName: "",
      branch: "",
      institution: "",
      offer: "",
      whom: "",
      region: "",
      contact: ""
    };
  },
  methods: {
    addProfile(event) {
      db.collection("profiles")
        .add({
          firstName: this.firstName,
          lastName: this.lastName,
          branch: this.branch,
          institution: this.institution,
          offer: this.offer,
          whom: this.whom,
          region: this.region,
          contact: this.contact
        })
        .then(docRef => {
          docRef.update({ id: docRef.id });
        });

      // Clearing the input value
      this.firstName = "";
      this.lastName = "";
      this.branch = "";
      this.institution = "";
      this.offer = "";
      this.whom = "";
      this.region = "";
      this.contact = "";

      event.preventDefault();
    }
  }
};
</script>