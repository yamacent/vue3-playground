<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";
import { fetchItem, isComment, isStory, Item } from "@/api";

export default defineComponent({
  props: {
    type: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  },
  setup(props, { slots }) {
    const item = ref<Item>();

    const init = async () => {
      const res = await fetchItem(props.id);
      item.value = res.data;
    };

    init();

    return () =>
      item.value &&
      ((props.type === "story" && isStory(item.value)) ||
        (props.type === "comment" && isComment(item.value)))
        ? slots.default?.({ item: item.value })
        : null;
  }
});
</script>
