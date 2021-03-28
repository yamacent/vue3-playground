<template>
  <div v-if="story">
    <h4>
      <a :href="story.url">{{ story.title }}</a>
    </h4>
    <span
      >By
      <router-link :to="{ name: 'User', params: { userId: story.by } }">{{
        story.by
      }}</router-link>
    </span>
    At
    <router-link :to="{ name: 'StoryDetail' }">{{
      formatTime(story.time)
    }}</router-link>
    <AppComment style="padding-left: 1rem" />
  </div>
</template>

<script lang="ts">
import { fetchStory, Story } from "@/api";
import { formatTime } from "@/util";
import { defineComponent, ref } from "@vue/runtime-core";
import AppComment from "./AppComment.vue";

export default defineComponent({
  components: { AppComment },
  props: {
    storyId: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const story = ref<Story | null>();

    const init = async () => {
      story.value = await fetchStory(props.storyId);
    };

    init();

    return {
      story,
      formatTime
    };
  }
});
</script>
