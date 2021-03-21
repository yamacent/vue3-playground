<template>
  <div v-if="story">
    <h4>
      <a :href="story.url">{{ story.title }}</a>
    </h4>
    <span>By {{ story.by }}</span>
    <span>{{ formatTime(story.time) }}</span>
    <AppComment />
  </div>
</template>

<script lang="ts">
import { fetchStory, Story } from "@/api";
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
      formatTime: (t: number) => new Date(t * 1000)
    };
  }
});
</script>
