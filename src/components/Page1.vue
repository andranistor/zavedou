<template>
  <div>
    <h1>Page 1</h1>
    <b-button size="sm" @click="toggle">{{ show ? 'Hide' : 'Show' }} Alert</b-button>
    <b-alert v-model="show" class="mt-3" dismissible @dismissed="dismissed">Hello {{ name }}!</b-alert>
  </div>
</template>

<script>
export default {
  name: "Page1",
  data() {
    return {
      name: "BootstrapVue",
      show: true
    };
  },
  watch: {
    show(newVal) {
      console.log("Alert is now " + (newVal ? "visible" : "hidden"));
    }
  },
  methods: {
    toggle() {
      console.log("Toggle button clicked");
      this.show = !this.show;
    },
    dismissed() {
      console.log("Alert dismissed");
    }
  }
};
</script>