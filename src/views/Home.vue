<template>
  <ul>
    <li v-for="storyId in stories" :key="storyId">
      <AppStory :storyId="storyId" />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";
import { fetchTopStories } from "@/api";
import AppStory from "../components/AppStory.vue";

export default defineComponent({
  components: { AppStory },
  setup() {
    const stories = ref<number[]>([]);

    const fetch = async () => {
      const res = await fetchTopStories();
      stories.value = res.data.slice(0, 10);
    };

    fetch();

    return {
      stories
    };
  }
});
</script>
