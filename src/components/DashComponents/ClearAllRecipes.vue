<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="600">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark elevation="0" v-bind="attrs" v-on="on">
          Clear All
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          Clear all recipes:
        </v-card-title>

        <v-card-text>
          <p>Are you sure you want to clear all of your recipes?</p>

          <p>
            This action cannot be reversed.
          </p>
        </v-card-text>

        <v-card-actions>
          <v-btn color="red" dark elevation="0" @click.prevent="closeDialog"
            >Cancel</v-btn
          >
          <v-spacer></v-spacer>
          <v-btn color="primary" dark elevation="0" @click.prevent="clearAll"
            >Clear</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "ClearAllRecipesDialog",

  data: () => ({
    dialog: false,
  }),

  methods: {
    closeDialog() {
      this.dialog = false;
    },

    clearAll() {
      console.log("list cleared");
    },
  },
};
</script>

<style scoped>
.open-dialog-button {
  width: 100%;
}
</style>
