<template>
  <div v-if="comment">
    <p>{{ comment.text }}</p>
    <span
      >By
      <router-link :to="{ name: 'User', params: { userId: comment.by } }">{{
        comment.by
      }}</router-link>
    </span>
    At
    <span>{{ formatTime(comment.time) }}</span>
  </div>
</template>

<script lang="ts">
import { fetchComment, Comment } from "@/api";
import { defineComponent, ref } from "@vue/runtime-core";
import { formatTime } from "@/util";

export default defineComponent({
  props: {
    commentId: {
      type: Number,
      required: true
    },
    commentObj: {
      type: Object as () => Comment,
      required: false
    }
  },
  setup(props) {
    const comment = ref<Comment>();

    const init = async () => {
      const res = await fetchComment(props.commentId);
      comment.value = res.data;
    };

    init();

    return {
      comment,
      formatTime
    };
  }
});
</script>
