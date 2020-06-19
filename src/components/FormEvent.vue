<template>
  <div>
    <h2>Formulář</h2>
    <form @submit.prevent="addEvent">
      <label for="name">
        Název události
        <input type="text" id="name" v-model.trim="name" placeholder="Název události" />
      </label>
      <br />
      <label for="type-select">
        Vyberte typ události
        <select name="type" id="type-select" v-model="type">
          <option>--Vyberte si prosím jednu z možností--</option>
          <option>Veletrh / festival</option>
          <option>Přednáška</option>
          <option>Workshop</option>
          <option>Tábor / letní škola</option>
          <option>Soutěž</option>
          <option>Kroužek</option>
          <option>Ostatní</option>
        </select>
      </label>
      <br />
      <label for="description">
        Popis události
        <textarea
          id="description"
          v-model.trim="description"
          placeholder="Popis události"
        ></textarea>
      </label>
      <br />
      <label for="place">
        Místo
        <input type="text" id="place" v-model.trim="place" placeholder="Místo konání" />
      </label>
      <br />
      <label for="town">
        Město
        <input type="text" id="town" v-model.trim="town" placeholder="Město" />
      </label>
      <br />
      <label for="street">
        Ulice
        <input type="text" id="street" v-model.trim="street" placeholder="Ulice" />
      </label>
      <label for="descriptive-number">
        Číslo popisné
        <input
          type="number"
          id="descriptive-number"
          min="0"
          v-model="descriptiveNumber"
        />
      </label>
      <label for="orientation-number">
        Číslo orientační
        <input
          type="number"
          id="orientation-number"
          min="0"
          v-model="orientationNumber"
        />
      </label>
      <br />
      <label for="town-part">
        Městská čtvrť
        <input
          type="text"
          id="town-part"
          v-model.trim="townPart"
          placeholder="Městská čtvrť"
        />
      </label>
      <label for="zip-code">
        PSČ
        <input type="number" id="zip-code" v-model.trim="zipCode" />
      </label>
      <br />
      <label for="link">
        Odkaz/zdroj
        <input type="url" id="link" v-model.trim="link" placeholder="Odkaz/zdroj" />
      </label>
      <br />
      <label for="child">
        <input type="checkbox" name="attender" value="false" id="child" v-model="child" /> pro děti
      </label>
      <label for="teenager">
        <input type="checkbox" name="attender" value="false" id="teenager" v-model="teenager" /> pro
        studenty
      </label>
      <label for="adult">
        <input type="checkbox" name="attender" value="false" id="adult" v-model="adult" /> pro
        dospělý
      </label>
      <br />
      <label for="start">
        Začátek události
        <input type="date" id="start" v-model="start" />
      </label>
      <br />
      <label for="end">
        Konec události
        <input type="date" id="end" v-model="end" />
      </label>
      <br />
      <label for="note">
        Poznámka
        <input type="text" id="note" v-model.trim="note" placeholder="Poznámka k události" />
      </label>
      <br />

      <button type="submit" @click="addEvent">Pridej událost</button>
    </form>
  </div>
</template>

<script>
import { db } from "../utils/db";

export default {
  name: "FormEvent",
  data() {
    return {
      events: [],
      name: "",
      type: "",
      description: "",
      place: "",
      town: "",
      street: "",
      descriptiveNumber: "",
      orientationNumber: "",
      townPart: "",
      zipCode: "",
      link: "",
      child: "",
      teenager: "",
      adult: "",
      start: "",
      end: "",
      note: ""
    };
  },
  methods: {
    addEvent(event) {
      db.collection("events")
        .add({
          name: this.name,
          type: this.type,
          description: this.description,
          place: this.place,
          address: {
            town: this.town,
            street: this.street,
            descriptiveNumber: this.descriptiveNumber,
            orientationNumber: this.orientationNumber,
            townPart: this.townPart,
            zipCode: this.zipCode
          },
          link: this.link,
          attender: {
            child: this.child,
            teenager: this.teenager,
            adult: this.adult
          },
          date: {
            start: this.start,
            end: this.end,
            note: this.note
          }
        })
        .then(docRef => {
          docRef.update({ id: docRef.id });
        });

      // Clearing the input value
      this.name = "";
      this.type = "";
      this.description = "";
      this.place = "";
      this.town = "";
      this.street = "";
      this.descriptiveNumber = "";
      this.orientationNumber = "";
      this.townPart = "";
      this.zipCode = "";
      this.link = "";
      this.child = "";
      this.teenager = "";
      this.adult = "";
      this.start = "";
      this.end = "";
      this.note = "";

      event.preventDefault();
    }
  }
};
</script>