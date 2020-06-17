<template>
  <div>
    <h1>Mapa</h1>
    <div id="map"></div>
    <!-- <button @click="addData">Nahraj data</button> -->
  </div>
</template>

<script>
import { db } from "../utils/db";

export default {
  name: "Map",
  data() {
    return {};
  },
  // methods: {
  // addData() {
  //   // let institution =
  //   institution.forEach(function(obj) {
  //     db.collection("institutions")
  //       .add({
  //         address: obj.address,
  //         scientificInstitution: obj.scientificInstitution,
  //         funFact: obj.funFact,
  //         website: obj.website,
  //         branch: {
  //           bioMed: obj.bioMed,
  //           chemistry: obj.chemistry,
  //           engineering: obj.engineering,
  //           enviroAgri: obj.enviroAgri,
  //           mathsPhysicsInformatics: obj.mathsPhysicsInformatics,
  //           scienceAboutEarth: obj.scienceAboutEarth,
  //           socialAndArts: obj.socialAndArts
  //         },
  //         subject: {
  //           bio: obj.bio,
  //           civics: obj.civics,
  //           czechLang: obj.czechLang,
  //           foreignLang: obj.foreignLang,
  //           geo: obj.geo,
  //           history: obj.history,
  //           informatics: obj.informatics,
  //           maths: obj.maths,
  //           musicAndArt: obj.musicAndArt,
  //           physics: obj.physics
  //         }
  //       })
  //       .then(function() {
  //         console.log("Document successfully written!");
  //       })
  //       .catch(function(error) {
  //         console.error("Error writing document: ", error);
  //       });
  //   });
  // },
  // mounted() {
  //   fetch("https://api.mapy.cz/loader.js")
  //     .then(response => response)
  //     .then(data => Loader.load());
  //   let center = SMap.Coords.fromWGS84(14.4179, 50.12655);
  //   let map = new SMap(main, center, 13);
  //   map.addDefaultLayer(SMap.DEF_BASE).enable();
  //   new SMap(main, center, 13).$("#map");
  // }
  // response(response) {
  //   let results = response.getResults()[0].results;
  //   document.body.innerHTML = JSON.stringify(results, null, 2);
  // }
  // },
  mounted() {
    let main = document.querySelector("#map");
    console.log(main);
    let center = SMap.Coords.fromWGS84(14.4179, 50.12655);
    let map = new SMap(main, center, 13);
    map.addDefaultLayer(SMap.DEF_BASE).enable();
    map.addDefaultControls();
  }
};
</script>
// name: "Profiles",
  // data() {
  //   return {
  //     profiles: [],
  //     firstName: "",
  //     lastName: "",
  //     branch: "",
  //     institution: "",
  //     offer: "",
  //     whom: "",
  //     region: "",
  //     contact: "",
  //   };
  // },
  // firestore: {
  //   profiles: db.collection("profiles"),
  // },
  // methods: {
  //   addProfile() {
  //     db.collection("profiles")
  //       .add({
  //         firstName: this.firstName,
  //         lastName: this.lastName,
  //         branch: this.branch,
  //         institution: this.institution,
  //         offer: this.offer,
  //         whom: this.whom,
  //         region: this.region,
  //         contact: this.contact,
  //       })
  //       .then((docRef) => {
  //         docRef.update({ id: docRef.id });
  //       });
  //   },
  // },  

<style>
.smap {
  position: relative;
  width: 250px;
  height: 250px;
  margin: 10px;
}
</style>
