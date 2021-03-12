<template>
  <div>
    Home
    <p><router-link to="/story">story</router-link></p>
    <ul>
      <li v-for="story in stories" :key="story">{{ story }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { fetchTopStories } from "@/api";
import { defineComponent, ref } from "@vue/runtime-core";

export default defineComponent({
  setup() {
    const stories = ref<number[]>([])

    const fetch = async () => {
      stories.value = await fetchTopStories();
    }

    fetch();

    return {
      stories
    };
  }
});
</script>
