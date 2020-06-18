<template>
  <div>
    <h1>Popularizátoři vědy</h1>
    <div class="profiles d-flex" v-for="profile in profiles" :key="profile.id">
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
      image: "./assets/img/female_avatar.png"
    };
  },
  // Showing and ordering the profiles by lastName
  firestore: {
    profiles: db
      .collection("profiles")
      .orderBy("lastName") // Ordering of profiles on the page by lastName
      .limit(5) // It will show only 5 profiles on the page
  }
};
</script>


<style>
</style>
