<template>
  <div>
    <div class="grid grid-cols-3">
      <div v-for="(bhajan, value, index) in all" :key="value + index" class="shadow-lg p-10">
        <p v-for="line in bhajan" :key="line">{{ line }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["all"]),
  },
};
</script>

<style scoped></style>
