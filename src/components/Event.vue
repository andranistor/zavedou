<template>
  <div>
    <div>
      <strong>Událost:</strong>
      {{ name }}
      {{ type }}
      {{ description }}
      {{ place }}
      {{ town }}
      {{ street }}
      {{ region }}
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
    "region"
  ]
};
</script>

<style></style>
