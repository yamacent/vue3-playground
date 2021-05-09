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
      required: false
    },
    commentObj: {
      type: Object as () => Comment,
      required: false
    }
  },
  setup(props) {
    const comment = ref<Comment>();

    const init = async () => {
      if (props.commentObj) {
        comment.value = props.commentObj;
        return;
      }
      if (props.commentId) {
        const res = await fetchComment(props.commentId);
        comment.value = res.data;
        return;
      }
      throw new Error("commentObj or commentId must be given");
    };

    init();

    return {
      comment,
      formatTime
    };
  }
});
</script>
