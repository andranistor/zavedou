<template>
  <div class="container">
    <router-link to="/">Domovská stránka</router-link>
    <router-link to="/map">Mapa</router-link>
    <router-link to="/profiles">Profily vědců</router-link>
    <router-link to="/calendar">Kalendář akcí</router-link>
    <router-link to="/about">O projektu</router-link>
    <router-link to="/forchildren">Pro děti</router-link>

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
