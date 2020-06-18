<template>
  <div>
    <h1>Nahrávání dat</h1>
    <button @click="addData">Nahraj data</button>
  </div>
</template>

<script>
import { db } from "../utils/db";

export default {
  name: "FormInstitution",
  data() {
    return {};
  },
  methods: {
    addData() {
      // let institution = // Insert a json and uncomment it
      institution.forEach(function(obj) {
        db.collection("institutions")
          .add({
            address: obj.address,
            coords: obj.coords, // Watch out! input obj.coords must be {x: Number, y: Number}
            scientificInstitution: obj.scientificInstitution,
            funFact: obj.funFact,
            website: obj.website,
            branch: {
              bioMed: obj.bioMed,
              chemistry: obj.chemistry,
              engineering: obj.engineering,
              enviroAgri: obj.enviroAgri,
              mathsPhysicsInformatics: obj.mathsPhysicsInformatics,
              scienceAboutEarth: obj.scienceAboutEarth,
              socialAndArts: obj.socialAndArts
            },
            subject: {
              bio: obj.bio,
              civics: obj.civics,
              czechLang: obj.czechLang,
              foreignLang: obj.foreignLang,
              geo: obj.geo,
              history: obj.history,
              informatics: obj.informatics,
              maths: obj.maths,
              musicAndArt: obj.musicAndArt,
              physics: obj.physics
            }
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
</script>

<style>
</style>