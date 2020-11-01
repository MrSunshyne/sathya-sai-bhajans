<template>
  <div>
    <input type="text" class="p-4 text-2xl text-center shadow-lg border border-gray-200 my-10" v-model="searchTerm" placeholder="Type to search" />
    <pre>
      {{ resultIds }}
    </pre>
    <div class="grid grid-cols-3">
      <div v-for="(bhajan, value, index) in all" :key="value + index" class="shadow-lg p-10">
        <p v-for="line in bhajan.content" :key="line">{{ line }}</p>
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
      searchTerm: "ram",
    };
  },
  computed: {
    ...mapSearchGetters("bhajans", {
      resultIds: getterTypes.result,
      isLoading: getterTypes.isSearching,
    }),
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
