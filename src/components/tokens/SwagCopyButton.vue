<template>
  <div
    class="swag-button-wrapper"
    @mouseenter="setIsHovered"
    @mouseleave="setIsHovered"
  >
    <button @click="copyToClipboard" class="swag-button">
      {{ buttonText }}
    </button>
    <transition
      name="tooltip-fade"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <span v-if="isHovered" class="swag-button-tooltip">{{
        tooltipText
      }}</span>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  buttonText: {
    type: String,
    default: "Copy",
  },
});

const isHovered = ref(false);
const tooltipText = ref("Copy to clipboard");

const setIsHovered = () => {
  isHovered.value = !isHovered.value;
};

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(props.buttonText);
    tooltipText.value = "Copied!";
    setTimeout(() => {
      tooltipText.value = "Copy to clipboard";
    }, 2000);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
</script>

<style scoped>
.swag-button-wrapper {
  position: relative;
  display: inline-block;
}

.swag-button {
  border-radius: 5px;
  padding: 0px 8px;
  background-color: var(--vp-code-bg);
  transition: color 0.25s;
  color: var(--vp-code-color);
  font-size: 0.75rem;
  font-family: var(--vp-font-family-mono);
  cursor: pointer;
  border: none;
  white-space: nowrap;
}

.swag-button-tooltip {
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--sw-nav-bg);
  color: var(--vp-c-bg);
  font-size: 0.75rem;
  padding: 0px 6px;
  border-radius: 5px;
  white-space: nowrap;
  pointer-events: none;
}

.tooltip-fade-enter-active,
.tooltip-fade-leave-active {
  transition: opacity 0.3s ease;
}

.tooltip-fade-enter,
.tooltip-fade-leave-to {
  opacity: 0;
}
</style>
