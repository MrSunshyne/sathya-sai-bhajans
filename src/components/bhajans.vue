<template>
  <div>
    <input @keyup="doSearch" type="text" class="p-4 my-10 text-2xl text-center border border-gray-200 shadow-lg" v-model="searchTerm" placeholder="Type to search" />
    <button @click="doSearch">Search</button>
    <div v-if="isLoading">loading</div>
    <div v-else>search completed</div>
    <span>
      {{ resultIds }}
    </span>
    <div class="grid grid-cols-3">
      <div v-for="(bhajan, index) in filteredResults" class="p-10 shadow-lg">
        {{ bhajan.content }}
        <!-- <div v-html="bhajan.content"></div> -->
        <!-- <p v-for="line in bhajan.content" :key="line">{{ line }}</p> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions as mapSearchActions, mapGetters as mapSearchGetters, getterTypes, actionTypes } from "vuex-search";

export default {
  data() {
    return {
      searchTerm: "shiva",
      filteredResults: [],
    };
  },
  computed: {
    ...mapGetters(["all"]),
    ...mapSearchGetters("bhajans", {
      resultIds: getterTypes.result,
      isLoading: getterTypes.isSearching,
    }),
  },
  watch: {
    resultIds: function(newStuff, oldStuff) {
      console.log(newStuff);
      const result = this.all.filter(({ id }) => newStuff.includes(id));
      console.log(result);
      this.filteredResults = result;
    },
  },
  methods: {
    ...mapSearchActions("bhajans", {
      searchBhajans: actionTypes.search,
    }),
    doSearch() {
      this.searchBhajans(this.searchTerm);
    },
  },
};
</script>

<style scoped></style>
