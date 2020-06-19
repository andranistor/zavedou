<template>
  <div class>
    <h1>Popularizátoři vědy</h1>
    <div>
      <label for="region-filter">
        Vyberte:
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
      <button @click="filtering">Filtrovat</button>
    </div>
    <div class="b-container fluid">
      <b-row>
        <div class="profiles" v-for="profile in profiles" :key="profile.id">
          <Profile
            :id="profile.id"
            :firstName="profile.firstName"
            :lastName="profile.lastName"
            :branch="profile.branch"
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
      institution: "",
      offer: "",
      whom: "",
      region: "",
      contact: "",
      image: "./assets/img/female_avatar.png",
      regionFilter: null
    };
  },
  // Showing and ordering the profiles by lastName
  firestore: {
    profiles: db.collection("profiles")
    // .where("region", "==", "Brno") // Filtering
    // .orderBy("lastName") // Ordering of profiles on the page by lastName
    // .limit(3) // It will show only 5 profiles on the page
  },
  methods: {
    filtering() {
      const all_entries = db.collection("profiles");
      if (this.regionFilter !== "Celá ČR") {
        const filtered_entries = db
          .collection("profiles")
          .where("region", "==", this.regionFilter);
        this.$bind("profiles", filtered_entries);
      } else {
        this.$bind("profiles", all_entries);
      }
    }
  }
};
</script>

<style></style>
