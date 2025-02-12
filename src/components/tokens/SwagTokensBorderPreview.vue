<template>
  <div class="swag-tokens-border-preview">
    <div class="border-preview" :style="{ borderRadius: borderRadius }"></div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    borderRadius: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.border-preview {
  width: 50px;
  height: 50px;
  background: #2d2e32;
}
</style>
