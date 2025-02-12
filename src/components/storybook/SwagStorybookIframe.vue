<template>
  <div class="SwagStorybookIframe__wrapper">
    <iframe
      :src="src"
      class="SwagStorybookIframe"
      crossOrigin="anonymous"
      scrolling="no"
      title="Storybook - Button Primary"
    ></iframe>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  component: {
    type: String,
    required: true,
  },
  group: {
    type: String,
    required: true,
  },
});
const src = computed(
  () =>
    `https://meteor-component-library.vercel.app/?path=/docs/components-${props.group}-${props.component}--docs&viewMode=docs&shortcuts=false&singleStory=true&toolbar=false`
);
</script>

<style>
.SwagStorybookIframe__wrapper {
  overflow: hidden;
}

.SwagStorybookIframe {
  border: 0;
  width: 100%;
  height: 1800px;
  min-height: 50vh;
  overflow: hidden;
  margin-top: -160px;
}
</style>
