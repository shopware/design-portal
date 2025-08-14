<template>
  <div
    class="relative inline-block"
    @mouseenter="setIsHovered"
    @mouseleave="setIsHovered"
  >
    <button
      ref="buttonRef"
      @click="copyToClipboard"
      class="token-copy-button rounded px-10px py-2px bg-[var(--vp-code-bg)] transition-colors duration-250 text-[14px] cursor-pointer border-none whitespace-nowrap color-[#172B4D]"
    >
      <slot name="buttonText" />
    </button>
    <transition
      name="tooltip-fade"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <span
        v-if="isHovered"
        class="absolute bottom-[120%] left-1/2 transform -translate-x-1/2 bg-[var(--sw-nav-bg)] text-xs p-10px rounded whitespace-nowrap pointer-events-none color-white"
        >{{ tooltipText }}</span
      >
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";

const buttonRef = ref(null);
const isHovered = ref(false);
const tooltipText = ref("Copy to clipboard");

const setIsHovered = () => {
  isHovered.value = !isHovered.value;
};

const beforeEnter = (el) => {
  el.style.opacity = 0;
};

const enter = (el, done) => {
  el.style.opacity = 1;
  done();
};

const leave = (el, done) => {
  el.style.opacity = 0;
  done();
};

const copyToClipboard = async () => {
  try {
    // Get the text content from the button slot using Vue ref
    const textToCopy = buttonRef.value?.textContent?.trim() || "";

    await navigator.clipboard.writeText(textToCopy);
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
.tooltip-fade-enter-active,
.tooltip-fade-leave-active {
  transition: opacity 0.3s ease;
}

.tooltip-fade-enter,
.tooltip-fade-leave-to {
  opacity: 0;
}
</style>
