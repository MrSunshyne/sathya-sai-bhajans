import Vue from "vue";
import Vuex from "vuex";
import bhajans from "./bhajans.js";
import searchPlugin from "vuex-search";

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
  plugins: [
    searchPlugin({
      resources: {
        bhajans: {
          // what fields to index
          index: ["content"],
          // access the state to be watched by Vuex Search
          getter: (state) => state.bhajans,
          // how resource should be watched
          watch: { delay: 500 },
        },
        // otherResource: { index, getter, watch, searchApi },
      },
    }),
  ],
});
