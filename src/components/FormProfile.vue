<template>
  <div>
    <h2>Formulář</h2>
    <form @submit.prevent="addProfile">
      <label for="first-name">
        Jméno:
        <input
          type="text"
          id="first-name"
          v-model.trim="firstName"
          placeholder="Jméno"
          required
        />
      </label>
      <label for="last-name">
        Příjmení:
        <input
          type="text"
          id="last-name"
          v-model.trim="lastName"
          placeholder="Příjmení"
          required
        />
      </label>
      <br />
      <!-- <label for="branch-select">
        Vyberte obor:
        <select name="branch" id="branch-select" v-model="branch">
          <option>Matematika, fyzika a informatika</option>
          <option>Chemie</option>
          <option>Technické vědy, inženýrství</option>
          <option>Vědy o Zemi</option>
          <option>Biologie a medicína</option>
          <option>Environmentální a zemědělské vědy</option>
          <option>Společenské a humanitní vědy</option>
        </select>
      </label>
      <br />-->
      <label for="field">
        Specifikujte váš obor:
        <input
          type="text"
          id="field"
          v-model.trim="field"
          placeholder="Obor"
          required
        />
      </label>
      <br />
      <label for="subject-select">
        Vhodné pro školní předmět:
        <select
          name="type"
          id="subject-select"
          v-model="subject"
          required
        >
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
        Instituce:
        <input
          type="text"
          id="institution"
          v-model.trim="institution"
          placeholder="Instituce"
          required
        />
      </label>
      <br />
      <label for="address">
        Adresa instituce:
        <input
          type="text"
          id="address"
          v-model.trim="address"
          placeholder="Adresa"
          required
        />
      </label>
      <br />
      <label for="offer">
        Nabízím:
        <textarea
          id="offer"
          v-model.trim="offer"
          placeholder="Vysvětlím teorii relativity"
          required
        ></textarea>
      </label>
      <br />
      <label for="whom-select">
        Pro koho:
        <select name="type" id="whom-select" v-model="whom" required>
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
        <select name="type" id="region-select" v-model="region" required>
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
        E-mail:
        <input type="email" id="contact" v-model.trim="contact" placeholder="Email" required />
      </label>
      <br />

      <!-- <p v-if="errors.length">Please correct the following error(s):</p>
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>-->

      <button type="submit" v-on:submit.prevent="addProfile">Nahrajte profil</button>
    </form>
    <br />
    <router-link to="/profiles">
      <button>Zpět na profily</button>
    </router-link>
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
      address: "",
      offer: "",
      whom: "",
      region: "",
      contact: "@"
      // errors: []
    };
  },

  methods: {
    addProfile(event) {
      const address = this.address.replace(/\d{3} ?\d{2}/, "");
      // Call mapy API and get coords
      new SMap.Geocoder(address, response => {
        let results = response.getResults()[0].results[0].coords;
        console.log(results);

        // Add to database
        db.collection("profiles")
          .add({
            firstName: this.firstName,
            lastName: this.lastName,
            field: this.field,
            subject: this.subject,
            institution: this.institution,
            address: this.address,
            coords: { x: results.x, y: results.y },
            offer: this.offer,
            whom: this.whom,
            region: this.region,
            contact: this.contact,
            branch: {
              bioMed: "1",
              chemistry: "1",
              engineering: "1",
              enviroAgri: "1",
              mathsPhysicsInformatics: "1",
              scienceAboutEarth: "1",
              socialAndArts: "1"
            }
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
        this.address = "";
        this.offer = "";
        this.whom = "";
        this.region = "";
        this.contact = "";
      });
    }
    // checkForm: function(e) {
    //   if (this.firstName && this.lastName) {
    //     return true;
    //   }

    //   this.errors = [];

    //   if (!this.firstName) {
    //     this.errors.push("Doplňte prosím jméno.");
    //   }
    //   if (!this.lastName) {
    //     this.errors.push("Doplňte prosím příjmení.");
    //   }
    // }
  }
};
</script>
