<template>
  <div>
    <!-- <h1>Formulář</h1>
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
      <input type="text" id="institution" v-model.trim="institution" placeholder="Instituce" />
    </label>
    <br />
    <label for="offer">
      Nabízím:
      <textarea id="offer" v-model.trim="offer" placeholder="Vysvětlím teorii relativity"></textarea>
    </label>
    <br />
    <label for="whom">
      Pro koho:
      <input type="text" id="whom" v-model.trim="whom" placeholder="1.a 2. st. ZŠ, SŠ, dospělý" />
    </label>

    <label for="region-select">
      Pro oblast:
      <select name="type" id="region-select" v-model.trim="region">
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
    <br />-->
    <button @click="addData">Přidej profil</button>
  </div>
</template>

<script>
import { db } from "../utils/db";

export default {
  name: "FormProfile",
  // data() {
  //   return {
  //     profile: {
  //       firstName: null,
  //       lastName: null,
  //       branch: null,
  //       institution: null,
  //       offer: null,
  //       whom: null,
  //       region: null,
  //       contact: null
  //     }
  //   };
  // },
  methods: {
    addData() {
      let profile = [
        {
          id: 1,
          firstName: "Maruška",
          lastName: "Nováková",
          branch: "teoretická fyzika",
          institution: "Matfyz",
          offer: "Vysvětlím teorii relativity",
          whom: "2.st. ZŠ",
          region: "Praha",
          contact: "maruska.novakova@matfyz.uk.cz"
        }
      ];

      profile.forEach(function(obj) {
        db.collection("profiles")
          .add({
            id: obj.id,
            firstName: obj.firstName,
            lastName: obj.lastName,
            branch: obj.branch,
            institution: obj.institution,
            offer: obj.offer,
            whom: obj.whom,
            region: obj.region,
            contact: obj.contact
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
