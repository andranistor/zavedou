<template>
  <button @click="pressButton" :class="{color:selected}">{{btnName}}</button>
</template>
<script>
export default {
  name: "Button",
  props: ["btnName"],
  data() {
    return {
      selected: false
    };
  },
  methods: {
    pressButton() {
      this.$emit("vyber");
      // this.selected = !this.selected;
    }
  }
};
</script>
<style>
.color {
  background-color: green;
}
</style>  