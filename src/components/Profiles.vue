<template>
  <div>
    <h1>Popularizátoři vědy</h1>
    <div class="profiles d-flex">
      <MyProfile
        :id="id"
        :name="name"
        :surname="surname"
        :subject="subject"
        :institution="institution"
        :offer="offer"
        :forwhom="forwhom"
        :region="region"
        :contact="contact"
        :image="image"
      />
      <MyProfile
        :id="2"
        :name="'Jana'"
        :surname="'Modrá'"
        :subject="'informatika'"
        :institution="'Fakulta informatiky, České vysoké učení technické'"
        :offer="'Ukážu vám programování ve Scratchi'"
        :forwhom="'ZŠ'"
        :region="'Liberecký kraj'"
        :contact="'jana.modra@fit.cvut.cz'"
        :image="image"
      />
    </div>
  </div>
</template>

<script>
import Profile from "./Profile.vue";
export default {
  name: "Profiles",
  components: {
    MyProfile: Profile
  },
  data() {
    return {
      id: 1,
      name: "Lenka",
      surname: "Novotná, PhD",
      subject: "fyzika, matematika",
      institution: "Matematicko-fyzikální fakulta, Univerzita Karlova",
      offer:
        "Přednášky pro děti na 2. stupni ZŠ a na SŠ na jakékoliv fyzikální téma. Ráda i doučím matematiku.",
      forwhom: "ZŠ, SŠ",
      region: "Praha, Středočeský kraj",
      contact: "lenka.novotna@matfyz.cuni.cz",
      image: "./assets/img/female_avatar.png"
    };
  }
};
</script>

<style>
</style>
