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
    return {};
  },
  mounted() {
    let main = document.querySelector("#map");
    // Adding a map and choosing the first focus and its zoom size
    let center = SMap.Coords.fromWGS84(14.4252625, 50.0833472);
    let map = new SMap(main, center, 13);
    map.addDefaultLayer(SMap.DEF_BASE).enable();

    // Resizing of the window during website resizing
    window.addEventListener("resize", () => map.syncPort());

    // Map controls such as zoom in, out
    map.addDefaultControls();

    // Adding to the map a marker layer
    let layer = new SMap.Layer.Marker();
    map.addLayer(layer);
    layer.enable();

    // Marker coordination numbers
    let marker1 = new SMap.Marker(center);
    let marker2 = new SMap.Marker(
      SMap.Coords.fromWGS84(14.4178214, 50.0645881)
    );

    // Adding markers to marker layer
    layer.addMarker(marker1);
    layer.addMarker(marker2);

    // Notes of marker 1
    let card1 = new SMap.Card();
    card1.getHeader().innerHTML = `
    <strong>Czechitas</strong> <br />
    Václavské náměstí 837/11 <br />
    110 00 Praha, Nové Město Praha`;
    card1.getBody().innerHTML = "Tady sídlí <em>Czechitas</em>!";

    marker1.decorate(SMap.Marker.Feature.Card, card1);

    // Notes of marker 2
    let card2 = new SMap.Card();
    card2.getHeader().innerHTML = `
    <strong>Vyšehrad, Praha</strong> <br />
    Praha – Vyšehrad <br />
    Hlavní město Praha, Česko`;
    card2.getBody().innerHTML = "Z Vyšehradu je nádherný pohled na Vltavu.";

    marker2.decorate(SMap.Marker.Feature.Card, card2);
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
