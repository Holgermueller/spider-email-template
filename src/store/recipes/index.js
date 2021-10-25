export default {
  state: {
    recipes: [
      {
        name: "tacos",
      },
      {
        name: "pizza",
      },
    ],
  },

  mutations: {},

  actions: {
    addReciped() {},
  },

  getters: {
    recipes(state) {
      return state.recipes;
    },
  },
};
