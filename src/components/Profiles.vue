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
.name_surname,
.subject {
  font-family: "Roboto Slab";
  font-size: 25px;
}

td:first-child {
  width: 200px;
}

.avatar {
  height: 80px;
  width: 80px;
  padding: 0;
}

div[role="tablist"] {
  margin: 20px;
}

.card.mb-1 {
  width: 700px;
}

.card-text:last-child {
  width: 650px;
}

.card-body {
  background-color: whitesmoke;
  font-family: "Roboto Slab";
  line-height: 35px;
}

.card-header:first-child {
  width: 700px;
  height: 100px;
  background-color: #84d3ef;
}

.card-header.p-1 {
  padding: 0 !important; /*tímto přepisuji Bootstrap-Vue třídu, která má také !important */
}

.btn.btn-info {
  width: 700px;
  height: 100px;
  background-color: #84d3ef;
  border-color: #84d3ef;
}

.btn.btn-info:hover {
  width: 700px;
  height: 100px;
  background-color: #84d3ef;
  border-color: #84d3ef;
}

.btn.btn-info:focus {
  width: 700px;
  height: 100px;
  background-color: #84d3ef;
  border-color: #84d3ef;
}
</style>
