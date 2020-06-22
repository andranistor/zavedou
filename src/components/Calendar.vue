<template>
  <div class="calendar">
    <h1>Kalendář akcí</h1>
    <label for="region-filter">
      Vyberte kraj:
      <select
        class="custom-select select-selected"
        name="type"
        id="region-filter"
        v-model="regionFilter"
      >
        <option class="select-items">Celá ČR</option>
        <option class="select-items">Hlavní město Praha</option>
        <option class="select-items">Středočeský kraj</option>
        <option class="select-items">Jihočeský kraj</option>
        <option class="select-items">Plzeňský kraj</option>
        <option class="select-items">Karlovarský kraj</option>
        <option class="select-items">Ústecký kraj</option>
        <option class="select-items">Liberecký kraj</option>
        <option class="select-items">Královéhradecký kraj</option>
        <option class="select-items">Pardubický kraj</option>
        <option class="select-items">Kraj Vysočina</option>
        <option class="select-items">Jihomoravský kraj</option>
        <option class="select-items">Olomoucký kraj</option>
        <option class="select-items">Zlínský kraj</option>
        <option class="select-items">Moravskoslezský kraj</option>
      </select>
    </label>
    <label for="type-filter">
      Vyberte druh akce:
      <select
        class="custom-select select-selected"
        name="type"
        id="type-filter"
        v-model="typeFilter"
      >
        <option class="select-items">Všechny akce</option>
        <option class="select-items">Veletrh / festival</option>
        <option class="select-items">Přednáška</option>
        <option class="select-items">Workshop</option>
        <option class="select-items">Soutěž</option>
        <option class="select-items">Tábor/letní škola</option>
        <option class="select-items">Kroužek</option>
        <option class="select-items">Ostatní</option>
      </select>
    </label>
    <label for="attender-filter">
      Pro koho je akce určená:
      <select
        class="custom-select select-selected"
        name="type"
        id="attender-filter"
        v-model="attenderFilter"
      >
        <option class="select-items">Pro všechny</option>
        <option class="select-items">Děti (ZŠ)</option>
        <option class="select-items">Studenti (SŠ)</option>
        <option class="select-items">Dospělí</option>
      </select>
    </label>
    <div class="b-container fluid">
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
          :link_picture="event.link_picture"
          :child="event.attender.child"
          :teenager="event.attender.teenager"
          :adult="event.attender.adult"
          :start="event.date.start"
          :end="event.date.end"
          :note="event.date.note"
          :region="event.region"
        />
      </div>
    </div>
    <div>
      <router-link to="/addevent">
        <b-button variant="outline-primary">Přidat akci</b-button>
      </router-link>
      <!-- <FormEvent /> -->
    </div>
  </div>
</template>

<script>
import { db } from "../utils/db";
import Event from "./Event.vue";
// import FormEvent from "./FormEvent.vue";

export default {
  name: "Calendar",
  components: {
    // FormEvent,
    Event,
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
      link_picture: "",
      child: "",
      teenager: "",
      adult: "",
      start: "",
      end: "",
      note: "",
      region: "",
      regionFilter: "Celá ČR",
      typeFilter: "Všechny akce",
      attenderFilter: "Pro všechny",
    };
  },
  firestore: {
    events: db.collection("events").orderBy("date.start"),
  },
  computed: {
    filtered_events() {
      let result = this.events;
      //filtr regiony
      result = result.filter((item) => {
        if (this.regionFilter === "Celá ČR") {
          return true;
        }
        return item.region === this.regionFilter;
      });
      //filtr typy akcí
      result = result.filter((item) => {
        if (this.typeFilter === "Všechny akce") {
          return true;
        }
        return item.type === this.typeFilter;
      });
      //filtr návštěvníci
      result = result.filter((item) => {
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
    },
  },
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
.custom-select {
  position: relative;
}

.custom-select select {
  display: none; /*hide original SELECT element: */
}

.select-selected {
  background-color: #84d3ef;
}

/* Style the arrow inside the select element: */
.select-selected:after {
  position: absolute;
  content: "";
  top: 14px;
  right: 10px;
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-color: #fff transparent transparent transparent;
}

/* Point the arrow upwards when the select box is open (active): */
.select-selected.select-arrow-active:after {
  border-color: transparent transparent #fff transparent;
  top: 7px;
}

/* style the items (options), including the selected item: */
.select-items div,
.select-selected {
  color: black;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
  cursor: pointer;
}

/* Style items (options): */
.select-items {
  position: absolute;
  background-color: white;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
}

/* Hide the items when the select box is closed: */
.select-hide {
  display: none;
}

.select-items div:hover,
.same-as-selected {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
