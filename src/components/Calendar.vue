<template>
  <div class="calendar">
    <h1>Kalendář akcí</h1>
    <label for="region-filter">
      Vyberte kraj:
      <select name="type" id="region-filter" v-model="regionFilter">
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
    <label for="type-filter">
      Vyberte druh akce:
      <select name="type" id="type-filter" v-model="typeFilter">
        <option>Všechny akce</option>
        <option>Veletrh / festival</option>
        <option>Přednáška</option>
        <option>Workshop</option>
        <option>Soutěž</option>
        <option>Tábor/letní škola</option>
        <option>Kroužek</option>
        <option>Ostatní</option>
      </select>
    </label>
    <label for="attender-filter">
      Pro koho je akce určená:
      <select name="type" id="attender-filter" v-model="attenderFilter">
        <option>Pro všechny</option>
        <option>Děti (ZŠ)</option>
        <option>Studenti (SŠ)</option>
        <option>Dospělí</option>
      </select>
    </label>
    <div v-for="event in filtered_events" :key="event.id">
      <Event
        :id="event.id"
        :name="event.name"
        :type="event.type"
        :description="event.description"
        :place="event.place"
        :town="event.address.town"
        :street="event.address.street"
        :descriptiveNumber="event.address.descriptiveNumber"
        :orientationNumber="event.address.orientationNumber"
        :townPart="event.address.townPart"
        :zipCode="event.address.zipCode"
        :link="event.link"
        :child="event.attender.child"
        :teenager="event.attender.teenager"
        :adult="event.attender.adult"
        :start="event.date.start"
        :end="event.date.end"
        :note="event.date.note"
        :region="event.region"
      />
    </div>
    <div>
      <FormEvent />
    </div>
  </div>
</template>

<script>
import { db } from "../utils/db";
import Event from "./Event.vue";
import FormEvent from "./FormEvent.vue";

export default {
  name: "Calendar",
  components: {
    FormEvent,
    Event
  },
  data() {
    return {
      events: [],
      id: "",
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
      note: "",
      region: "",
      regionFilter: "Celá ČR",
      typeFilter: "Všechny akce",
      attenderFilter: "Pro všechny"
    };
  },
  firestore: {
    events: db.collection("events").orderBy("date.start")
  },
  computed: {
    filtered_events() {
      let result = this.events;
      //filtr na regiony
      result = result.filter(item => {
        if (this.regionFilter === "Celá ČR") {
          return true;
        }
        return item.region === this.regionFilter;
      });
      //filtr typy akcí
      result = result.filter(item => {
        if (this.typeFilter === "Všechny akce") {
          return true;
        }
        return item.type === this.typeFilter;
      });
      //filtr návštěvníci
      result = result.filter(item => {
        if (this.attenderFilter === "Pro všechny") {
          return true;
        } else if (this.attenderFilter === "Děti (ZŠ)") {
          return item.attender.child === true;
        } else if (this.attenderFilter === "Studenti (SŠ)") {
          return item.attender.teenager === true;
        } else if (this.attenderFilter === "Dospělí") {
          return item.attender.adult === true;
        }
      });
      return result;
    }
  }
  // computed: {
  //   let dayStart = new Date(this.start);
  //   let dayEnd = new Date(this.end);
  //   start = `${dayStart.getDate()}.${dayStart.getMonth() +
  //     1}.${dayStart.getFullYear()}`;
  //   end = `${dayEnd.getDate()}.${dayEnd.getMonth() +
  //     1}.${dayEnd.getFullYear()}`;
  // }
};
</script>

<style>
</style>
