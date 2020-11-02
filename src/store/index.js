import Vue from "vue";
import Vuex from "vuex";
import bhajans from "./bhajans.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bhajans: bhajans,
    searchResults: [],
    options: null,
  },
  getters: {
    all(state) {
      return state.bhajans;
    },
    results(state) {
      return state.searchResults;
    },
  },
  actions: {
    search({ state, commit }, term) {
      this.$search(term, this.bhajans, state.options).then((results) => {
        state.searchResults = results;
      });

      let result = [];
      commit("updateResults", result);
    },
  },
  mutations: {
    updateResults(state, payload) {
      state.searchResults = payload;
    },
  },
  modules: {},
});
