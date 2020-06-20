<template>
  <div>
    <h1>Mapa</h1>
    <div id="map"></div>
  </div>
</template>

<script>
import { db } from "../utils/db";

export default {
  name: "Map",
  data() {
    return {
      loading: false,
      post: null,
      error: null,
      institutions: [],
      map: null
    };
  },
  firestore: {
    institutions: db.collection("institutions")
  },
  // created() {
  //   this.fetchData();
  // },
  mounted() {
    let main = document.querySelector("#map");

    // Adding a map and choosing the first focus and its zoom size
    let center = SMap.Coords.fromWGS84(14.4252625, 50.0833472);
    this.map = new SMap(main, center, 7);
    this.map.addDefaultLayer(SMap.DEF_BASE).enable();

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
    }
  },
  watch: {
    institutions() {
      // Return marker coords
      const markers = this.getMarkers(this.institutions);

      // Adding to the map a marker layer
      let layer = new SMap.Layer.Marker();
      this.map.addLayer(layer);
      layer.enable();

      // Adding markers to marker layer
      markers.map((marker, index) => {
        layer.addMarker(marker);
      });

      // Return cards
      const cards = this.getCards(this.institutions);
      // Show card on marker click
      cards.map((card, index) => {
        markers[index].decorate(SMap.Marker.Feature.Card, cards[index]);
      });
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
</style>
