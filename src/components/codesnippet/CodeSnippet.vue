<template>
  <div class="codeBlock">
    <div class="code" v-html="highlightedCode"></div>

    <ActionButton
      :actionCompleted="copied"
      @action-click="copyCode"
      @reset="copied = false"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import ActionButton from "./ActionButton.vue";
import { codeToHtml } from "shiki";

const props = defineProps({
  code: {
    type: String,
    required: false,
  },
  language: {
    type: String,
    default: "javascript",
  },
});

const copied = ref(false);
const highlightedCode = ref("");

const updateHighlight = async () => {
  if (props.code && props.language) {
    try {
      highlightedCode.value = await codeToHtml(props.code, {
        lang: props.language,
        theme: "github-light",
      });
    } catch (error) {
      console.error("Shiki highlighting failed:", error);
      highlightedCode.value = props.code;
    }
  }
};

watch([() => props.language, () => props.code], updateHighlight, {
  immediate: true,
});

onMounted(() => {
  updateHighlight();

  const style = document.createElement("style");
  style.innerHTML = `
    .code pre {
      background: #f0f2f5 !important;
    }
  `;
  document.head.appendChild(style);
});

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(props.code);
    copied.value = true;
  } catch (error) {
    console.error("Failed to copy code:", error);
  }
};
</script>

<style lang="css" scoped>
.codeBlock {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: var(--sw-c-gray-100) !important;
  border-radius: 8px;
  overflow: auto;
  padding: 1px 9px;
  font-family: var(--vp-font-family-mono) !important;
  font-size: 14px;
}

.code {
  margin-left: 10px;
}
</style>
