<template>
  <v-expansion-panel>
    <v-expansion-panel-header>
      Register:
    </v-expansion-panel-header>

    <v-expansion-panel-content>
      <v-card elevation="0">
        <v-card-text>
          <v-text-field
            type="email"
            id="email"
            v-model="email"
            value="email"
            placeholder="Email"
            prepend-icon="mdi-email"
            clearable
            outlined
          ></v-text-field>
          <v-text-field
            type="password"
            id="password"
            v-model="password"
            value="password"
            placeholder="Password"
            prepend-icon="mdi-lock"
            clearable
            outlined
          ></v-text-field>
          <v-text-field
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
            value="confirmPassword"
            placeholder="Confirm password"
            prepend-icon="mdi-lock"
            clearable
            outlined
          ></v-text-field>
        </v-card-text>

        <v-card-actions>
          <v-btn elevation="0" dark>
            <v-icon left>mdi-cancel</v-icon>
            Cancel</v-btn
          >
          <v-spacer></v-spacer>
          <v-btn elevation="0" dark
            >Submit
            <v-icon right>mdi-login</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  name: "RegistrationForm",

  data: () => ({
    email: "",
    password: "",
    confirmPassword: "",
  }),
};
</script>

<style scoped>
.v-expansion-panel::before {
  box-shadow: none;
}
</style>
