<template>
  <!-- <div class="flex h-full"> -->
  <div class="grid grid-cols-5 grid-flow-row w-full h-full">
    <div class="col-span-2">
      <ul class="px-28 space-y-4 mt-8">
        <li>
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
        </li>
        <li>
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
        </li>
        <li>
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
        </li>
        <li>
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
        </li>
        <li>
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
        </li>
        <li>
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
        </li>
        <li>
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
        </li>
        <li>
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
        </li>
        <!-- <li>Chians.EVM</li>
        <li>SpotiViz</li>
        <li>EZTracker</li>
        <li>ISA Bot</li>
        <li>Covid-19 Genome Project</li>
        <li>Moon Phases</li>
        <li>What is today</li>
        <li>A journey of Trump's Coronavirus response</li> -->
      </ul>
    </div>
    <div class="col-span-3">
      <div id="canvas-container">
        <div></div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
// import * as PIXI from 'pixi.js';
// import gsap from "gsap";

export default {
  name: "Portfolio",
};
</script>
