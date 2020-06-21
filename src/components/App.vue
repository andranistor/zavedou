<template>
  <div class="d-flex flex-column justify-content-between">
    <div class="hlavicka">
      <header>
        <div class="menu d-flex justify-content-around align-items-center">
          <router-link to="/">
            <img src="assets/img/logo.png" alt="logo" />
          </router-link>

          <router-link to="/">Domovská stránka</router-link>
          <!-- <router-link to="/map">Mapa</router-link> -->
          <router-link to="/profiles">Profily vědců</router-link>
          <router-link to="/calendar">Kalendář akcí</router-link>
          <router-link to="/about">O projektu</router-link>
          <router-link to="/contact">Kontakt</router-link>
        </div>
      </header>
      <img class="d-none d-lg-block d-xl-block" src="assets/img/jumbotron_desktop.png" />
      <img class="d-none d-md-block d-lg-none" src="assets/img/jumbotron_tablet.png" />
      <img class="d-xs-block d-md-none" src="assets/img/jumbotron_mobile.png" />
    </div>

    <div class="page--center">
      <router-view></router-view>
    </div>

    <div class="footer">
      <router-link to="/">Domovská stránka</router-link>
      <!-- <router-link to="/map">Mapa</router-link> -->
      <router-link to="/profiles">Profily vědců</router-link>
      <router-link to="/calendar">Kalendář akcí</router-link>
      <router-link to="/about">O projektu</router-link>
      <router-link to="/contact">Kontakt</router-link>
      <!-- <img class="d-none d-md-block footer" src="assets/img/footer.png" />
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
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  box-sizing: border-box;
}

body {
  font-family: "Roboto Slab";
  width: 70%;
  margin: auto 0;
}

body h1 {
  font-family: "Raleway";
  font-weight: 300;
}

body img {
  width: 100%;
}
.custom_pin {
  width: 40px;
}

.page--center {
  min-height: 90vh;
}

.footer {
  width: 100%;
  height: 8vh;
  background-color: #9df4f4;
  opacity: 70%;
}

@media (max-width: 767.98px) {
  header {
    height: 12%;
  }
  header img {
    width: 200px;
    padding: 30px 20px;
  }
}

@media (max-width: 991.98px) and (min-width: 767.99px) {
  header {
    height: 12%;
  }
  header img {
    width: 250px;
    padding: 30px 20px;
  }
}

@media (min-width: 991.99px) {
  header {
    height: 12%;
  }
  header img {
    width: 300px;
    padding: 30px 20px;
  }
}
</style>
