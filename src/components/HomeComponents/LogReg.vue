<template>
  <v-card class="log-reg-card">
    <v-card-text>
      <v-expansion-panels focusable inset>
        <LogInForm />
        <RegistrationForm />
      </v-expansion-panels>
    </v-card-text>
  </v-card>
</template>

<script>
import LogInForm from "../HomeComponents/Login.vue";
import RegistrationForm from "../HomeComponents/Register.vue";

export default {
  name: "LoginRegisterCard",

  components: {
    LogInForm,
    RegistrationForm,
  },
};
</script>

<style scoped>
.log-reg-card {
  width: 65%;
  margin: 7% auto;
}
</style>
