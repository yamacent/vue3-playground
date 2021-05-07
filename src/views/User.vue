<template>
  <header>
    <router-link to="/">Home</router-link>
  </header>
  <div v-if="user">
    <h4>{{ user.id }}</h4>
    <p>
      {{ user.about }}
    </p>
    <p>{{ formatTime(user.created) }}</p>
    <p>karma: {{ user.karma }}</p>
    <ul>
      <ItemFetcher
        v-for="storyId in user.submitted.slice(0, 10)"
        :key="storyId"
        type="story"
        :id="storyId"
        v-slot="{ item }"
      >
        <li>
          <AppStory :storyObj="item" />
        </li>
      </ItemFetcher>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";
import { fetchUser, User } from "@/api";
import { useRoute } from "vue-router";
import AppStory from "../components/AppStory.vue";
import ItemFetcher from "../components/ItemFetcher.vue";
import { formatTime } from "../util";

export default defineComponent({
  components: {
    AppStory,
    ItemFetcher
  },
  setup() {
    const route = useRoute();
    const user = ref<User>();

    const fetch = async () => {
      const userId = route.params.userId;
      const res = await fetchUser(String(userId));
      user.value = res.data;
    };

    fetch();

    return {
      user,
      formatTime
    };
  }
});
</script>
