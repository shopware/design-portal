<template>
  <div class="search-input">
    <span>
      <SwagIcon icon="search" type="regular" />
    </span>
    <input
      :class="{ 'active-input': isInputActive }"
      name="searchbar"
      type="text"
      @input="debounceInput"
      @focus="isInputActive = true"
      @blur="isInputActive = false"
      placeholder="Search icons..."
    />
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const isInputActive = ref(false);
const debounce = ref(null);
const emit = defineEmits(["update:phrase"]);

const debounceInput = (event) => {
  clearTimeout(debounce.value);
  debounce.value = setTimeout(() => {
    emit("update:phrase", event.target.value);
  }, 600);
};
</script>

<style>
:root {
  --search-bar-border: var(--sw-c-gray-400);
  --search-bar-active: var(--vp-c-brand);
}

.search-input {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  border-radius: 7px;
  flex: 1;
}

.search-input span {
  width: 14px;
  height: 14px;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 8px;
  padding-left: 0.3rem;
}

.search-input input {
  width: 100%;
  padding-left: 2.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border: 1px solid var(--search-bar-border);
  border-radius: 6px;
}

.search-input input.active-input {
  border: 1.5px solid var(--search-bar-active) !important;
  outline: none;
  box-shadow: 0 0 0 2px rgba(66, 133, 244, 0.25);
}
</style>
