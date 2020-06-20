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
    <Button btnName="Vědecké instituce" />
    <Button btnName="Profily vědců" />
    <Button btnName="Vědecké akce" />
    <Button btnName="Vědecké parky" />
    <label for="subject-filter">
      Vyberte obor:
      <select
        name="type"
        id="branch-filter"
        v-model="branchFilter"
        @change="filtered_items"
      >
        <option>Zobrazit vše</option>
        <option>Matematika, fyzika a informatika</option>
        <option>Chemie</option>
        <option>Technické vědy, inženýrství</option>
        <option>Vědy o Zemi</option>
        <option>Biologie a medicína</option>
        <option>Environmentální a zemědělské vědy</option>
        <option>Společenské a humanitní vědy</option>
      </select>
    </label>

    <!-- <button @click="filtered_items">Filtruj</button> -->
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
      filteredInstitutions: [],
      map: null,
      subject: "",
      branch: "",
      subjectFilter: "Zobrazit vše",
      branchFilter: "Zobrazit vše",
      layer: null,
      btnName: ""
    };
  },
  firestore: {
    institutions: db.collection("institutions")
  },
  // computed: {
  //   filtered_items() {
  //     console.log("ok");
  //     let result = this.institutions;
  //     //filtr na obory:
  //     result = result.filter(item => {
  //       if (this.branchFilter === "Zobrazit vše") {
  //         console.log(result);
  //         return true;
  //       } else if (this.branchFilter === "Matematika, fyzika a informatika") {
  //         return item.branch.mathsPhysicsInformatics === "1";
  //       } else if (this.branchFilter === "Chemie") {
  //         return item.branch.chemistry === "1";
  //       } else if (this.branchFilter === "Technické vědy, inženýrství") {
  //         return item.branch.engineering === "1";
  //       } else if (this.branchFilter === "Vědy o Zemi") {
  //         return item.branch.scienceAboutEarth === "1";
  //       } else if (this.branchFilter === "Biologie a medicína") {
  //         return item.branch.bioMed === "1";
  //       } else if (this.branchFilter === "Environmentální a zemědělské vědy") {
  //         return item.branch.enviroAgri === "1";
  //       } else if (this.branchFilter === "Společenské a humanitní vědy") {
  //         return item.branch.socialAndArts === "1";
  //       }
  //       this.getMarkers(result);
  //     });

  //     return result;
  //   }
  // },
  // created() {
  //   this.fetchData();
  // },
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
  },
  methods: {
    // fetchData() {
    //   this.institutions = db.collection("institutions"); // After inserting filters delete it
    //   console.log(this.institutions);
    //   // Here insert filtering codes
    // },
    filtered_items() {
      let result = this.institutions;
      //filtr na obory:
      result = result.filter(item => {
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
        } else if (this.branchFilter === "Environmentální a zemědělské vědy") {
          return item.branch.enviroAgri === "1";
        } else if (this.branchFilter === "Společenské a humanitní vědy") {
          return item.branch.socialAndArts === "1";
        }
      });

      this.filteredInstitutions = result;
    },
    // Get marker coordination numbers
    getMarkers(institutions) {
      if (!institutions) return;
      const markers = [];
      institutions.map((institution, index) => {
        let marker = new SMap.Marker(
          SMap.Coords.fromWGS84(institution.coords.x, institution.coords.y)
        );
        markers.push(marker);
      });
      return markers;
    },

    // Notes of marker
    getCards(institutions) {
      if (!institutions) return;
      const cards = [];
      institutions.map((institution, index) => {
        let card = new SMap.Card();
        card.getHeader().innerHTML = `
            <strong>${institution.scientificInstitution}</strong> <br />
        ${institution.address}<br />
            ${institution.website}<br />
            `;
        card.getBody().innerHTML = `${institution.funFact}`;
        cards.push(card);
      });
      return cards;
    },
    pressButton() {
      this.selected = !this.selected;
    }
  },
  watch: {
    filteredInstitutions() {
      // Return marker coords
      const markers = this.getMarkers(this.filteredInstitutions);
      // const filteredItems = this.filtered_items(this.institutions);
      // Adding to the map a marker layer
      this.layer.removeAll();

      // Adding markers to marker layer
      markers.map((marker, index) => {
        this.layer.addMarker(marker);
      });

      // Return cards
      const cards = this.getCards(this.filteredInstitutions);
      // Show card on marker click
      cards.map((card, index) => {
        markers[index].decorate(SMap.Marker.Feature.Card, cards[index]);
      });
    },
    institutions() {
      this.filteredInstitutions = this.institutions;
    }
  }
};
</script>

<style>
.smap {
  position: relative;
  width: 100%;
  height: 60vh;
  margin: 10px 0;
}
button {
  background-color: blueviolet;
}

.selected {
  background-color: green;
}
</style>
