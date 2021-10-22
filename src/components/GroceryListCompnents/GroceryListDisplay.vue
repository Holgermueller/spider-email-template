<template>
  <v-card id="groceryListDisplay">
    <v-card-title>
      This week's groceries:
    </v-card-title>

    <v-card-text></v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn elevation="0" dark color="green" to="/dash">
        <v-icon left>
          mdi-arrow-left
        </v-icon>
        Back</v-btn
      >
      <v-spacer></v-spacer>
      <ClearGroceryListDialog />
    </v-card-actions>
  </v-card>
</template>

<script>
import ClearGroceryListDialog from "./ClearGroceryList.vue";

export default {
  name: "GroceryListDisplay",

  components: {
    ClearGroceryListDialog,
  },

  data: () => ({}),
};
</script>

<style scoped>
#groceryListDisplay {
  width: 75%;
  margin: 7% auto;
}
</style>
