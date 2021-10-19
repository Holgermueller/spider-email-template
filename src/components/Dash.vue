<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <AddRecipeDialog />

          <RecipeDisplay />
        </v-col>
        <v-col>
          <GroceryListDisplay />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import AddRecipeDialog from "./DashComponents/AddRecipe.vue";
import RecipeDisplay from "./DashComponents/RecipeDisplay.vue";
import GroceryListDisplay from "./DashComponents/GroceryList.vue";

export default {
  name: "Dashboard",

  components: {
    AddRecipeDialog,
    RecipeDisplay,
    GroceryListDisplay,
  },

  data: () => ({}),
};
</script>
