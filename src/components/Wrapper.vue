<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  props: {
    condition: {
      type: Function,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  setup(props, { slots }) {
    return () => (props.condition() ? slots.default?.() : null);
  }
});
</script>
