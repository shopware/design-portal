<template>
  <button
    class="actionButton"
    @click="$emit('action-click')"
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
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--sw-c-gray-100);
  border: 1px solid var(--sw-c-gray-400);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.actionButton span {
  width: 18px;
  height: 18px;
  opacity: 0.9;
}

.actionButton:hover {
  background-color: #ffffff;
}

:root[class~="dark"] .actionButton span {
  color: var(--sw-c-gray-dark-500);
}
</style>
