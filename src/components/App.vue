<template>
  <div class="container">
    <router-link to="/page1">Go to Page 1</router-link>
    <router-link to="/page2">Go to Page 2</router-link>
    <router-link to="/profiles">Go to Profiles</router-link>
    <router-link to="/about">O projektu</router-link>

    <h1>Vue router</h1>
    <div>
      <b-button>Button</b-button>
      <b-button variant="danger">Button</b-button>
      <b-button variant="success">Button</b-button>
      <b-button variant="outline-primary">Button</b-button>
    </div>
    <div>
      <b-button v-b-modal.modal-1>Launch demo modal</b-button>

      <b-modal id="modal-1" title="BootstrapVue">
        <p class="my-4">Hello from modal!</p>
      </b-modal>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="css">
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}
</style>
