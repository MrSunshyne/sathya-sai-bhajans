<template>
  <div>
    <!-- <input @keyup="startSearch" type="text" class="p-4 my-10 text-2xl text-center border border-gray-200 shadow-lg" v-model="searchTerm" placeholder="Type to search" />
    <pre>
      {{ results }}
    </pre> -->
    <div class="flex items-center justify-center space-x-3">
      <vue-fuse v-model="searchTerm" :keys="keys" :list="all" :threshold="threshold" :defaultAll="false" eventName="results" class="p-4 my-10 text-2xl text-center border border-gray-200 shadow-lg"></vue-fuse>
      <!-- <input type="range" min="0.0" max="1.0" step="0.1" v-model="sensitivity" /> {{ sensitivity }} -->
      <!-- <button class="p-4 text-xs text-black bg-gray-500 rounded-lg outline" @click="runSearch">Search</button> -->
      <div>{{ results.length }} results</div>
    </div>
    <div class="grid grid-cols-3 ">
      <div v-for="(bhajan, value, index) in results" :key="bhajan.id" class="grid p-10 font-serif text-xl font-medium shadow-lg place-items-center">
        <div class="">
          <!-- <p>{{ bhajan.content }}</p> -->
          <p v-for="(line, index) in bhajan.content" :key="bhajan.id + index">{{ line }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      searchTerm: "vinayaka",
      keys: ["content"],
      results: [],
      timer: null,
      timerDelay: 300,
      sensitivity: 0.4,
    };
  },
  computed: {
    ...mapGetters(["all"]),
    threshold() {
      return parseFloat(this.sensitivity);
    },
  },
  created() {
    this.$on("results", (results) => {
      this.results = results;
    });
  },

  methods: {
    // ...mapActions(["search"]),

    runSearch() {
      // if (this.timer) {
      //   clearTimeout(this.timer);
      //   this.timer = null;
      // }
      // this.timer = setTimeout(() => {
      //   this.$search(this.searchTerm, this.all, { keys: ["content"], threshhold: this.sensitivity }).then((result) => {
      //     console.log(result);
      //     this.results = result;
      //   });
      // }, this.timerDelay);
    },
    // startSearch() {
    //   this.search(this.searchTerm);
    // },
  },
};
</script>

<style scoped></style>
