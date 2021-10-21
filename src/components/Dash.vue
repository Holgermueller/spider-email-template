<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <AddRecipeDialog />

          <RecipeDisplay />
        </v-col>
        <v-col>
          <ThisWeeksRecipes />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import AddRecipeDialog from "./DashComponents/AddRecipe.vue";
import RecipeDisplay from "./DashComponents/RecipeDisplay.vue";
import ThisWeeksRecipes from "./DashComponents/ThisWeeksRecipes.vue";

export default {
  name: "Dashboard",

  components: {
    AddRecipeDialog,
    RecipeDisplay,
    ThisWeeksRecipes,
  },

  data: () => ({}),
};
</script>
