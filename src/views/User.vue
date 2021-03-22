<template>
  <div>
    {{ user }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";
import { fetchTopStories } from "@/api";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute()
    const user = ref<null>(null)

    const fetch = async () => {
      route.params.userId
    };

    fetch();

    return {
      user
    };
  }
});
</script>
