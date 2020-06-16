<template>
  <div class="hlavicka">
    <header>
      <img src="assets/img/logo.png" alt="logo" />
      <router-link to="/">Domovská stránka</router-link>
      <router-link to="/map">Mapa</router-link>
      <router-link to="/profiles">Profily vědců</router-link>
      <router-link to="/calendar">Kalendář akcí</router-link>
      <router-link to="/about">O projektu</router-link>
      <router-link to="/forchildren">Pro děti</router-link>
      <router-view></router-view>
    </header>
    <img class="d-none d-lg-block d-xl-block" src="assets/img/jumbotron_desktop.png" />
    <img class="d-none d-md-block d-lg-none" src="assets/img/jumbotron_tablet.png" />
    <img class="d-xs-block d-md-none" src="assets/img/jumbotron_mobile.png" />

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
      <img class="d-none d-md-block footer" src="assets/img/footer.png" />
      <img class="d-none d-md-block d-lg-none footer" src="assets/img/footer_tablet.png" />
      <img class="d-xs-block d-md-none footer" src="assets/img/footer_mobile.png" />
    </div>
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

body img {
  width: 100%;
}

.footer {
  position: absolute;
  bottom: 0;
  left: 0;
}

@media (max-width: 767.98px) {
  header {
    height: 90px;
  }
  header img {
    width: 200px;
    padding: 30px 20px;
  }
}

@media (max-width: 991.98px) and (min-width: 767.99px) {
  header {
    height: 110px;
  }
  header img {
    width: 250px;
    padding: 30px 20px;
  }
}

@media (min-width: 991.99px) {
  header {
    height: 120px;
  }
  header img {
    width: 300px;
    padding: 30px 20px;
  }
}
</style>
