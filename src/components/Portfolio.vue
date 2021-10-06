<template>
  <!-- <div class="flex h-full"> -->
  <div class="grid grid-cols-5 grid-flow-row w-full h-full">
    <div class="col-span-2">
      <ul class="px-28 space-y-4 mt-8">
        <li class="portfolio-item">
          <a href="https://chainsevm.netlify.app/" target="_blank">
            <div class="relative">
              <span
                class="
                  inline-block
                  absolute
                  right-full
                  mr-8
                  top-1
                  text-off-white text-sm
                  font-thin font-dm-mono
                "
                >01</span
              >
              <div class="portfolio-heading">Chains.EVM</div>
              <span class="portfolio-subheading"><i>/</i> Website</span>
            </div>
          </a>
        </li>
        <li class="portfolio-item">
          <a href="https://spotiviz.vinaydawani.dev/" target="_blank">
            <div class="relative">
              <span
                class="
                  inline-block
                  absolute
                  right-full
                  mr-8
                  top-1
                  text-off-white text-sm
                  font-thin font-dm-mono
                "
                >02</span
              >
              <div class="portfolio-heading">SpotiViz</div>
              <span class="portfolio-subheading"><i>/</i> Website</span>
            </div>
          </a>
        </li>
        <li class="portfolio-item">
          <a href="https://github.com/vinaydawani/EZTracker" target="_blank">
            <div class="relative">
              <span
                class="
                  inline-block
                  absolute
                  right-full
                  mr-8
                  top-1
                  text-off-white text-sm
                  font-thin font-dm-mono
                "
                >03</span
              >
              <div class="portfolio-heading">EZTracker</div>
              <span class="portfolio-subheading"><i>/</i> QGIS Tool</span>
            </div>
          </a>
        </li>
        <li class="portfolio-item">
          <a href="https://github.com/vinaydawani/ISA-bot" target="_blank">
            <div class="relative">
              <span
                class="
                  inline-block
                  absolute
                  right-full
                  mr-8
                  top-1
                  text-off-white text-sm
                  font-thin font-dm-mono
                "
                >04</span
              >
              <div class="portfolio-heading">ISA Bot</div>
              <span class="portfolio-subheading"><i>/</i> Discord Bot</span>
            </div>
          </a>
        </li>
        <li class="portfolio-item">
          <a href="" target="_blank">
            <div class="relative">
              <span
                class="
                  inline-block
                  absolute
                  right-full
                  mr-8
                  top-1
                  text-off-white text-sm
                  font-thin font-dm-mono
                "
                >05</span
              >
              <div class="portfolio-heading">Covid-19 Genome Project</div>
              <span class="portfolio-subheading"><i>/</i> Illustration</span>
            </div>
          </a>
        </li>
        <li class="portfolio-item">
          <a
            href="https://github.com/vinaydawani/moon-animation"
            target="_blank"
          >
            <div class="relative">
              <span
                class="
                  inline-block
                  absolute
                  right-full
                  mr-8
                  top-1
                  text-off-white text-sm
                  font-thin font-dm-mono
                "
                >06</span
              >
              <div class="portfolio-heading">Moon Phases</div>
              <span class="portfolio-subheading"><i>/</i> Illustration</span>
            </div>
          </a>
        </li>
        <li class="portfolio-item">
          <a
            href="https://github.com/vinaydawani/What-is-Today"
            target="_blank"
          >
            <div class="relative">
              <span
                class="
                  inline-block
                  absolute
                  right-full
                  mr-8
                  top-1
                  text-off-white text-sm
                  font-thin font-dm-mono
                "
                >07</span
              >
              <div class="portfolio-heading">What is today</div>
              <span class="portfolio-subheading"><i>/</i> MacOS App</span>
            </div>
          </a>
        </li>
        <li class="portfolio-item">
          <a href="https://trump.vinaydawani.dev/" target="_blank">
            <div class="relative">
              <span
                class="
                  inline-block
                  absolute
                  right-full
                  mr-8
                  top-1
                  text-off-white text-sm
                  font-thin font-dm-mono
                "
                >08</span
              >
              <div class="portfolio-heading">
                A journey of Trump's Coronavirus response
              </div>
              <span class="portfolio-subheading"><i>/</i> Illustration</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div class="col-span-3 pl-20 preview-area">
      <div class="canvas-container">
        <div
          class="inner-canvas displacement-map"
          data-displacement-map="/assets/img/displacement-liquid.png"
        ></div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import * as PIXI from "pixi.js";
import gsap from "gsap";
// import { onMounted } from "@vue/runtime-core";
// import portfolioAnimation from "../scripts/portfolioAnimate.js";

export default {
  name: "Portfolio",
  data() {
    return {
      displacementMap: require("../assets/img/displacement-liquid.png"),
      images: [
        { value: require("../assets/img/chains.png") },
        { value: require("../assets/img/spotiviz.png") },
        { value: require("../assets/img/ez.png") },
        { value: require("../assets/img/isa_discord.png") },
        { value: require("../assets/img/genome1.png") },
        { value: require("../assets/img/phase.png") },
        { value: require("../assets/img/today.png") },
        { value: require("../assets/img/trump.png") },
      ],
    };
  },
  setup() {
    //   const init = () => {
    //     const portfolioItems = document.querySelectorAll(".portfolio-item");
    //     const previewItems = document.querySelector(".preview-item");
    //     const innerCanvas = document.querySelector(".inner-canvas");
    //     console.log(innerCanvas);
    //     let app = null;
    //     let timeline = null;
    //   };
    //   // const portfolioItems = document.querySelectorAll(".portfolio-item");
    //   // const previewItems = document.querySelector(".preview-item");
    //   // const innerCanvas = document.querySelector(".inner-canvas");
    //   // console.log(innerCanvas);
    //   // let app = null;
    //   // let timeline = null;
    //   const portfolioEvent = () => {
    //     for (let i = 0; i < portfolioItems.length; i++) {
    //       portfolioItems[i].addEventListener("mousemove", (ev) => {
    //         portfolioMousemove(ev);
    //       });
    //       portfolioItems[i].addEventListener("mouseenter", () => {
    //         portfolioItemMouseenter(i + 1); // why +1? Hint: PIXI related
    //       });
    //       portfolioItems[i].addEventListener("mouseleave", () => {
    //         portfolioItemMouseleave();
    //       });
    //     }
    //   };
    //   const portfolioControl = () => {
    //     const canvasWidth = 1000;
    //     const canvasHeight = 563;
    //     app = PIXI.Application({
    //       width: canvasWidth,
    //       height: canvasHeight,
    //       resolution: window.devicePixelRatio,
    //       transparent: true,
    //     });
    //     innerCanvas.appendChild(app.view);
    //     const displacementMapFile = innerCanvas.getAttribute(
    //       "data-displacement-map"
    //     );
    //     const displacementMap = new PIXI.Sprite.from(displacementMapFile);
    //     const displacementFilter = new PIXI.filters.DisplacementFilter(
    //       displacementMap
    //     );
    //     displacementMap.name = displacementMapFile;
    //     displacementMap.anchor.set(0.5);
    //     displacementMap.scale.set(1);
    //     displacementMap.width = canvasWidth;
    //     displacementMap.height = canvasHeight;
    //     displacementMap.position.set(canvasWidth / 2, canvasHeight / 2);
    //     app.stage.filterArea = app.screen;
    //     app.stage.filters = [displacementFilter];
    //     app.stage.addChild(displacementMap);
    //     for (let i = 0; i < portfolioItems.length; i++) {
    //       const imageFile = previewItems[i].getAttribute(
    //         "data-portfolio-preview"
    //       );
    //       const texture = new PIXI.Texture.from(imageFile);
    //       const image = new PIXI.Sprite(texture);
    //       image.name = imageFile;
    //       image.alpha = 0;
    //       image.width = canvasWidth;
    //       image.height = canvasHeight;
    //       app.stage.addChild(image);
    //     }
    //     timeline = gsap.timeline({ paused: true });
    //     const canvasElement = innerCanvas.querySelector("canvas");
    //     timeline
    //       .add("start")
    //       .fromTo(
    //         canvasElement,
    //         {
    //           autoAlpha: 0,
    //         },
    //         {
    //           duration: 0.4,
    //           autoAlpha: 1,
    //           ease: "power3.out",
    //         },
    //         "start"
    //       )
    //       .fromTo(
    //         canvasElement,
    //         {
    //           scale: 1.5,
    //         },
    //         {
    //           duration: 0.8,
    //           scale: 1,
    //           ease: "power3.out",
    //         },
    //         "start"
    //       )
    //       .fromTo(
    //         displacementFilter.scale,
    //         {
    //           x: 150,
    //           y: 150,
    //         },
    //         {
    //           duration: 1.6,
    //           x: 0,
    //           y: 0,
    //           ease: "power3.out",
    //           onComplete: () => {},
    //         },
    //         "start"
    //       );
    //   };
    //   function portfolioMousemove(ev) {
    //     const decimalX = ev.clientX / window.innerWidth - 0.5;
    //     const decimalY = ev.clientY / window.innerHeight - 0.5;
    //     gsap.to(innerCanvas, {
    //       duration: 0.4,
    //       x: 300 * decimalX,
    //       y: 150 * decimalY,
    //       ease: "power3.out",
    //     });
    //   }
    //   function portfolioItemMouseenter(index) {
    //     gsap.to(app.stage.children[index], {
    //       duration: 0.4,
    //       alpha: 1,
    //       ease: "power3.out",
    //       onStart: () => {
    //         timeline.restart().pause();
    //         timeline.play();
    //       },
    //     });
    //   }
    //   function portfolioItemMouseleave() {
    //     gsap.to(app.stage.children, {
    //       duration: 0.4,
    //       alpha: 0,
    //       ease: "power3.out",
    //     });
    //   }
    //   onMounted(portfolioEvent);
    //   onMounted(portfolioControl);
    //   onMounted(() => {
    //     init();
    //     portfolioEvent();
    //     portfolioControl();
    //   });
  },
  methods: {
    animateList() {
      const portfolioItems = document.querySelectorAll(".portfolio-item");
      const innerCanvas = document.querySelector(".inner-canvas");

      let app = null;
      let timeline = null;

      PIXI.utils.skipHello();

      const portfolioEvent = () => {
        for (let i = 0; i < portfolioItems.length; i++) {
          portfolioItems[i].addEventListener("mousemove", (ev) => {
            portfolioMousemove(ev);
          });
          portfolioItems[i].addEventListener("mouseenter", () => {
            portfolioItemMouseenter(i + 1); // why +1? Hint: PIXI related
          });
          portfolioItems[i].addEventListener("mouseleave", () => {
            portfolioItemMouseleave();
          });
        }
      };

      const portfolioControl = () => {
        const canvasWidth = 1000;
        const canvasHeight = 563;
        app = new PIXI.Application({
          width: canvasWidth,
          height: canvasHeight,
          // resolution: window.devicePixelRatio,
          backgroundAlpha: 0,
        });
        innerCanvas.appendChild(app.view);
        const displacementMapFile = innerCanvas.getAttribute(
          "data-displacement-map"
        );

        const displacementMap = new PIXI.Sprite.from(
          this.$data.displacementMap
        );
        const displacementFilter = new PIXI.filters.DisplacementFilter(
          displacementMap
        );
        displacementMap.name = displacementMapFile;
        displacementMap.anchor.set(0.5);
        displacementMap.scale.set(1);
        displacementMap.width = canvasWidth;
        displacementMap.height = canvasHeight;
        displacementMap.position.set(canvasWidth / 2, canvasHeight / 2);
        app.stage.filterArea = app.screen;
        app.stage.filters = [displacementFilter];
        app.stage.addChild(displacementMap);
        for (let i = 0; i < portfolioItems.length; i++) {
          const imageFile = this.$data.images[i].value;
          const texture = PIXI.Texture.from(imageFile);
          const image = new PIXI.Sprite(texture);
          image.name = imageFile;
          image.alpha = 0;
          image.width = canvasWidth;
          image.height = canvasHeight;
          app.stage.addChild(image);
        }
        timeline = gsap.timeline({ paused: true });
        const canvasElement = innerCanvas.querySelector("canvas");
        timeline
          .add("start")
          .fromTo(
            canvasElement,
            {
              autoAlpha: 0,
            },
            {
              duration: 0.4,
              autoAlpha: 1,
              ease: "power3.out",
            },
            "start"
          )
          .fromTo(
            canvasElement,
            {
              scale: 1.5,
            },
            {
              duration: 0.8,
              scale: 1,
              ease: "power3.out",
            },
            "start"
          )
          .fromTo(
            displacementFilter.scale,
            {
              x: 150,
              y: 150,
            },
            {
              duration: 1.6,
              x: 0,
              y: 0,
              ease: "power3.out",
              onComplete: () => {},
            },
            "start"
          );
      };
      function portfolioMousemove(ev) {
        const decimalX = ev.clientX / window.innerWidth - 0.5;
        const decimalY = ev.clientY / window.innerHeight - 0.5;
        gsap.to(innerCanvas, {
          duration: 0.4,
          x: 300 * decimalX,
          y: 150 * decimalY,
          ease: "power3.out",
        });
      }
      function portfolioItemMouseenter(index) {
        gsap.to(app.stage.children[index], {
          duration: 0.4,
          alpha: 1,
          ease: "power3.out",
          onStart: () => {
            timeline.restart().pause();
            timeline.play();
          },
        });
      }
      function portfolioItemMouseleave() {
        gsap.to(app.stage.children, {
          duration: 0.4,
          alpha: 0,
          ease: "power3.out",
        });
      }

      portfolioEvent();
      portfolioControl();
    },
  },
  mounted() {
    this.animateList();
  },
};
</script>
