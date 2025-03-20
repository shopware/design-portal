<template>
  <a
    href="#"
    class="IconDisplay"
    :class="[
      mode ? `--mode-${mode}` : null,
      active ? 'IconDisplay--active' : ''
    ]"
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
  active: Boolean,
});

const id = computed(() => {
  return `meteor-icon-kit__${props.icon.mode}-${props.icon.name}`;
});
</script>

<style lang="css" scoped>
.IconDisplay {
  height: 5rem;
  padding: 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
  color: var(--vp-c-text);
  border-radius: 4px;
}

.IconDisplay_name,
.IconDisplay_icon {
  color: var(--vp-c-text);
}

.IconDisplay_name {
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem;
}

.IconDisplay_wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
}

.IconDisplay.--mode-inline {
  flex-direction: row;
}

.IconDisplay.--mode-inline .IconDisplay_wrap {
  padding: 1rem;
  align-items: center;
  gap: 0.5rem;
  justify-content: flex-start;
  --icon-size: 1.725rem;
}

.IconDisplay:not(.--mode-inline) .IconDisplay_wrap {
  aspect-ratio: 1;
  --icon-size: 1.5rem;
}

.IconDisplay--active {
  color: var(--sw-c-blue-brand);
  background-color: var(--sw-c-blue-vivacious-50);
  border: 1px solid var(--sw-c-blue-brand);
}
</style>
