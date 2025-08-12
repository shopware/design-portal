<template>
  <div
    class="w-176px h-120px flex flex-col items-center justify-center gap-2 p-16px"
    :class="{ 'bg-white': mode === 'light', 'bg-[var(--color-elevation-surface-raised)]': mode === 'dark' }"
    :data-theme="mode"
  >
    <div
      class="w-72px h-32px rounded-1"
      :style="{ backgroundColor: colorValue }"
    ></div>
    <span
      class="text-[12px] font-medium"
      :class="{
        'text-[var(--color-text-primary-default)]': mode === 'light',
        'text-white': mode === 'dark',
      }"
      >{{ token }}</span
    >
  </div>
</template>

<script>
export default {
  props: {
    colorValue: {
      type: String,
      required: true,
    },
    token: {
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
  },
};
</script>
