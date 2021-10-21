<template>
  <v-card>
    <v-card-title>
      This week's meals
      <v-spacer></v-spacer>
      <v-chip color="primary" to="/groceryList">
        Get grocery list
        <v-icon right>mdi-arrow-right</v-icon>
      </v-chip>
    </v-card-title>

    <v-card-text>
      List here
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "GroceryListDisplay",

  data: () => ({}),
};
</script>
