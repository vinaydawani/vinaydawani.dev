<template>
  <div id="projects" class="flex flex-col">
    <div
      class="
        text-off-white text-4xl
        font-montserrat font-medium
        tracking-widest
        px-28
        pt-16
      "
    >
      Featured Works
    </div>
    <Portfolio></Portfolio>
  </div>
</template>

<script>
import Portfolio from "@/components/Portfolio.vue";

export default {
  name: "Projects",
  components: {
    Portfolio,
  },
};
</script>

<style scoped>
#projects {
  height: calc(100% - 50px);
}
</style>
