<template>
  <div v-if="story" class="app-story">
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
  <div v-else class="app-story">
    <div class="skeleton"></div>
    <div class="skeleton" style="margin-top: 1rem; width: 40%"></div>
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

<style scoped>
.app-story {
  min-height: 80px;
}
</style>

<style>
.skeleton {
  width: 60%;
  height: 1rem;
  background: #d9d9d9;
  position: relative;
  overflow: hidden;
}
.skeleton::before {
  display: block;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.5),
    transparent
  );
  animation: skelton-animation 1.2s linear infinite;
}
@keyframes skelton-animation {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
