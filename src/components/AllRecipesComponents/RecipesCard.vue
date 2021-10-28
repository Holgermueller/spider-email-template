<template>
  <div>
    <v-card class="recipe-card">
      <v-card-title></v-card-title>

      <v-card-text></v-card-text>

      <v-card-actions>
        <v-chip>
          ingredients
        </v-chip>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "RecipeCard",

  data: () => ({}),
};
</script>

<style scoped>
.recipe-card {
  width: 75%;
  margin: 4px auto;
}
</style>
