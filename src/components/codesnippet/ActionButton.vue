<template>
  <button
    class="actionButton"
    @click="$emit('action-click')"
    :class="{
      notVisible: !visible
     }"
  >
    <span v-if="actionCompleted"
      ><SwagIcon icon="checkmark" type="regular"
    /></span>
    <span v-else><SwagIcon :icon="icon" type="regular" /></span>
  </button>
</template>

<script setup>
import { ref, onUnmounted, watch } from "vue";

const props = defineProps({
  icon: {
    type: String,
    default: "copy",
  },
  actionCompleted: {
    type: Boolean,
    default: false,
  },
  resetTimeout: {
    type: Number,
    default: 1000,
  },
  visible: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["action-click", "reset"]);
const timeoutId = ref(null);

watch(
  () => props.actionCompleted,
  (newValue) => {
    if (newValue && props.resetTimeout > 0) {
      timeoutId.value = setTimeout(() => {
        emit("reset");
      }, props.resetTimeout);
    }
  }
);

onUnmounted(() => {
  if (timeoutId.value) {
    clearTimeout(timeoutId.value);
  }
});
</script>

<style lang="css" scoped>
.actionButton {
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.actionButton span {
  width: 18px;
  height: 18px;
}

.notVisible {
  opacity: 0;
}

:root[class~="dark"] .actionButton span {
  color: var(--sw-c-gray-dark-500) !important;
}
</style>
