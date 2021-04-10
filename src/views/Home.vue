<template>
  <div>
    <ul>
      <li v-for="storyId in storyIds" :key="storyId">
        <AppStory :storyId="storyId" />
      </li>
    </ul>
    <div>
      <button @click="next">Next</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";
import { fetchTopStories } from "@/api";
import AppStory from "../components/AppStory.vue";

export default defineComponent({
  components: { AppStory },
  setup() {
    const storyIds = ref<number[]>([]);

    const fetch = async () => {
      const res = await fetchTopStories();
      storyIds.value = res.data.slice(0, 10);
    };

    fetch();

    return {
      storyIds,
      next() {
        console.log("next");
      }
    };
  }
});
</script>
