<template>
  <button @click="copyToClipboard" class="swag-button">
    <SwagIcon
      type="regular"
      icon="checkmark"
      v-if="copied"
      class="icon-check"
    />
    <SwagIcon type="regular" icon="copy" v-else class="icon-copy" />
  </button>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  textToCopy: {
    type: String,
    required: true,
  },
  buttonText: {
    type: String,
    default: "Copy",
  },
});

const copied = ref(false);

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(props.textToCopy);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
</script>

<style scoped>
.swag-button {
  width: 35px !important;
  height: 35px !important;
  padding: 1px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.swag-button .icon-check {
  width: 18px;
}

.swag-button .icon-copy {
  width: 20px;
  height: 20px;
}

.swag-button:hover {
  background: var(--vp-code-bg);
}
</style>
