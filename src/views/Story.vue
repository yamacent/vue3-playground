<template>
  <div>
    <span>{{ story.title }}</span>
    <span style="margin-left: 0.5rem">by {{ story.by }}</span>
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
