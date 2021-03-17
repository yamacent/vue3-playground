<template>
  <div v-if="story">
    <h4>
      <a :href="story.url">{{ story.title }}</a>
    </h4>
  </div>
</template>

<script lang="ts">
import { fetchStory, Story } from "@/api";
import { defineComponent, ref } from "@vue/runtime-core";

export default defineComponent({
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
      story
    };
  }
});
</script>
