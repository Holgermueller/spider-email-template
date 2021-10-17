<template>
  <div id="home">
    <LoginRegisterCard />
  </div>
</template>

<script>
import LoginRegisterCard from "./HomeComponents/LogReg.vue";

export default {
  name: "Home",

  components: {
    LoginRegisterCard,
  },

  data: () => ({}),
};
</script>
