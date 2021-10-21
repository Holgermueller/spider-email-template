<template>
  <v-card id="groceryListDisplay">
    <v-card-title>
      This week's groceries:
    </v-card-title>

    <v-card-text></v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn>Back</v-btn>
      <v-spacer></v-spacer>
      <v-btn>Clear All</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "GroceryListDisplay",

  data: () => ({}),
};
</script>

<style scoped>
#groceryListDisplay {
  width: 75%;
  margin: 7% auto;
}
</style>
