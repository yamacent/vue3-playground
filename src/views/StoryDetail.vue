<template>
  <AppStory :storyId="1" :detail="true" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppStory from "../components/AppStory.vue";

export default defineComponent({
  components: { AppStory },
  setup() {
    return {};
  }
});
</script>
