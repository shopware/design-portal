<template>
  <div class="SearchResult">

    <div class="SearchResult_list">
      <IconDisplay
      v-for="icon in resultIcons"
      :icon="icon"
      :key="icon"
      :active="selectedIcon === icon"
      @select="selectedIcon = icon"
      />
    </div>

    <div v-if="selectedIcon" class="SearchResult_sidebar">
      <IconSelection
        :icon="selectedIcon"
        @switch="switchSelectedIcon"
        :icons="icons"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import IconDisplay from "./IconDisplay.vue";
import IconSelection from "./IconSelection.vue";
import Fuse from "fuse.js";
import meta from "@shopware-ag/meteor-icon-kit/icons/meta.json";

const icons = ref(meta);
const selectedIcon = ref(null);

const props = defineProps({
  phrase: String,
  mode: "solid" | "regular",
});

// Sort items based on search
const resultIcons = computed(() => {
  const filteredIcons = icons.value.filter((i) => i.mode === props.mode);
  if (props.phrase.length <= 0) {
    return filteredIcons;
  }

  const fuse = new Fuse(filteredIcons, {
    keys: ["name"],
  });

  const searchResult = fuse.search(props.phrase);

  return searchResult.map((r) => r.item);
});

// Switch selected icon
const switchSelectedIcon = (data) => {
  if (!data) {
    selectedIcon.value = null;
    return;
  }
  const { basename, size, mode } = data;
  selectedIcon.value = icons.value.find(
    (icon) =>
      icon.basename === basename && icon.size === size && icon.mode === mode
  );
  console.log(selectedIcon.value);
};
</script>

<style lang="css" scoped>
.SearchResult {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  flex-wrap: nowrap;
}

.SearchResult_list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(7rem, 1fr));
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  gap: 3rem;
  row-gap: 3rem;
  flex-wrap: wrap;
  flex-grow: 1;
}

.SearchResult h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.SearchResult_sidebar {
  position: sticky;
  top: 5rem;
  align-self: start;
  max-height: 90vh;
}
</style>