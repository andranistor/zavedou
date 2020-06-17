<template>
  <div class="d-flex flex-column justify-content-between">
    <div class="hlavicka">
      <header>
        <img src="assets/img/logo.png" alt="logo" />
        <router-link to="/">Domovská stránka</router-link>
        <router-link to="/map">Mapa</router-link>
        <router-link to="/profiles">Profily vědců</router-link>
        <router-link to="/calendar">Kalendář akcí</router-link>
        <router-link to="/about">O projektu</router-link>
        <router-link to="/forchildren">Pro děti</router-link>
      </header>
      <img class="d-none d-lg-block d-xl-block" src="assets/img/jumbotron_desktop.png" />
      <img class="d-none d-md-block d-lg-none" src="assets/img/jumbotron_tablet.png" />
      <img class="d-xs-block d-md-none" src="assets/img/jumbotron_mobile.png" />
    </div>
    <div class="page--center">
      <router-view></router-view>
    </div>
    <div class="footer">
      <!--<img class="d-none d-md-block footer" src="assets/img/footer.png" />
      <img class="d-none d-md-block d-lg-none footer" src="assets/img/footer_tablet.png" />
      <img class="d-xs-block d-md-none footer" src="assets/img/footer_mobile2.png" />-->
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

.page--center {
  height: 80vh;
}

.footer {
  width: 100%;
  height: 80px;
  background-color: #9df4f4;
  opacity: 70%;
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
