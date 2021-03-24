<template>
  <div>
    <h4>{{ user.id }}</h4>
    <p>
      {{ user.about }}
    </p>
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
      user
    };
  }
});
</script>
