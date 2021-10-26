<template>
  <div class="list-filter">
    <v-card>
      <v-card-text clearable>
        <v-text-field label="Filter list" outlined clearable></v-text-field>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "RecipesListFilter",

  data: () => ({}),
};
</script>

<style scoped>
.list-filter {
  width: 75%;
  margin: 8px auto;
}
</style>
