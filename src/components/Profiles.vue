<template>
  <div class>
    <h1>Popularizátoři vědy</h1>
    <div>
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
      <label for="subject-filter">
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
      </label>
    </div>
    <div class="b-container fluid">
      <b-row>
        <div class="profiles" v-for="profile in filtered_profiles" :key="profile.id">
          <Profile
            :id="profile.id"
            :firstName="profile.firstName"
            :lastName="profile.lastName"
            :branch="profile.branch"
            :subject="profile.subject"
            :institution="profile.institution"
            :offer="profile.offer"
            :whom="profile.whom"
            :region="profile.region"
            :contact="profile.contact"
            :image="image"
          />
        </div>
      </b-row>
    </div>

    <div>
      <FormProfile />
    </div>
  </div>
</template>

<script>
import { db } from "../utils/db";
import Profile from "./Profile.vue";
import FormProfile from "./FormProfile.vue";

export default {
  name: "Profiles",
  components: {
    Profile,
    FormProfile
  },
  data() {
    return {
      profiles: [],
      id: "",
      firstName: "",
      lastName: "",
      branch: "",
      subject: "",
      institution: "",
      offer: "",
      whom: "",
      region: "",
      contact: "",
      image: "./assets/img/female_avatar.png",
      regionFilter: "Celá ČR",
      subjectFilter: "Zobrazit vše"
    };
  },
  // Showing and ordering the profiles by lastName
  firestore: {
    profiles: db.collection("profiles")
    // .where("region", "==", "Brno") // Filtering
    // .orderBy("lastName") // Ordering of profiles on the page by lastName
    // .limit(3) // It will show only 5 profiles on the page
  },
  computed: {
    filtered_profiles() {
      return this.profiles.filter(item => {
        if (
          this.regionFilter !== "Celá ČR" &&
          this.subjectFilter !== "Zobrazit vše"
        ) {
          return (
            item.region === this.regionFilter &&
            item.subject === this.subjectFilter
          );
        } else if (this.regionFilter !== "Celá ČR") {
          return item.region === this.regionFilter;
        } else if (this.subjectFilter !== "Zobrazit vše") {
          return item.subject === this.subjectFilter;
        }
        return true;
      });
    }
  },
  methods: {
    // filtering() {
    // if (this.regionFilter === "Celá ČR") {
    //   this.regionFilter = null;
    // }
    // if (this.subjectFilter === "Zobrazit vše") {
    //   this.subjectFilter = null;
    // }
    // const filtered_entries = db
    //   .collection("profiles")
    //   .where("region", "==", this.regionFilter)
    //   .where("subject", "==", this.subjectFilter);
    // this.$bind("profiles", filtered_entries);
    // console.log(this.profiles);
    //            //.get()
    // .then(snap => {
    //   snap.forEach(doc => {
    //     console.log(doc.data());
    //   });
    // });
  }
};

//  if (this.regionFilter !== "Celá ČR") {
//       const filtered_entries = db
//         .collection("profiles")
//         .where("region", "==", this.regionFilter);
//       this.$bind("profiles", filtered_entries);
//     } else {
//       this.$bind("profiles", all_entries);
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

