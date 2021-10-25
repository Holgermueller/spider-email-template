<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <AddRecipeDialog />

          <RecipeDisplay />
        </v-col>
        <v-col>
          <ThisWeeksMeals />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import AddRecipeDialog from "./DashComponents/AddRecipe.vue";
import RecipeDisplay from "./DashComponents/RecipeDisplay.vue";
import ThisWeeksMeals from "./DashComponents/ThisWeeksMeals.vue";

export default {
  name: "Dashboard",

  components: {
    AddRecipeDialog,
    RecipeDisplay,
    ThisWeeksMeals,
  },

  data: () => ({}),
};
</script>
