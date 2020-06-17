<template>
  <div role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle="'accordion-' + id" variant="info">
          <div class="d-flex justify-content-around align-items-center">
            <div>
              <img class="avatar" :src="image" />
            </div>
            <div class="name_surname">{{ name }} {{ surname }}</div>
            <div class="subject">{{ subject }}</div>
          </div>
        </b-button>
      </b-card-header>
      <b-collapse :id="'accordion-' + id" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <table>
            <tr>
              <b-card-text>
                <td>
                  <strong>Z jaké jsem instituce:</strong>
                </td>
                <td>{{ institution }}</td>
              </b-card-text>
            </tr>
            <tr>
              <b-card-text>
                <td>
                  <strong>Co nabízím:</strong>
                </td>
                <td>{{ offer }}</td>
              </b-card-text>
            </tr>
            <tr>
              <b-card-text>
                <td>
                  <strong>Komu:</strong>
                </td>
                <td>{{ forwhom }}</td>
              </b-card-text>
            </tr>
            <tr>
              <b-card-text>
                <td>
                  <strong>Kde působím:</strong>
                </td>
                <td>{{ region }}</td>
              </b-card-text>
            </tr>
            <tr>
              <b-card-text>
                <td>
                  <strong>Mé kontaktní údaje:</strong>
                </td>
                <td>{{ contact }}</td>
              </b-card-text>
            </tr>
          </table>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Profile",
  props: [
    "id",
    "name",
    "surname",
    "subject",
    "institution",
    "offer",
    "forwhom",
    "region",
    "contact",
    "image"
  ]
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
