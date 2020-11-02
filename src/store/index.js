import Vue from "vue";
import Vuex from "vuex";
import searchPlugin from "vuex-search";
import state from "./state";
Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters: {
    all(state) {
      return state.myResources.bhajans;
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
          getter: (state) => state.myResources.bhajans,
          // how resource should be watched
          watch: { delay: 500 },
        },
        // otherResource: { index, getter, watch, searchApi },
      },
    }),
  ],
});
