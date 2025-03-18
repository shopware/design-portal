<template>
  <div class="IconSelection" v-bind="$attrs">
    <div class="IconSelection_preview-wrapper">
      <div class="IconPreview">
        <SwagIcon
          :style="{ '--icon-size': `${backgroundSize * 1}rem` }"
          :icon="icon.name"
          :type="icon.mode"
        />
      </div>

      <div class="IconPreview_controls">
        <input
          type="range"
          id="grid-size"
          min="2"
          max="12"
          step="0.5"
          v-model.number="backgroundSize"
          class="IconPreview_slider"
        />
        <div class="IconPreview_controls--button">
          <ActionButton
            :visible="true"
            :actionCompleted="downloaded"
            icon="download"
            @action-click="downloadSvg"
            @reset="downloaded = false"
          />
        </div>
      </div>

      <IconBackground :value="backgroundSize * 2" />
    </div>

    <div class="IconSelection_title">
      <div class="IconSelection_title--title">
        <h2 @click.prevent="copyIconName">{{ icon.name }}</h2>
        <span class="title">5.2.5</span>
      </div>
      <p>Part of meteor design system</p>
      <div class="IconSelection_title--tags" v-if="icon.tags.length">
        <span
          v-for="tag in icon.tags"
          :key="tag"
          class="tag"
          >{{ tag }}</span
        >
      </div>
    </div>

    <div class="IconSelection_code">
      <h4>Usage</h4>
      <CodeSnippet :buttonText="selectedIcon" :wrapContent="false" />
    </div>

    <div class="IconSelection_figma">
      <h4>Figma</h4>
      <a
        class="IconSelection_figma--link"
        :href="`https://www.figma.com/community/file/1032564947404478461/meteor-icon-kit-5-2-1-shopware`"
      >
        <span>Available on the Figma Community</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import IconBackground from "./IconBackground.vue";
import ActionButton from "../codesnippet/ActionButton.vue";
import CodeSnippet from "../codesnippet/CodeSnippet.vue";

const props = defineProps({
  icon: {
    type: Object,
    required: true,
  },
  icons: {
    type: Array,
    required: false,
  },
});

const backgroundSize = ref(3);
const downloaded = ref(false);

const selectedIcon = computed(() => {
  return `import wallet from '@shopware-ag/meteor-icon-kit/icons/${props.icon.mode}/${props.icon.name}.svg'`;
});

const downloadSvg = () => {
  const embedPoint = "/resources/meteor-icon-kit/public/icons/";
  try {
    const svgUrl = `${embedPoint}${props.icon.mode}/${props.icon.name}.svg`;
    const link = document.createElement("a");
    link.href = svgUrl;
    link.download = `${props.icon.name}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    downloaded.value = true;
  } catch (error) {
    console.error("Failed to download SVG:", error);
  }
};
</script>

<style lang="css" scoped>
.IconSelection {
  width: 320px;
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid var(--sw-c-gray-300);
}

/* Preview */
.IconSelection_preview-wrapper {
  width: 100%;
  height: 12rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-bottom: 1px solid var(--sw-c-gray-300);
}

.IconPreview_controls {
  width: 100%;
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  left: 0;
  bottom: 0;
  padding: 1.2rem;
}

.IconPreview_controls--button {
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: var(--sw-c-gray-100);
  border: 1px solid var(--sw-c-gray-300);
  border-radius: 3px;
}

.IconPreview_controls--button:hover {
  background: rgb(255, 255, 255);
}

.IconPreview {
  position: relative;
  z-index: 2;
}

/* Title */
.IconSelection_title {
  width: 100%;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--sw-c-gray-300);
}

.IconSelection_title--title {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.5rem;
}

.IconSelection_title--title h2 {
  font-size: 1.5rem;
  font-weight: 600;
}

.IconSelection_title span {
  padding: 0px 5px;
  border-radius: 3px;
  font-size: 0.9rem;
  background-color: var(--sw-c-blue-vivacious-50);
  color: var(--sw-c-blue-brand);
}

.IconSelection_title p {
  margin: 0 !important;
}

.IconSelection_title--tags {
  margin-top: 0.6rem;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
}

.tag {
 color: var(--c-heading-sub) !important;
 background-color: var(--sw-c-gray-100) !important;
}

/* Code */
.IconSelection_code {
  padding: 1.2rem;
  border-bottom: 1px solid var(--sw-c-gray-300);
}

.IconSelection_code h4 {
  margin-bottom: 0.5rem;
}

/* Figma */
.IconSelection_figma {
  padding: 1.2rem;
}

.IconSelection_figma h4 {
  margin-bottom: 0.5rem;
}

.IconSelection_figma a {
  margin: 0 !important;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--vp-c-brand);
  gap: 0.2rem;
  text-decoration: underline;
}

.dark .IconSelection_preview-wrapper {
  background-color: var(--sw-c-gray-dark-700);
}

.IconSelection .SwagIcon.--small {
  --icon-size: 1rem;
}

.IconSelection .SwagIcon.--medium {
  --icon-size: 1.725rem;
}

.IconSelection .SwagIcon.--large {
  --icon-size: 10rem;
}

:root[class~="dark"] .IconPreview {
  color: var(--sw-c-gray-dark-700);
}
</style>
