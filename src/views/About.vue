<template>
  <div id="about" class="mt-4 h-full">
    <section class="flex flex-row scroll-container">
      <div class="w-2/5 image-container">
        <!-- <img src="../assets/img/IMG_7496.jpg" alt="" class="h-auto" /> -->
        <div class="h-auto fake3d"></div>
      </div>
      <div class="w-3/5 content-container ml-2 pl-8 pr-4">
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
          <div class="flex justify-start">
            <p class="about-text w-4/5">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate
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
          <progressBar></progressBar>
        </div>
      </div>
    </section>
    <section class="flex flex-row charts-container mt-12 h-5/6">
      <div class="github-events-timeline w-1/2 flex flex-col pl-20 pr-8">
        <div
          class="
            pt-6
            text-3xl
            tracking-widest
            text-off-white
            font-montserrat font-semibold
          "
        >
          What I've been up to
        </div>
        <githubEvents></githubEvents>
      </div>
      <div
        class="
          lang-7-day-chart
          w-1/2
          flex flex-col
          justify-items-center
          place-items-center
          pr-20
          pl-8
        "
      >
        <div
          class="
            pt-6
            text-3xl
            tracking-widest
            text-off-white
            font-montserrat font-semibold
          "
        >
          What I've been using
        </div>
        <langStats></langStats>
      </div>
    </section>
  </div>
</template>

<script>
import * as PIXI from "pixi.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import githubEvents from "@/components/githubEvents.vue";
import langStats from "@/components/langStats.vue";
import progressBar from "@/components/progressBar.vue";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "about-me",
  components: {
    githubEvents,
    langStats,
    progressBar,
  },
  methods: {
    imageScroll() {
      ScrollTrigger.create({
        trigger: ".scroll-container",
        start: "top top",
        end: "bottom bottom",
        pin: ".image-container",
        // markers: "true",
      });
    },
    progressBarScroll() {
      const bars = document.querySelectorAll(".progress-bar");
      bars.forEach((bar) => {
        gsap.fromTo(
          bar,
          {
            autoAlpha: 0,
            y: 50,
          },
          {
            scrollTrigger: {
              trigger: ".progress-bar",
              toggleActions: "play complete none reset",
              // markers: "true",
            },
            duration: 1,
            autoAlpha: 1,
            y: 0,
          }
        );
      });
    },
    progressBarFill() {
      const fills = document.querySelectorAll(".progress-inner");
      fills.forEach((fill) => {
        gsap.fromTo(
          fill,
          {
            width: 0,
          },
          {
            scrollTrigger: {
              trigger: ".progress-bar",
              toggleActions: "play none none reset",
              // markers: "true",
            },
            duration: 2.5,
            width: fill.style.width,
          }
        );
      });
    },
    // HACK: skew elem on scroll
    // textSkew() {
    //   let proxy = { skew: 0 },
    //     skewSetter = gsap.quickSetter(".about-text", "skewY", "deg"), // fast
    //     clamp = gsap.utils.clamp(-15, 15); // don't let the skew go beyond 20 degrees.

    //   ScrollTrigger.create({
    //     onUpdate: (self) => {
    //       let skew = clamp(self.getVelocity() / -1000);

    //       if (Math.abs(skew) > Math.abs(proxy.skew)) {
    //         proxy.skew = skew;
    //         gsap.to(proxy, {
    //           skew: 0,
    //           duration: 0.8,
    //           ease: "power3",
    //           overwrite: true,
    //           onUpdate: () => skewSetter(proxy.skew),
    //         });
    //       }
    //     },
    //   });

    //   // make the right edge "stick" to the scroll bar. force3D: true improves performance
    //   gsap.set(".skewElem", { transformOrigin: "right center", force3D: true });
    // },
    image3d() {
      const imageContainer = document.querySelector(".image-container");
      const fake3d = document.querySelector(".fake3d");

      const canvasWidth = 672;
      const canvasHeight = 856;

      const app = new PIXI.Application({
        width: canvasWidth,
        height: canvasHeight,
        backgroundAlpha: 0,
      });
      fake3d.appendChild(app.view);

      let img = new PIXI.Sprite.from(
        require("../assets/img/IMG_7496 copy.jpg")
      );
      img.width = canvasWidth;
      img.height = canvasHeight;
      img.anchor.set(0.5);
      img.position.x = canvasWidth / 2;
      img.position.y = canvasHeight / 2;
      app.stage.addChild(img);

      const depthMap = new PIXI.Sprite.from(
        require("../assets/img/depth_map.png")
      );
      depthMap.width = canvasWidth;
      depthMap.height = canvasHeight;
      // depthMap.anchor.set(0.5);
      depthMap.position.y = canvasHeight / 2;
      depthMap.position.x = canvasWidth / 2;
      // app.stage.addChild(depthMap);

      const depthFilter = new PIXI.filters.DisplacementFilter(depthMap);
      depthFilter.scale.x = 2;
      depthFilter.scale.y = 2;
      app.stage.filters = [depthFilter];

      imageContainer.addEventListener("mousemove", (e) => {
        const amountX = (canvasWidth / 2 - e.clientX) / 20;
        const amountY = (canvasHeight / 2 - e.clientY) / 20;
        gsap.to(depthFilter.scale, {
          duration: 2,
          x: amountX,
          y: amountY,
          ease: "power3.out",
        });
      });
    },
    scrollCont() {
      const cont = document.querySelector(".charts-container");
      gsap.to(cont, {
        // translateY: "30%",
        height: "95%",
        scrollTrigger: {
          trigger: ".scroll-container",
          end: "bottom-=200 bottom",
          start: "top+=200 top",
          // markers: "true",
          scrub: true,
        },
      });
    },
  },
  mounted() {
    this.imageScroll();
    this.progressBarScroll();
    this.progressBarFill();
    this.image3d();
    this.scrollCont();
    // this.textSkew();
  },
};
</script>

<style scoped>
.about-text {
  @apply text-off-white font-mono text-xl tracking-wide font-light text-left;
}
</style>
