import Vue from "vue";
import Vuex from "vuex";
import bhajans from "./bhajans.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bhajans: bhajans,
  },
  getters: {
    all(state) {
      return state.bhajans;
    },
  },
  mutations: {},
  modules: {},
});
