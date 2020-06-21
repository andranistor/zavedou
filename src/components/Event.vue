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
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td class="title">
                <strong>{{name}}</strong>
              </td>
              <td>
                <strong>Od:</strong>
                {{ start }}
              </td>
              <td>
                <strong>Do:</strong>
                {{end}}
              </td>
            </tr>
            <tr>
              <td>{{ description }}</td>
              <td>
                <strong>Místo</strong>
                : {{ town }}
              </td>
            </tr>
            <tr>
              <td>
                <strong>Komu:</strong>
              </td>
              <td>{{ whom }}</td>
            </tr>
            <tr>
              <td>
                <strong>Pro oblast:</strong>
              </td>
              <td>{{ region }}</td>
            </tr>
            <tr>
              <td>
                <strong>Kontakt:</strong>
              </td>
              <td>{{ contact }}</td>
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
  width: 40rem;
  background-color: #84d3ef;
  border-radius: 20px;
  padding: 20px;
}
.title {
  font-size: 1.5rem;
}
td:first-child {
  width: 50%;
  text-align: justify;
  padding-right: 1rem;
}
</style>
