<template>
  <div>
    Home
    <p><router-link to="/story">story</router-link></p>
    <ul>
      <li v-for="story in stories" :key="story.id"></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";

export default defineComponent({
  setup() {
    const stories = ref([])
    return {
      stories
    };
  }
});
</script>
