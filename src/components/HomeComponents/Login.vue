<template>
  <v-expansion-panel>
    <v-expansion-panel-header>
      Log in
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-card elevation="0">
        <v-card-text>
          <v-form ref="form" id="loginForm" class="log-in-form">
            <v-text-field
              type="email"
              id="email"
              value="email"
              v-model="email"
              label="Email"
              outlined
              clearable
              prepend-icon="mdi-email"
            ></v-text-field>

            <v-text-field
              type="password"
              id="password"
              value="password"
              v-model="password"
              label="Password"
              outlined
              clearable
              prepend-icon="mdi-lock"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn elevation="0">
            <v-icon left>mdi-cancel</v-icon>
            Cancel</v-btn
          >
          <v-spacer></v-spacer>
          <v-btn elevation="0"
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
  name: "LogInForm",

  data: () => ({
    password: "",
    email: "",
  }),
};
</script>

<style scoped>
.v-expansion-panel::before {
  box-shadow: none;
}
</style>
