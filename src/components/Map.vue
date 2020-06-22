<template>
  <div>
    <h1>Mapa</h1>
    <!-- <label for="subject-filter">
      Vyberte školní předmět:
      <select name="type" id="subject-filter" v-model="subjectFilter">
        <option>Zobrazit vše</option>
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
    </label>-->
    <Button
      btnName="Vědecké instituce"
      @vyber="selected1=!selected1"
      :class="{selected:selected1}"
    />
    <Button btnName="Profily vědců" @vyber="selected2=!selected2" :class="{selected:selected2}" />
    <Button btnName="Vědecké akce" @vyber="selected3=!selected3" :class="{selected:selected3}" />
    <Button btnName="Vědecké parky" @vyber="selected4=!selected4" :class="{selected:selected4}" />
    <label for="subject-filter">
      Vyberte obor:
      <select
        class="custom-select select-selected"
        name="type"
        id="branch-filter"
        v-model="branchFilter"
        @change="filtered_items"
      >
        <option class="select-items">Zobrazit vše</option>
        <option class="select-items">Matematika, fyzika a informatika</option>
        <option class="select-items">Chemie</option>
        <option class="select-items">Technické vědy, inženýrství</option>
        <option class="select-items">Vědy o Zemi</option>
        <option class="select-items">Biologie a medicína</option>
        <option class="select-items">Environmentální a zemědělské vědy</option>
        <option class="select-items">Společenské a humanitní vědy</option>
      </select>
    </label>

    <div id="map"></div>
  </div>
</template>

<script>
import { db } from "../utils/db";
import Button from "./Button.vue";

export default {
  name: "Map",
  components: {
    Button
  },
  data() {
    return {
      loading: false,
      post: null,
      error: null,
      institutions: [],
      filteredInstitutions: {},
      map: null,
      subject: "",
      branch: "",
      subjectFilter: "Zobrazit vše",
      branchFilter: "Zobrazit vše",
      layer: null,
      btnName: "",
      selected1: false,
      selected2: false,
      selected3: false,
      selected4: false
    };
  },
  firestore: {
    institutions: db.collection("institutions").limit(30),
    profiles: db.collection("profiles").limit(30),
    events: db.collection("events").limit(30),
    parks: db.collection("parks").limit(30)
  },

  mounted() {
    let main = document.querySelector("#map");

    // Adding a map and choosing the first focus and its zoom size
    let center = SMap.Coords.fromWGS84(14.4252625, 50.0833472);
    this.map = new SMap(main, center, 7);
    this.map.addDefaultLayer(SMap.DEF_BASE).enable();
    this.layer = new SMap.Layer.Marker();
    this.map.addLayer(this.layer);
    this.layer.enable();

    // Resizing of the window during website resizing
    window.addEventListener("resize", () => this.map.syncPort());

    // Map controls such as zoom in, out
    this.map.addDefaultControls();
    this.filtered_items();
  },
  methods: {
    filtered_items() {
      let source = { institutions: [], profiles: [], events: [], parks: [] };
      if (this.selected1 === true) {
        source.institutions = this.institutions;
      }
      if (this.selected2 === true) {
        source.profiles = this.profiles;
      }
      if (this.selected3 === true) {
        source.events = this.events;
      }
      if (this.selected4 === true) {
        source.parks = this.parks;
      }
      if (
        !this.selected1 &&
        !this.selected2 &&
        !this.selected3 &&
        !this.selected4
      ) {
        source = {
          institutions: this.institutions,
          profiles: this.profiles,
          events: this.events,
          parks: this.parks
        };
      }

      Object.keys(source).forEach(category => {
        source[category] = source[category].filter(item => {
          if (this.branchFilter === "Zobrazit vše") {
            return true;
          } else if (this.branchFilter === "Matematika, fyzika a informatika") {
            return item.branch.mathsPhysicsInformatics === "1";
          } else if (this.branchFilter === "Chemie") {
            return item.branch.chemistry === "1";
          } else if (this.branchFilter === "Technické vědy, inženýrství") {
            return item.branch.engineering === "1";
          } else if (this.branchFilter === "Vědy o Zemi") {
            return item.branch.scienceAboutEarth === "1";
          } else if (this.branchFilter === "Biologie a medicína") {
            return item.branch.bioMed === "1";
          } else if (
            this.branchFilter === "Environmentální a zemědělské vědy"
          ) {
            return item.branch.enviroAgri === "1";
          } else if (this.branchFilter === "Společenské a humanitní vědy") {
            return item.branch.socialAndArts === "1";
          }
        });
      });

      this.filteredInstitutions = source;
    },
    // Get marker coordination numbers
    getMarkers(source) {
      if (!source) return;
      const markers = [];
      const cards = [];
      //card for institutions
      const renderInstitutions = (institution, index) => {
        const znacka = JAK.mel("div");
        const obrazek = JAK.mel("img", {
          src: "./assets/img/pin_institution.png"
        });
        obrazek.classList.add("custom_pin");
        znacka.appendChild(obrazek);

        let marker = new SMap.Marker(
          SMap.Coords.fromWGS84(institution.coords.x, institution.coords.y),
          null,
          {
            url: znacka
          }
        );
        markers.push(marker);

        let card = new SMap.Card();
        card.getHeader().innerHTML = `
             <strong>${institution.scientificInstitution}</strong> <br />
         ${institution.address}<br />
             ${institution.website}<br />
            `;
        card.getBody().innerHTML = `${institution.funFact}`;
        cards.push(card);
      };
      //card for profiles

      const renderProfiles = (profile, index) => {
        const znacka = JAK.mel("div");
        const obrazek = JAK.mel("img", {
          src: "./assets/img/pin_profile.png"
        });
        obrazek.classList.add("custom_pin");
        znacka.appendChild(obrazek);

        let marker = new SMap.Marker(
          SMap.Coords.fromWGS84(profile.coords.x, profile.coords.y),
          null,
          {
            url: znacka
          }
        );

        markers.push(marker);

        let card = new SMap.Card();
        card.getHeader().innerHTML = `
             <strong>${profile.firstName} ${profile.lastName}</strong> <br />
         ${profile.field}<br />
             ${profile.contact}<br />
            `;
        card.getBody().innerHTML = `${profile.offer}`;
        cards.push(card);
      };

      //card for events

      const renderEvents = (event, index) => {
        const znacka = JAK.mel("div");
        const obrazek = JAK.mel("img", {
          src: "./assets/img/pin_event.png"
        });
        obrazek.classList.add("custom_pin");
        znacka.appendChild(obrazek);
        let marker = new SMap.Marker(
          SMap.Coords.fromWGS84(event.coords.x, event.coords.y),
          null,
          {
            url: znacka
          }
        );
        markers.push(marker);

        let card = new SMap.Card();
        card.getHeader().innerHTML = `
             <strong>${event.name}</strong> <br />
             <a href="${event.link}">Odkaz na akci</a><br />
            `;
        card.getBody().innerHTML = `${event.description}`;
        cards.push(card);
      };

      //card for parks

      const renderParks = (park, index) => {
        const znacka = JAK.mel("div");
        const obrazek = JAK.mel("img", {
          src: "./assets/img/pin_park.png"
        });
        obrazek.classList.add("custom_pin");
        znacka.appendChild(obrazek);
        let marker = new SMap.Marker(
          SMap.Coords.fromWGS84(park.coords.x, park.coords.y),
          null,
          {
            url: znacka
          }
        );
        markers.push(marker);

        let card = new SMap.Card();
        card.getHeader().innerHTML = `
             <strong>${park.name}</strong> <br />
             <a href="${park.website}">Odkaz na akci</a><br />

            `;
        card.getBody().innerHTML = `${park.address}`;
        cards.push(card);
      };

      source.institutions.forEach(renderInstitutions);
      source.profiles.forEach(renderProfiles);
      source.events.forEach(renderEvents);
      source.parks.forEach(renderParks);
      return { markers, cards };
    },

    pressButton() {
      this.selected = !this.selected;
    }
  },
  watch: {
    filteredInstitutions() {
      if (!this.layer) return;

      // Return marker coords
      const markerCards = this.getMarkers(this.filteredInstitutions);
      // const filteredItems = this.filtered_items(this.institutions);
      // Adding to the map a marker layer
      this.layer.removeAll();

      // Adding markers to marker layer
      markerCards.markers.map((marker, index) => {
        this.layer.addMarker(marker);
      });

      // Return cards

      // Show card on marker click
      markerCards.cards.forEach((card, index) => {
        markerCards.markers[index].decorate(
          SMap.Marker.Feature.Card,
          markerCards.cards[index]
        );
      });
    },
    institutions() {
      setTimeout(() => this.filtered_items(), 1);
    },
    profiles() {
      setTimeout(() => this.filtered_items(), 1);
    },
    events() {
      setTimeout(() => this.filtered_items(), 1);
    },
    parks() {
      setTimeout(() => this.filtered_items(), 1);
    },
    // institutions() {
    //   this.filtered_items();
    // },
    selected1() {
      this.filtered_items();
    },
    selected2() {
      this.filtered_items();
    },
    selected3() {
      this.filtered_items();
    },
    selected4() {
      this.filtered_items();
    }
  }
};
</script>

<style>
.smap {
  position: relative;
  width: 100%;
  height: 80vh;
  margin: 10px 0;
}

.smap img.custom_pin {
  width: 40px;
}

.selected {
  background-color: blue;
}
.custom_pin {
  width: 40px;
}

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
