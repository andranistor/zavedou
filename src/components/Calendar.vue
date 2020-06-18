<template>
  <div class="calendar">
    <h1>Kalendář akcí</h1>
    <div>
      <FormEvent />
    </div>
  </div>
</template>

<script>
import { db } from "../utils/db";
// import Event from "./Event.vue";
import FormEvent from "./FormEvent.vue";

export default {
  name: "Calendar",
  components: {
    FormEvent
    // Event
  },
  data() {
    return {
      events: [],
      id: "",
      name: "",
      type: "",
      description: "",
      place: "",
      town: "",
      street: "",
      descriptiveNumber: "",
      orientationNumber: "",
      townPart: "",
      zipCode: "",
      link: "",
      child: "",
      teenager: "",
      adult: "",
      start: "",
      end: "",
      note: ""
    };
  },
  firestore: {
    profiles: db.collection("events").orderBy("start")
  }
};
</script>

<style>
</style>
