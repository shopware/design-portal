<template>
  <div class="search-container">
    <div class="search-bar">
      <SearchInput @update:phrase="phrase = $event" />

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

    <IconSearchResult :phrase="phrase" :mode="mode" />
  </div>
</template>

<script setup>
import SearchInput from "../search/SearchBar.vue";
import IconSearchResult from "./IconSearchResult.vue";
import { ref } from "vue";

const phrase = ref("");
const mode = ref("regular");
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
  border: 5px solid var(--vp-c-brand) !important;
}
</style>
