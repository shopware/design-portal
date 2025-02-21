<template>
  <div class="search-container">
    <div class="search-bar">
      <div class="search-bar__input">
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

      <div class="search-bar__controls">
        <div class="search-bar__controls-radio">
          <button
            class="radio"
            :class="{ active: mode === 'regular' }"
            aria-label="Regular"
            @click="mode = 'regular'"
          />
          <span>Regular</span>
        </div>
        <div class="search-bar__controls-radio">
          <button
            class="radio"
            :class="{ active: mode === 'solid' }"
            aria-label="Solid"
            @click="mode = 'solid'"
          />
          <span>Solid</span>
        </div>
      </div>
    </div>

    <SearchResult :phrase="phrase" :mode="mode" />
  </div>
</template>

<script setup>
import SearchResult from "./SearchResult.vue";
import { ref } from "vue";

const phrase = ref("");
const debounce = ref(null);
const mode = ref("regular");
const isInputActive = ref(false);

const debounceInput = (event) => {
  clearTimeout(debounce.value);

  debounce.value = setTimeout(() => {
    phrase.value = event.target.value;
  }, 600);
};
</script>

<style lang="css" scoped>
@import "@shopware-ag/meteor-icon-kit/icons/meteor-icon-kit.scss";

.search-container {
  display: flex;
  align-content: center;
  flex-direction: column;
  width: 100%;
  max-width: none;
}

.search-bar {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 3rem;
  background-size: 15px 15px;
}

.search-bar__input {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.4rem;
  border-radius: 7px;
  flex: 1;
  color: var(--sw-c-gray-dark-500);
}

.search-bar__input span {
  width: 14px;
  height: 14px;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 8px;
  padding-left: 0.3rem;
  color: var(--sw-c-gray-dark-400);
}

.search-bar__input input {
  width: 100%;
  padding-left: 2.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border: 1px solid var(--sw-c-gray-400);
  border-radius: 6px;
  font-family: inherit;
}

.search-bar__input input.active-input {
  border: 1.5px solid var(--sw-c-blue-brand) !important;
  outline: none;
  box-shadow: 0 0 0 2px rgba(66, 133, 244, 0.25);
}

.search-bar__controls {
  display: flex;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
}

.search-bar__controls-radio {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.search-bar__controls .radio {
  width: 1rem;
  height: 1rem;
  border-radius: 10rem;
  border: 1px solid var(--sw-c-gray-400);
}

.active {
  border: 5px solid var(--sw-c-blue-brand) !important;
}
</style>
