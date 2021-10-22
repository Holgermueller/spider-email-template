<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="600">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" dark color="primary" elevation="0">
          Clear Grocery List
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          Clear grocery list?
        </v-card-title>

        <v-card-text>
          <p>
            Are you sure you want to clear your whole list?
          </p>

          <p>
            This action cannot be reversed.
          </p>
        </v-card-text>

        <v-card-actions>
          <v-btn color="red" elevation="0" dark @click.prevent="closeDialog"
            >Cancel</v-btn
          >
          <v-spacer></v-spacer>
          <v-btn color="primary" elevation="0" dark @click.prevent="clearList"
            >Clear</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "ClearGroceryListDialog",
  data: () => ({
    dialog: false,
  }),

  methods: {
    closeDialog() {
      this.dialog = false;
    },

    clearList() {
      console.log("list cleared!");

      this.closeDialog();
    },
  },
};
</script>
