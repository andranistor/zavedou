<template>
  <div class>
    <h1>Popularizátoři vědy</h1>
    <div>
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
      <label for="subject-filter">
        Vyberte školní předmět:
        <select
          class="custom-select select-selected"
          name="type"
          id="subject-filter"
          v-model="subjectFilter"
        >
          <option class="select-items">Zobrazit vše</option>
          <option class="select-items">Cizí jazyky</option>
          <option class="select-items">Čeština</option>
          <option class="select-items">Dějepis</option>
          <option class="select-items">Fyzika</option>
          <option class="select-items">Chemie</option>
          <option class="select-items">Matematika</option>
          <option class="select-items">Občanská výchova</option>
          <option class="select-items">Přirodopis/biologie</option>
          <option class="select-items">Informatika</option>
          <option class="select-items">Hudební a výtvarná výchova</option>
          <option class="select-items">Zeměpis</option>
        </select>
      </label>
    </div>
    <div class="b-container fluid">
      <b-row>
        <!-- <div
          class="profiles"
          
        > -->
        <b-col
          sm="12"
          md="12"
          lg="6"
          v-for="profile in filtered_profiles"
          :key="profile.id"
        >
          <Profile
            :id="profile.id"
            :firstName="profile.firstName"
            :lastName="profile.lastName"
            :field="profile.field"
            :subject="profile.subject"
            :institution="profile.institution"
            :offer="profile.offer"
            :whom="profile.whom"
            :region="profile.region"
            :contact="profile.contact"
            :image="image"
          />
        </b-col>
        <!-- </div> -->
      </b-row>
    </div>

    <div>
      <router-link to="/addprofile">
        <button>Odeslat</button>
      </router-link>
      <!-- <FormProfile /> -->
    </div>
  </div>
</template>

<script>
import { db } from "../utils/db";
import Profile from "./Profile.vue";
// import FormProfile from "./FormProfile.vue";

export default {
  name: "Profiles",
  components: {
    Profile,
    // FormProfile
  },
  data() {
    return {
      profiles: [],
      id: "",
      firstName: "",
      lastName: "",
      field: "",
      branch: "",
      subject: "",
      institution: "",
      offer: "",
      whom: "",
      region: "",
      contact: "",
      image: "./assets/img/female_avatar.png",
      regionFilter: "Celá ČR",
      subjectFilter: "Zobrazit vše",
    };
  },
  // Showing and ordering the profiles by lastName
  firestore: {
    profiles: db.collection("profiles"),
    // .where("region", "==", "Brno") // Filtering
    // .orderBy("lastName") // Ordering of profiles on the page by lastName
    // .limit(3) // It will show only 5 profiles on the page
  },
  computed: {
    filtered_profiles() {
      return this.profiles.filter((item) => {
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
    },
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
  },
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
