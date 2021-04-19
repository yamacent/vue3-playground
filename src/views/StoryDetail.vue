<template>
  <div>
    <header>
      <router-link to="/">Home</router-link>
    </header>
    <AppStory :storyId="Number($route.params.storyId)" :detail="true" />
  </div>
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
