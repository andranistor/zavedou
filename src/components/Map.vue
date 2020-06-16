<!-- Vue component -->
<template>
  <div>
    <h1>Mapa</h1>
    <button @click="addData">Nahraj data do databáze</button>
  </div>
</template>

<script>
import { db } from "../utils/db";

export default {
  name: "Map",
  methods: {
    addData() {
      // let institution =
      institution.forEach(function(obj) {
        db.collection("institutions")
          .add({
            address: obj.address,
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
  
<style></style>
