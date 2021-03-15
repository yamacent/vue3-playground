<template>
  <div>story: {{ storyId }}</div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  props: {
    storyId: {
      type: Number,
      required: true
    }
  },
  setup() {
    return {};
  }
});
</script>
