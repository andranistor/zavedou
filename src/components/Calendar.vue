<template>
  <div class="calendar">
    <h1>Kalendář akcí</h1>
    <div v-for="event in events" :key="event.id">
      <Event
        :id="event.id"
        :name="event.name"
        :type="event.type"
        :description="event.description"
        :place="event.place"
        :town="event.address.town"
        :street="event.address.street"
        :descriptiveNumber="event.address.descriptiveNumber"
        :orientationNumber="event.address.orientationNumber"
        :townPart="event.address.townPart"
        :zipCode="event.address.zipCode"
        :link="event.link"
        :child="event.attender.child"
        :teenager="event.attender.teenager"
        :adult="event.attender.adult"
        :start="event.date.start"
        :end="event.date.end"
        :note="event.date.end"
      />
    </div>
    <div>
      <FormEvent />
    </div>
  </div>
</template>

<script>
import { db } from "../utils/db";
import Event from "./Event.vue";
import FormEvent from "./FormEvent.vue";

export default {
  name: "Calendar",
  components: {
    FormEvent,
    Event
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
    events: db.collection("events") //.orderBy("start")
  }
  // computed: {
  //   let dayStart = new Date(this.start);
  //   let dayEnd = new Date(this.end);
  //   start = `${dayStart.getDate()}.${dayStart.getMonth() +
  //     1}.${dayStart.getFullYear()}`;
  //   end = `${dayEnd.getDate()}.${dayEnd.getMonth() +
  //     1}.${dayEnd.getFullYear()}`;
  // }
};
</script>

<style>
</style>
