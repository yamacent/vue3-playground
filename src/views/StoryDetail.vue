<template>
  <div v-if="story">
    <h3>
      <a :href="story.url">{{ story.title }}</a>
    </h3>
    <span
      >By
      <router-link :to="{ name: 'User', params: { userId: story.by } }">{{
        story.by
      }}</router-link></span
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { fetchStory, Story } from "../api";

export default defineComponent({
  setup() {
    const story = ref<Story>();

    const init = async () => {
      const res = await fetchStory(1);
      story.value = res;
    };
    init();

    return { story };
  }
});
</script>
