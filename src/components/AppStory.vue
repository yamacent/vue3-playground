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
    <router-link :to="{ name: 'StoryDetail', params: { storyId: story.id } }">{{
      formatTime(story.time)
    }}</router-link>
    <template v-if="detail">
      <AppComment
        v-for="commentId in story.kids.slice(0, 10)"
        :key="commentId"
        :commentId="commentId"
        style="padding-left: 1rem"
      />
    </template>
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
    },
    detail: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const story = ref<Story>();

    const init = async () => {
      const res = await fetchStory(props.storyId);
      story.value = res.data;
    };

    init();

    return {
      story,
      formatTime
    };
  }
});
</script>
