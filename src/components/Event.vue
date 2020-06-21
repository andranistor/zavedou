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
    <b-col sm="12" md="12" lg="4">
      <div>
        <div class="event">
          <table>
            <tr>
              <b-card-text>
                <td>
                  <strong>Jsem z:</strong>
                </td>
                <td>{{ institution }}</td>
              </b-card-text>
            </tr>
            <tr>
              <b-card-text>
                <td>
                  <strong>Obor:</strong>
                </td>
                <td>{{ branch }}</td>
              </b-card-text>
            </tr>
            <tr>
              <b-card-text>
                <td>
                  <strong>Nabízím:</strong>
                </td>
                <td>{{ offer }}</td>
              </b-card-text>
            </tr>
            <tr>
              <b-card-text>
                <td>
                  <strong>Komu:</strong>
                </td>
                <td>{{ whom }}</td>
              </b-card-text>
            </tr>
            <tr>
              <b-card-text>
                <td>
                  <strong>Pro oblast:</strong>
                </td>
                <td>{{ region }}</td>
              </b-card-text>
            </tr>
            <tr>
              <b-card-text>
                <td>
                  <strong>Kontakt:</strong>
                </td>
                <td>{{ contact }}</td>
              </b-card-text>
            </tr>
          </table>
        </div>
      </div>
    </b-col>
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

<style>
.event {
  width: 500px;
}
</style>
