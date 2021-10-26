<template>
  <div>
    <v-card
      class="recipe-card"
      elevation="0"
      v-for="(recipe, index) in recipes"
      :index="index"
      :key="index"
    >
      <v-card-title>
        {{ recipe.name }}
      </v-card-title>
      <v-card-text></v-card-text>

      <v-card-actions>
        <v-chip
          >See ingredients
          <v-icon right>mdi-arrow-right</v-icon>
        </v-chip>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "SingleRecipeCard",

  props: {
    recipes: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.recipe-card {
  margin: 2px 0;
}
</style>
