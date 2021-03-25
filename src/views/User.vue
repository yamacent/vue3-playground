<template>
  <div v-if="user">
    <h4>{{ user.id }}</h4>
    <p>
      {{ user.about }}
    </p>
    <p>{{ formatTime(user.created) }}</p>
    <p>karma: {{ user.karma }}</p>
    <ul>
      <li v-for="storyId in user.submitted" :key="storyId">{{ storyId }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";
import { fetchUser, User } from "@/api";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute()
    const user = ref<User>()

    const fetch = async () => {
      const userId = route.params.userId;
      const res = await fetchUser(String(userId));
      user.value = res.data;
    };

    fetch();

    return {
      user,
      formatTime: (t: number) => new Date(t * 1000)
    };
  }
});
</script>
