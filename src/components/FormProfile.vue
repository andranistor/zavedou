<template>
  <div>
    <h1>Formulář</h1>
    <label for="first-name">
      Jméno
      <input type="text" id="first-name" v-model="firstName" placeholder="Jméno" />
    </label>
    <label for="last-name">
      Přijmení
      <input type="text" id="last-name" v-model="lastName" placeholder="Příjmení" />
    </label>
    <br />
    <label for="branch">
      Obor
      <input type="text" id="branch" v-model="branch" placeholder="Obor" />
    </label>
    <br />
    <label for="institution">
      Instituce
      <input type="text" id="institution" v-model="institution" placeholder="Instituce" />
    </label>
    <br />
    <label for="offer">
      Nabízím:
      <textarea id="offer" v-model="offer" placeholder="Nabízím:"></textarea>
    </label>
    <br />
    <label for="whom">
      Pro koho:
      <input type="text" id="whom" v-model="whom" placeholder="Pro koho" />
    </label>

    <label for="region-select">
      Pro oblast:
      <select name="type" id="region-select" v-model="selected">
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
        v-model="contact"
        placeholder="jmeno.prijmeni@email.cz"
      />
    </label>
    <br />
    <button @click="addData">Přidej profil</button>
  </div>
</template>

<script>
import { db } from "../utils/db";

export default {
  name: "FormProfile",
  data() {
    return {
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
    addData() {
      let profile = {
        firstName: this.firstName,
        lastName: this.lastName,
        brancht: this.branch,
        institution: this.institution,
        offer: this.offer,
        whom: this.whom,
        region: this.region,
        contact: this.contact
      };

      profiles.forEach(function(profile) {
        db.collection("profiles")
          .add({
            firstName: profile.firstName,
            lastName: profile.lastName,
            branch: profile.branch,
            institution: obj.institution,
            offer: profile.offer,
            whom: profile.whom,
            region: profile.region,
            contact: profile.contact
          })
          .then(function() {
            console.log("Document successfully written!");
          })
          .catch(function(error) {
            console.error("Error writing document: ", error);
          });
      });
    }
  }
};
