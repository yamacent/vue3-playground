<template>
  <div v-if="comment">
    <p>{{ comment.text }}</p>
    <span>By {{ comment.by }}</span>
    <span>{{ formatTime(comment.time) }}</span>
  </div>
</template>

<script lang="ts">
import { fetchComment, Comment } from "@/api";
import { defineComponent, ref } from "@vue/runtime-core";

export default defineComponent({
  props: {
    commentId: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const comment = ref<Comment | null>();

    const init = async () => {
      comment.value = await fetchComment(props.commentId);
    };

    init();

    return {
      comment,
      formatTime: (t: number) => new Date(t * 1000)
    };
  }
});
</script>
