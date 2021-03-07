<template>
  <div>
    <h3>{{ story.title }}</h3>
    <span>by {{ story.by }}</span>
    <a :href="story.url" st,  yle="margin-left: 0.5rem">link</a>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { fetchStory, Story } from "../api";

export default defineComponent({
  setup() {
    const story = ref<Story | null>(null)

    const init = async () => {
      const res = await fetchStory(1);
      story.value = res;
    }
    init();

    return { story };
  }
});
</script>
