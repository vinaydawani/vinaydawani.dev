<template>
  <div id="about" class="mt-4">
    <section class="flex flex-row scroll-container">
      <div class="w-2/5 image-container">
        <img src="../assets/img/IMG_7496.jpg" alt="" class="h-max" />
      </div>
      <div class="w-3/5 content-container ml-8 px-4">
        <div
          class="
            pt-28
            text-center text-off-white text-5xl
            tracking-widest
            font-semibold font-montserrat
          "
        >
          About <span class="font-light text-weird-red">Me</span>
        </div>
        <div class="for-the-text mt-12 flex flex-col gap-y-8">
          <div class="">
            <p class="about-text w-4/5">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse
            </p>
          </div>
          <div class="flex justify-end">
            <p class="about-text w-11/12">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div class="">
            <p class="about-text w-4/5">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
          <div class="flex justify-end">
            <p class="about-text w-11/12">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
        </div>
        <div
          class="
            mt-24
            text-center text-off-white text-5xl
            tracking-widest
            font-semibold font-montserrat
          "
        >
          Some fancy stats...
        </div>
        <div class="for-the-progress mt-8">
          <div class="flex flex-col w-full gap-y-4">
            <div class="flex flex-row w-full">
              <div class="w-1/2 px-4">
                <div class="progress-bar relative pt-1">
                  <div class="flex mb-1 items-center justify-between">
                    <div>
                      <span class="progress-label"> Task in progress </span>
                    </div>
                    <div class="text-right">
                      <span class="progress-percent"> 30% </span>
                    </div>
                  </div>
                  <div class="progress-outer">
                    <div style="width: 30%" class="progress-inner"></div>
                  </div>
                </div>
              </div>
              <div class="w-1/2 px-4">
                <div class="progress-bar relative pt-1">
                  <div class="flex mb-1 items-center justify-between">
                    <div>
                      <span class="progress-label"> Task in progress </span>
                    </div>
                    <div class="text-right">
                      <span class="progress-percent"> 30% </span>
                    </div>
                  </div>
                  <div class="progress-outer">
                    <div style="width: 30%" class="progress-inner"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-row w-full">
              <div class="w-1/2 px-4">
                <div class="progress-bar relative pt-1">
                  <div class="flex mb-1 items-center justify-between">
                    <div>
                      <span class="progress-label"> Task in progress </span>
                    </div>
                    <div class="text-right">
                      <span class="progress-percent"> 30% </span>
                    </div>
                  </div>
                  <div class="progress-outer">
                    <div style="width: 30%" class="progress-inner"></div>
                  </div>
                </div>
              </div>
              <div class="w-1/2 px-4">
                <div class="progress-bar relative pt-1">
                  <div class="flex mb-1 items-center justify-between">
                    <div>
                      <span class="progress-label"> Task in progress </span>
                    </div>
                    <div class="text-right">
                      <span class="progress-percent"> 30% </span>
                    </div>
                  </div>
                  <div class="progress-outer">
                    <div style="width: 30%" class="progress-inner"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-row w-full">
              <div class="w-1/2 px-4">
                <div class="progress-bar relative pt-1">
                  <div class="flex mb-1 items-center justify-between">
                    <div>
                      <span class="progress-label"> Task in progress </span>
                    </div>
                    <div class="text-right">
                      <span class="progress-percent"> 30% </span>
                    </div>
                  </div>
                  <div class="progress-outer">
                    <div style="width: 30%" class="progress-inner"></div>
                  </div>
                </div>
              </div>
              <div class="w-1/2 px-4">
                <div class="progress-bar relative pt-1">
                  <div class="flex mb-1 items-center justify-between">
                    <div>
                      <span class="progress-label"> Task in progress </span>
                    </div>
                    <div class="text-right">
                      <span class="progress-percent"> 30% </span>
                    </div>
                  </div>
                  <div class="progress-outer">
                    <div style="width: 30%" class="progress-inner"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="flex flex-row github-container h-screen"></section>
  </div>
</template>

<script>
// import * as PIXI from "pixi.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "about-me",
  methods: {
    imageScroll() {
      const ST = ScrollTrigger.create({
        trigger: ".scroll-container",
        start: "top top",
        end: "bottom bottom",
        pin: ".image-container",
        markers: "true",
      });
      ST.enable();
    },
  },
  mounted() {
    this.imageScroll();
  },
};
</script>

<style scoped>
.about-text {
  @apply text-off-white font-mono text-xl tracking-wide font-light;
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
