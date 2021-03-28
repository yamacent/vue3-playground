<template>
  <div>
    Home
    <ul>
      <li v-for="storyId in stories" :key="storyId">
        <AppStory :storyId="storyId" />
      </li>
    </ul>
  </div>
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
      stories.value = await fetchTopStories();
    };

    fetch();

    return {
      stories
    };
  }
});
</script>
