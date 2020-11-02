<template>
  <div class="p-2 bg-orange-100 md:p-10">
    <!-- <input @keyup="startSearch" type="text" class="p-4 my-10 text-2xl text-center border border-gray-200 shadow-lg" v-model="searchTerm" placeholder="Type to search" />
    <pre>
      {{ results }}
    </pre> -->
    <div class="sticky top-0 items-center justify-center md:space-x-3 md:flex">
      <vue-fuse
        v-model="searchTerm"
        :keys="keys"
        :list="all"
        :threshold="threshold"
        :defaultAll="false"
        eventName="results"
        placeholder="Type to search"
        class="w-full p-4 mt-4 text-xl text-center border border-gray-200 rounded rounded-full shadow-lg md:my-10 md:text-2xl"
      ></vue-fuse>
      <!-- <input type="range" min="0.0" max="1.0" step="0.1" v-model="sensitivity" /> {{ sensitivity }} -->
      <!-- <button class="p-4 text-xs text-black bg-gray-500 rounded-lg outline" @click="runSearch">Search</button> -->
      <div class="w-full bg-white rounded-full ">
        {{ results.length }} results
      </div>
    </div>
    <div class="grid gap-4 md:grid-cols-3">
      <div
        v-for="(bhajan, value, index) in results"
        :key="bhajan.id"
        class="grid p-3 font-serif text-base font-medium bg-gray-100 shadow-lg md:text-xl md:p-10 place-items-center"
      >
        <div class="">
          <!-- <p>{{ bhajan.content }}</p> -->
          <p v-for="(line, index) in bhajan.content" :key="bhajan.id + index">
            {{ line }}
          </p>
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
      searchTerm: "",
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
