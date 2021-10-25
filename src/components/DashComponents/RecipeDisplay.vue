<template>
  <v-card id="recipeDisplay">
    <v-card-title>
      Recipes here
    </v-card-title>

    <v-card-text>
      {{ recipes }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "RecipeDisplay",

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
