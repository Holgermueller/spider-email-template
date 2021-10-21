<template>
  <div>
    <GroceryListDisplay />
  </div>
</template>

<script>
import GroceryListDisplay from "./GroceryListCompnents/GroceryListDisplay.vue";

export default {
  name: "GroceryListPage",

  components: {
    GroceryListDisplay,
  },

  data: () => ({}),
};
</script>

<style scoped></style>
