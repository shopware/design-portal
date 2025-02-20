<template>
  <div class="IconSelection_bg" @click.prevent="$emit('switch', null)" />
  <div class="IconSelection" v-bind="$attrs">
    <div class="IconSelection_sidebar-bg">
      <a
        class="IconSelection_close"
        href="#"
        @click.prevent="$emit('switch', null)"
        ><SwagIcon icon="plus" type="regular"
      /></a>

      <div class="flex flex-col gap-4">
        <div class="flex gap-4 items-center">
          <SwagIcon class="--medium" :icon="icon.name" :type="icon.mode" />
          <SwagIcon class="--small" :icon="icon.name" :type="icon.mode" />
        </div>

        <div class="flex gap-4 justify-center">
          <SwagIcon class="--large" :icon="icon.name" :type="icon.mode" />
        </div>
      </div>
    </div>

    <h1 @click.prevent="copyIconName">{{ icon.name }}</h1>
    <div class="IconSelection_tags" v-if="icon.tags.length">
      <span
        v-for="tag in icon.tags"
        :key="tag"
        class="IconSelection_tag btn --subtle --xs --with-border"
        >{{ tag }}</span
      >
    </div>

    <div>
      <textarea class="form-control" v-model="exampleHTML"></textarea>
      <a
        :href="`${embedPoint}${icon.mode}/${icon.name}.svg`"
        class="btn --secondary"
        download
        >Download svg</a
      >
    </div>

    <div>
      <h2>Related icons</h2>
      <div class="IconSelection_list">
        <IconDisplay
          v-for="icon in icons.slice(0, 4)"
          :key="icon"
          :icon="icon"
          mode="inline"
          @select="$emit('switch', icon)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import IconDisplay from "./IconDisplay.vue";

const props = defineProps({
  icon: {},
  icons: {},
});

const exampleHTML = computed(() =>
  props.icon ? `<sw-icon name="${props.icon.mode}-${props.icon.name}" />` : null
);
const exampleVue2 = computed(() =>
  props.icon ? `<sw-icon name="${props.icon.mode}-${props.icon.name}" />` : null
);
const exampleVue3 = computed(() =>
  props.icon ? `<sw-icon name="${props.icon.mode}-${props.icon.name}" />` : null
);
const exampleReact = computed(() =>
  props.icon ? `<sw-icon name="${props.icon.mode}-${props.icon.name}" />` : null
);

const copyIconName = () => {
  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = `${props.icon.regular ? "regular-" : "solid-"}${
    props.icon.name
  }`;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextArea);
};

const embedPoint = "/resources/meteor-icon-kit/public/icons/";
</script>

<style lang="css">
.IconSelection {
  display: grid;
  gap: 1.5rem;
}

.IconSelection_tags {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
}

.IconSelection_tag {
  background-color: var(--sw-c-gray-100);
  color: var(--sw-c-gray-dark-500);
  font-size: 0.875rem;
  padding: 0.25rem 0.5rem;
}

.IconSelection_close {
  position: absolute;
  right: 0;
  top: 0;
  margin-right: 1rem;
  margin-top: 1rem;
  rotate: 45deg;
}

.IconSelection_list {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(2, 1fr);
}

.IconSelection_sidebar-bg {
  padding: 1.5rem;
  background-color: var(--sw-c-gray-50);
}

.form-control {
  margin-bottom: 1rem;
}

.dark .IconSelection_sidebar-bg {
  background-color: var(--sw-c-gray-dark-700);
}

.IconSelection .SwagIcon.--small {
  --icon-size: 1rem;
}

.IconSelection .SwagIcon.--medium {
  --icon-size: 1.725rem;
}

.IconSelection .SwagIcon.--large {
  --icon-size: 8rem;
}

@media (max-width: 960.5px) {
  .IconSelection {
    position: fixed;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
    max-height: 75vh;
    max-width: 75vw;
    overflow: auto;
    z-index: 101;
  }

  .IconSelection_bg {
    position: fixed;
    content: "";
    display: block;
    background: rgba(0, 0, 0, 0.333);
    inset: 0;
    z-index: 100;
  }
}

@media (min-width: 960.5px) {
  .IconSelection {
    position: sticky;
    top: calc(var(--vp-nav-height) + 1rem);
  }

  .IconSelection_bg {
    display: none;
  }
}
</style>
