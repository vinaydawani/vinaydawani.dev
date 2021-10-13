<template>
  <div class="flex flex-col gap-y-4 mt-10">
    <div
      v-for="event in events"
      v-bind:key="event.date"
      class="event-anim flex flex-row gap-x-"
    >
      <div class="flex flex-col place-items-center justify-center">
        <div
          class="
            flex
            place-items-center
            justify-center
            rounded-full
            bg-off-white
            w-6
            h-6
            shadow-c
            opacity-95
            relative
          "
        >
          <ion-icon
            :name="event.icon"
            class="w-4 h-4 text-weird-red z-10 opacity-95"
          ></ion-icon>
        </div>
        <div class="w-0.5 rounded-full h-10 bg-off-white mt-2"></div>
      </div>
      <div class="text-off-white font-mono">
        <div class="rounded inline-block bg-weird-red bg-opacity-40">
          <p class="text-off-white px-2 py-px">
            {{ event.date }}
          </p>
        </div>
        <div class="text-sm tracking-wide px-px pt-2">
          {{ event.message }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { format } from "date-fns";
import { ref } from "@vue/reactivity";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  name: "githubEvents",
  setup() {
    const url = "https://api.github.com/users/vinaydawani/events";
    const count = Number(7);

    let events = ref([]);

    const formatDate = (e) =>
      format(new Date(e.created_at), "MMM do, yyyy - HH:mm");

    const eventTypes = [
      {
        trigger: "WatchEvent",
        icon: "star-outline",
        getMessage: (e) => `starred ${e.repo.name}`,
      },
      {
        trigger: "PushEvent",
        icon: "git-commit",
        getMessage: (e) => `pushed ${e.payload.size} updates to ${e.repo.name}`,
      },
      {
        trigger: "IssuesEvent",
        icon: "information",
        getMessage: (e) => `contributed to an issue on ${e.repo.name}`,
      },
    ];

    const getEventsInfo = (e) => {
      let data = null;
      eventTypes.forEach((type) => {
        if (e.type == type.trigger) {
          data = {
            icon: type.icon,
            message: type.getMessage(e),
            date: formatDate(e),
          };
        }
      });
      return data;
    };

    async function getPost() {
      try {
        const res = await axios.get(url);
        events.value = res.data
          .map(getEventsInfo)
          .filter((e) => e)
          .slice(0, count);
      } catch (e) {
        console.error("Request to Github API failed", e);
      }
    }
    getPost();

    return { events };
  },
  methods: {
    // gitAnim() {
    //   const events = document.querySelectorAll(".event-anim");
    //   console.log(events);
    //   events.forEach((event) => {
    //     console.log(event);
    //   });
    // },
  },
  mounted() {
    // this.gitAnim();
  },
};
</script>

<style scoped>
.shadow-c {
  box-shadow: 0 0 2px 2px #f2f2f2;
}
</style>
