<template>
  <button @click="pressButton">{{btnName}}</button>
</template>
<script>
export default {
  name: "Button",
  props: ["btnName"],
  data() {
    return {};
  },

  methods: {
    pressButton() {
      this.$emit("vyber");
    }
  }
};
</script>
<style>
.color {
  background-color: green;
}
</style>  