<template>
  <div class="flex flex-col w-full gap-y-4">
    <div class="flex flex-row w-full">
      <div class="w-1/2 px-4">
        <div class="progress-bar relative pt-1">
          <div class="flex mb-1 items-center justify-between">
            <div>
              <span class="progress-label"> Python </span>
            </div>
            <div class="text-right">
              <span class="progress-percent"> 87% </span>
            </div>
          </div>
          <div class="progress-outer">
            <div style="width: 87%" class="progress-inner"></div>
          </div>
        </div>
      </div>
      <div class="w-1/2 px-4">
        <div class="progress-bar relative pt-1">
          <div class="flex mb-1 items-center justify-between">
            <div>
              <span class="progress-label"> JavaScript/TypeScript </span>
            </div>
            <div class="text-right">
              <span class="progress-percent"> 82% </span>
            </div>
          </div>
          <div class="progress-outer">
            <div style="width: 82%" class="progress-inner"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-row w-full">
      <div class="w-1/2 px-4">
        <div class="progress-bar relative pt-1">
          <div class="flex mb-1 items-center justify-between">
            <div>
              <span class="progress-label"> Vue 3, Vuex </span>
            </div>
            <div class="text-right">
              <span class="progress-percent"> 74% </span>
            </div>
          </div>
          <div class="progress-outer">
            <div style="width: 74%" class="progress-inner"></div>
          </div>
        </div>
      </div>
      <div class="w-1/2 px-4">
        <div class="progress-bar relative pt-1">
          <div class="flex mb-1 items-center justify-between">
            <div>
              <span class="progress-label"> Relational Databases </span>
            </div>
            <div class="text-right">
              <span class="progress-percent"> 85% </span>
            </div>
          </div>
          <div class="progress-outer">
            <div style="width: 85%" class="progress-inner"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-row w-full">
      <div class="w-1/2 px-4">
        <div class="progress-bar relative pt-1">
          <div class="flex mb-1 items-center justify-between">
            <div>
              <span class="progress-label"> Photoshop/Illustrator </span>
            </div>
            <div class="text-right">
              <span class="progress-percent"> 78% </span>
            </div>
          </div>
          <div class="progress-outer">
            <div style="width: 78%" class="progress-inner"></div>
          </div>
        </div>
      </div>
      <div class="w-1/2 px-4">
        <div class="progress-bar relative pt-1">
          <div class="flex mb-1 items-center justify-between">
            <div>
              <span class="progress-label"> ArcGIS/QGIS </span>
            </div>
            <div class="text-right">
              <span class="progress-percent"> 93% </span>
            </div>
          </div>
          <div class="progress-outer">
            <div style="width: 93%" class="progress-inner"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "progressBar",
};
</script>

<style scoped>
.about-text {
  @apply text-off-white font-mono text-xl tracking-wide font-light text-left;
}
.progress-label {
  @apply text-sm font-bold font-mukta inline-block py-1 uppercase text-off-white;
}
.progress-percent {
  @apply text-sm font-semibold font-mukta inline-block text-off-white opacity-75;
}
.progress-outer {
  @apply overflow-hidden h-2 text-xs flex rounded-md bg-off-white;
}
.progress-inner {
  @apply shadow-none flex flex-col text-center whitespace-nowrap text-off-white justify-center bg-weird-red;
}
</style>
