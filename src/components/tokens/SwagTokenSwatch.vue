<template>
  <div class="swag-token-swatch" :style="{ backgroundColor: value }"></div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.swag-token-swatch {
  width: 150px;
  min-height: 50px;
  border-radius: 5px;
}
</style>
