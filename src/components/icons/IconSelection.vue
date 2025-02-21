<template>
  <div class="IconSelection_wrapper">
    <div class="IconSelection_headers">
      <h1 @click.prevent="copyIconName">{{ icon.name }}</h1>
      <span class="title">5.2.5</span>
    </div>
    <div class="IconSelection" v-bind="$attrs">
      <div class="IconSelection_preview-wrapper">
        <div class="IconPreview">
          <SwagIcon
            :style="{ '--icon-size': `${backgroundSize * 3}rem` }"
            :icon="icon.name"
            :type="icon.mode"
          />
        </div>

        <div class="IconPreview-controls">
          <input
            type="range"
            id="grid-size"
            min="2"
            max="12"
            step="0.5"
            v-model.number="backgroundSize"
            class="IconPreview_slider"
          />
          <ActionButton
            :visible="true"
            :actionCompleted="downloaded"
            icon="download"
            @action-click="downloadSvg"
            @reset="downloaded = false"
          />
        </div>

        <IconBackground :value="backgroundSize" />
      </div>

      <h2>Usage</h2>
      <CodeSnippet :code="selectedIcon" language="js" />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { onMounted } from "vue";
import { ref, watch } from "vue";
import IconDisplay from "./IconDisplay.vue";
import CodeSnippet from "../codesnippet/CodeSnippet.vue";
import IconBackground from "./IconBackground.vue";
import ActionButton from "../codesnippet/ActionButton.vue";

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
    const link = document.createElement('a');
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
.IconSelection_wrapper {
  /* border: 1px solid orange; */
  margin-bottom: 3rem;
}

.IconSelection {
  display: grid;
  gap: 1.5rem;
}

.IconSelection_headers {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
  align-items: center;
  margin-bottom: 1rem;
}

.IconSelection_headers span {
  font-size: 0.8rem;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 5px;
  background-color: var(--sw-c-blue-vivacious-50);
  color: var(--sw-c-blue-brand);
}

.IconSelection_preview-wrapper {
  width: 100%;
  height: 25rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.IconPreview-controls {
  width: 100%;
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  left: 0;
  bottom: 0;
  padding: 1rem;
}

.IconPreview {
  position: relative;
  z-index: 2;
}

.IconSelection h2 {
  font-size: 1.5rem;
}

.IconSelection_tags {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
}

.IconSelection_tag {
  background-color: var(--sw-c-blue-vivacious-50);
  color: var(--sw-c-blue-brand);
  font-size: 0.875rem;
  padding: 0.25rem 0.5rem;
  border: none !important;
}

.IconSelection_list {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(2, 1fr);
}

.form-control {
  margin-bottom: 1rem;
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
</style>
