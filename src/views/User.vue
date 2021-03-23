<template>
  <div>
    {{ user }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";
import { fetchUser, User } from "@/api";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute()
    const user = ref<User | null>(null)

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
