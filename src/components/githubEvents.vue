<template>
  <div class="flex flex-col pl-20 pt-12 gap-y-8">
    <div
      v-for="event in events"
      v-bind:key="event.date"
      class="flex flex-row gap-x-4"
    >
      <div>
        <ion-icon
          :name="event.icon"
          class="pt-1 text-xl text-off-white"
        ></ion-icon>
      </div>
      <div class="text-off-white font-mono">
        <div>{{ event.date }}</div>
        <div>{{ event.message }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { format } from "date-fns";
import { ref } from "@vue/reactivity";

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
        icon: "star",
        getMessage: (e) => `starred ${e.repo.name}`,
      },
      {
        trigger: "PushEvent",
        icon: "document",
        getMessage: (e) => `pushed ${e.payload.size} updates to ${e.repo.name}`,
      },
      {
        trigger: "IssuesEvent",
        icon: "information-circle",
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
};
</script>
