<template>
  <div class="flex h-full w-3/4 mt-10">
    <canvas id="wakatime-chart"></canvas>
  </div>
</template>

<script>
// import { ref } from "@vue/reactivity";
import axios from "axios";
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
      try {
        const res = await axios.get(url);
        console.log(res);
        res.data.data.languages.forEach((element) => {
          dataset.labels.push(element.name);
          dataset.data.push(element.percent);
        });
      } catch (e) {
        console.error("Error fetching data from Wakatime.", e);
      }
    }

    getData();

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

    setColor();

    return {
      dataset,
    };
  },
  methods: {
    drawChart() {
      let ctx = document.getElementById("wakatime-chart").getContext("2d");
      const config = {
        type: "doughnut",
        data: {
          labels: this.dataset.labels,
          datasets: [
            {
              label: "Language used in last 7 days",
              data: this.dataset.data,
              backgroundColor: this.dataset.backgroundColor,
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
      const xxx = new Chart(ctx, config);
      xxx.update();
    },
  },
  mounted() {
    this.drawChart();
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 1000);
  },
};
</script>

<style scoped>
/* canvas {
  width: 250px !important;
  height: 250px !important;
} */
</style>
