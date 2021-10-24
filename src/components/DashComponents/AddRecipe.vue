<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="600">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on" block>
          Add A Recipe
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          Add A Recipe
        </v-card-title>

        <v-card-text>
          form here
        </v-card-text>

        <v-card-actions>
          <v-btn elevation="0" dark color="red" @click.prevent="closeDialog">
            <v-icon left>mdi-cancel</v-icon>
            Cancel</v-btn
          >
          <v-spacer></v-spacer>
          <v-btn elevation="0" dark color="primary" @click.prevent="addRecipe">
            <v-icon left>mdi-check</v-icon>
            Submit</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "AddRecipeDialog",

  data: () => ({
    dialog: false,
  }),

  methods: {
    clearForm() {},

    closeDialog() {
      this.dialog = false;
    },

    addRecipe() {
      console.log("recipe added");

      this.closeDialog();
    },
  },
};
</script>
