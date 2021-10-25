<template>
  <v-card>
    <v-card-title>
      This week's meals
      <v-spacer></v-spacer>
      <v-chip color="primary" to="/groceryList">
        Get grocery list
        <v-icon right>mdi-arrow-right</v-icon>
      </v-chip>
    </v-card-title>

    <v-card-text>
      List here
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <ClearAllRecipesDialog class="clear-button" />
    </v-card-actions>
  </v-card>
</template>

<script>
import ClearAllRecipesDialog from "./ClearAllRecipes.vue";

export default {
  name: "GroceryListDisplay",

  components: {
    ClearAllRecipesDialog,
  },

  data: () => ({}),
};
</script>
