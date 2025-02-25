<template>
  <a
    href="#"
    class="IconDisplay"
    :class="mode ? `--mode-${mode}` : null"
    @click.prevent.stop="$emit('select')"
  >
    <div class="IconDisplay_wrap">
      <SwagIcon class="IconDisplay_icon" :icon="icon.name" :type="icon.mode" />
      <span v-if="mode === 'inline'" class="IconDisplay_name">{{
        icon.name
      }}</span>
    </div>
    <span v-if="mode !== 'inline'" class="IconDisplay_name">{{
      icon.name
    }}</span>
  </a>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  icon: Object,
  mode: Object,
});

const id = computed(() => {
  return `meteor-icon-kit__${props.icon.mode}-${props.icon.name}`;
});
</script>

<style lang="css" scoped>
.IconDisplay {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--vp-c-text);
}

.IconDisplay_name,
.IconDisplay_icon {
  color: var(--vp-c-text);
}

.IconDisplay_name {
  font-size: 0.75rem;
  font-weight: 500;
}

.IconDisplay_wrap {
  background-color: #FAFBFE;
  border-radius: 12px;
  border: 1px solid #F0F3FF;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

:root[class~="dark"] .IconDisplay_wrap {
  background-color: var(--sw-c-gray-dark-700);
  border: 1px solid var(--sw-c-gray-dark-800);
}

.IconDisplay.--mode-inline {
  flex-direction: row;
}

.IconDisplay.--mode-inline .IconDisplay_wrap {
  padding: 1rem;
  align-items: center;
  gap: 0.5rem;
  justify-content: flex-start;
  --icon-size: 16px;
}

.IconDisplay:not(.--mode-inline) .IconDisplay_wrap {
  aspect-ratio: 1;
  --icon-size: 16px;
}
</style>
