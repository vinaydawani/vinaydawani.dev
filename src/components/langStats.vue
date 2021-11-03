<template>
  <div class="flex h-full w-3/4 mt-10">
    <canvas id="wakatime-chart"></canvas>
  </div>
</template>

<script>
// import { ref } from "@vue/reactivity";
import axios from "axios";
import { onMounted } from "@vue/runtime-core";
import Chart from "chart.js/auto";

export default {
  name: "langStats",
  setup() {
    const url = "https://wakatime-cors-proxy.herokuapp.com/stats/7d";
    let dataset = {
      labels: [],
      data: [],
      backgroundColor: [],
    };

    async function getData() {
      await axios
        .get(url)
        .then((res) => {
          return res.data.data.languages;
        })
        .then((lang) => {
          lang.forEach((element) => {
            dataset.labels.push(element.name);
            dataset.data.push(element.percent);
          });
          return dataset;
        })
        .then(() => {
          setColor();
        })
        .then(() => {
          onMounted(drawChart());
        })
        .catch((err) => {
          console.error(err);
          getData();
        });
    }

    function hslToHex(h, s, l) {
      l /= 100;
      const a = (s * Math.min(l, 1 - l)) / 100;
      const f = (n) => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color)
          .toString(16)
          .padStart(2, "0"); // convert to Hex and prefix "0" if needed
      };
      return `#${f(0)}${f(8)}${f(4)}`;
    }

    function setColor() {
      const lim = 40 / dataset.labels.length;
      for (let i = 1; i <= dataset.labels.length; i++) {
        const x1 = 2 + i * lim;
        const x2 = hslToHex(355, 100, x1);
        dataset.backgroundColor.push(x2);
      }
    }
    function drawChart() {
      let ctx = document.getElementById("wakatime-chart").getContext("2d");
      const config = {
        type: "doughnut",
        data: {
          labels: dataset.labels,
          datasets: [
            {
              label: "Language used in last 7 days",
              data: dataset.data,
              backgroundColor: dataset.backgroundColor,
              // borderColor: ["#fff"],
              cutout: "60%",
              radius: "90%",
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: true,
              position: "bottom",
            },
          },
          elements: {
            arc: {
              borderWidth: 0,
            },
          },
        },
      };
      new Chart(ctx, config);
    }

    getData();
  },
};
</script>

<style scoped>
/* canvas {
  width: 250px !important;
  height: 250px !important;
} */
</style>
