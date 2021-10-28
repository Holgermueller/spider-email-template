<template>
  <div>
    <RecipesListFilter />

    <RecipesCard />
  </div>
</template>

<script>
import RecipesListFilter from "./AllRecipesComponents/RecipesFilter.vue";

import RecipesCard from "./AllRecipesComponents/RecipesCard.vue";

export default {
  name: "AllRecipesPage",

  components: {
    RecipesListFilter,
    RecipesCard,
  },

  data: () => ({}),
};
</script>
