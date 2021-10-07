<template>
  <div id="home" class="flex flex-col w-auto justify-center text-off-white">
    <div
      class="
        text-weird-red text-center text-3xl
        font-dm-mono
        italic
        font-extralight
      "
    >
      Hello & Welcome
    </div>
    <div class="text-center text-6xl font-montserrat mt-4 font-normal">
      I am <span id="typing" class="font-bold"></span>
    </div>
    <div
      class="
        text-center
        w-max
        border-2
        rounded-full
        py-3
        px-7
        mt-10
        place-self-center
        cursor-pointer
        font-mukta font-light
        btn-transition
      "
    >
      <a
        href="assets/pdf/Resume.pdf"
        title="Download Resume"
        download="Vinay Dawani Resume.pdf"
        class="text-base font-medium tracking-widest"
        >Download Resume</a
      >
    </div>
  </div>
  <div id="ball">
    <div class="outer">
      <div class="inner"></div>
    </div>
  </div>
  <canvas
    class="particle-bg absolute block top-0 left-0 opacity-60 -z-1"
  ></canvas>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import Typed from "typed.js";
import Particles from "particlesjs";

export default {
  name: "Home",
  setup() {
    onMounted(() => {
      new Typed("#typing", {
        strings: ["Vinay Dawani.", "A Designer.", "A Developer."],
        typeSpeed: 100,
        startDelay: 1000,
        backSpeed: 80,
        backDelay: 500,
        loop: true,
        smartBackspace: false,
      });
    });

    onMounted(() => {
      Particles.init({
        selector: ".particle-bg",
        maxParticles: 75,
        color: "#f2f2f2",
        connectParticles: true,
        speed: 0.3,
        minDistance: 120,
        // responsive: [
        //   {
        //     breakpoint: 576,
        //     options: {
        //       maxParticles: 50,
        //       color: "#f2f2f2",
        //       minDistance: 100,
        //     },
        //   },
        // ],
      });
    });
  },
};
</script>

<style>
#home {
  height: calc(100% - 50px);
}

#ball {
  display: flex;
  justify-content: center;
  width: 8%;
  height: 14%;
  position: fixed;
  bottom: 0;
  right: 0;
}
#ball .inner {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #f2f2f2;
  box-shadow: 0 0 15px 5px #f2f2f2;
  animation: bounce1 0.5s;
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(0.5, 0.05, 1, 0.5);
  animation-iteration-count: infinite;
}
@keyframes bounce1 {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, 120px, 0);
  }
}
</style>
