<template>
  <div>
    <div>
      <strong>Údalost:</strong>
      {{ name }}
      {{ type }}
      {{ description }}
      {{ place }}
      {{ town }}
      {{ street }}
      {{ descriptiveNumber }}
      {{ orientationNumber }}
      {{ townPart }}
      {{ zipCode }}
      {{ link }}
      {{ child }}
      {{ teenager }}
      {{ adult }}
      {{ start }}
      {{ end }}
      {{ note }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Event",
  props: [
    "id",
    "name",
    "type",
    "description",
    "place",
    "town",
    "street",
    "descriptiveNumber",
    "orientationNumber",
    "townPart",
    "zipCode",
    "link",
    "child",
    "teenager",
    "adult",
    "start",
    "end",
    "note",
  ],
};
</script>

<style></style>
