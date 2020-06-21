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
      <label for="field">
        Obor
        <input type="text" id="field" v-model.trim="field" placeholder="Obor" />
      </label>
      <br />
      <label for="subject-select">
        Vhodné pro školní předmět(y):
        <select name="type" id="subject-select" v-model="subject">
          <option>Cizí jazyky</option>
          <option>Čeština</option>
          <option>Dějepis</option>
          <option>Fyzika</option>
          <option>Chemie</option>
          <option>Matematika</option>
          <option>Občanská výchova</option>
          <option>Přirodopis/biologie</option>
          <option>Informatika</option>
          <option>Hudební a výtvarná výchova</option>
          <option>Zeměpis</option>
        </select>
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
      <label for="whom-select">
        Pro koho:
        <select name="type" id="whom-select" v-model="whom">
          <option>Všechny</option>
          <option>1. stupeň ZŠ</option>
          <option>2. stupeň ZŠ</option>
          <option>Střední školy</option>
          <option>Dospělé</option>
        </select>
      </label>
      <br />
      <label for="region-select">
        Pro oblast:
        <select name="type" id="region-select" v-model="region">
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
        E-mail
        <input type="email" id="contact" v-model.trim="contact" placeholder="Email" />
      </label>
      <br />

      <button type="submit" v-on:submit.prevent="addProfile">Přidej profil</button>
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
      field: "",
      subject: "",
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
          field: this.field,
          subject: this.subject,
          institution: this.institution,
          offer: this.offer,
          whom: this.whom,
          region: this.region,
          contact: this.contact,
          options: this.options
        })
        .then(docRef => {
          docRef.update({ id: docRef.id });
        });

      // Clearing the input value
      this.firstName = "";
      this.lastName = "";
      this.field = "";
      this.subject = "";
      this.institution = "";
      this.offer = "";
      this.whom = "";
      this.region = "";
      this.contact = "";
    }
  }
};
</script>
