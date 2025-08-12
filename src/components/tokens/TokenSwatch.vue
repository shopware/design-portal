<template>
  <div
    class="w-176px h-120px flex flex-col items-center justify-center gap-2 p-16px"
    :class="{
      'bg-white': mode === 'light',
      'bg-[var(--color-elevation-surface-raised)]': mode === 'dark',
    }"
    :data-theme="mode"
  >
    <div
      v-if="category === 'color'"
      class="w-72px h-32px rounded-1"
      :style="{ backgroundColor: `var(${props.colorValue})` }"
    ></div>
    <div v-else-if="category === 'font'">
      i'm a font
    </div>
    <div v-else-if="category === 'border-radius'">
      i'm a border
    </div>
    <span
      class="text-[12px] font-medium"
      :class="{
        'text-[var(--color-text-primary-default)]': mode === 'light',
        'text-white': mode === 'dark',
      }"
    >
      <slot name="tokenValue"></slot>
    </span>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  colorValue: {
    type: String,
    required: true,
  },
  mode: {
    type: String,
    required: false,
    default: "light",
    validator: (value) => {
      return ["light", "dark"].includes(value);
    },
  },
  category: {
    type: String,
    required: false,
  },
});
</script>
