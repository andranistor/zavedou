<template>
  <button @click="pressButton" id="button">{{ btnName }}</button>
</template>
<script>
export default {
  name: "Button",
  props: ["btnName"],
  data() {
    return {
      image: "./assets/img/button_on.png"
    };
  },

  methods: {
    pressButton() {
      this.$emit("vyber");
    }
  }
};
</script scoped>
<style>
</style>  