import Vue from "vue";
import Vuex from "vuex";

import User from "./user";
import Shared from "./shared";
import Recipes from "./recipes";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    User,
    Shared,
    Recipes,
  },
});
