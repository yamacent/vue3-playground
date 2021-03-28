<template>
  <div v-if="story">
    <h3>{{ story.title }}</h3>
    <span
      >by
      <router-link :to="{ name: 'User', params: { userId: story.by } }">{{
        story.by
      }}</router-link></span
    >
    <a :href="story.url" style="margin-left: 0.5rem">link</a>
  </div>
  <div v-if="comment">
    {{ JSON.stringify(comment) }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  Comment,
  fetchComment as _fetchComment,
  fetchStory,
  Story
} from "../api";

export default defineComponent({
  setup() {
    const story = ref<Story | null>(null);
    const comment = ref<Comment | null>(null);

    const init = async () => {
      const res = await fetchStory(1);
      story.value = res;
    };
    init();

    const fetchComment = async () => {
      const res = await _fetchComment(1);
      comment.value = res;
    };
    fetchComment();

    return { story, comment };
  }
});
</script>
