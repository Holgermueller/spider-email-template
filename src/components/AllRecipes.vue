<template>
  <div>
    <RecipesListFilter />

    <h1>
      All Recipes here
    </h1>
  </div>
</template>

<script>
import RecipesListFilter from "./AllRecipesComponents/RecipesFilter.vue";

export default {
  name: "AllRecipesPage",

  components: {
    RecipesListFilter,
  },

  data: () => ({}),
};
</script>
