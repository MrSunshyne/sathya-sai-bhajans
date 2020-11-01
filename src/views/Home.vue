<template>
  <div class="home">
    <bhajans />
  </div>
</template>

<script>
// @ is an alias to /src
import bhajans from "@/components/bhajans.vue";

export default {
  name: "Home",
  components: {
    bhajans,
  },
};
</script>
