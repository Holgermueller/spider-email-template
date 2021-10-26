<template>
  <v-card id="recipeDisplay">
    <v-card-title>
      Recent recipes:
    </v-card-title>

    <v-card-text>
      <SingleRecipeCard :recipes="recipes" />
    </v-card-text>

    <v-card-actions>
      <v-btn color="primary" elevation="0" dark block to="/allRecipes">
        See all recipes
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import SingleRecipeCard from "./SingleRecipeCard.vue";

export default {
  name: "RecipeDisplay",

  components: {
    SingleRecipeCard,
  },

  computed: {
    recipes() {
      return this.$store.getters.recipes;
    },
  },

  data: () => ({}),
};
</script>

<style scoped>
#recipeDisplay {
  margin-top: 8px;
}
</style>
