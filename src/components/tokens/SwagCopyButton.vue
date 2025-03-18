<template>
  <div
    class="swag-button-wrapper"
    @mouseenter="setIsHovered"
    @mouseleave="setIsHovered"
  >
    <button @click="copyToClipboard" class="swag-button" :class="{ 'wrap-content': props.wrapContent }">
      {{ buttonText }}
    </button>

    <transition
      name="tooltip-fade"
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
  wrapContent: {
    type: Boolean,
    default: true,
  },
});

const isHovered = ref(false);
const copied = ref(false);
const tooltipText = ref("Copy to clipboard");

const setIsHovered = () => {
  isHovered.value = !isHovered.value;
};

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(props.buttonText);
    tooltipText.value = "Copied!";
    copied.value = true;
    setTimeout(() => {
      tooltipText.value = "Copy to clipboard";
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
</script>

<style scoped>
.swag-button-wrapper {
  position: relative;
}

.swag-button {
  padding: 9px 10px;
  border-radius: 3px;
  font-size: 0.8rem;
  font-family: var(--vp-font-family-mono);
  line-height: 1.2rem;
  text-align: left;
  background-color: var(--vp-code-bg);
  color: var(--c-heading-sub);
  cursor: pointer;
  border: none;
  transition: color 0.25s;
}

.swag-button_content {
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 0.5rem;
}

.swag-button-tooltip {
  position: absolute;
  bottom: 110%;
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

.wrap-content {
  white-space: nowrap;
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
