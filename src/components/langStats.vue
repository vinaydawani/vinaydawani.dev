<template>
  <div class="flex h-full w-3/4 mt-8">
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
    const url =
      "https://cors-anywhere.herokuapp.com/https://wakatime.com/api/v1/users/@External72/stats/last_7_days";
    let dataset = {
      labels: [],
      data: [],
    };

    async function getData() {
      try {
        const res = await axios.get(url, {
          Authorization:
            "Basic " + window.btoa("70da57f3-ccd8-4491-8fd1-c301b277d3ef"),
        });
        res.data.data.languages.forEach((element) => {
          dataset.labels.push(element.name);
          dataset.data.push(element.percent);
        });
      } catch (e) {
        console.error("Error fetching data from Wakatime.", e);
      }
    }

    getData();

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
              backgroundColor: ["#A8000D"],
              // borderColor: ["#fff"],
              cutout: "60%",
              // radius: "80%",
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
