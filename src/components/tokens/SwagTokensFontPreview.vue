<template>
  <div class="swag-font-preview">
    <p v-if="lineHeight" class="line-height">{{ lineHeight }}</p>
    <p v-else :style="fontStyles">Aa</p>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    fontSize: {
      type: String,
      required: true,
    },
    fontWeight: {
      type: String,
      required: false,
    },
    lineHeight: {
      type: String,
      required: false,
    },
  },
  computed: {
    fontStyles() {
      return {
        fontSize: this.fontSize,
        fontWeight: `${this.fontWeight} !important`,
      };
    },
  },
};
</script>

<style scoped>
.swag-font-preview {
  width: 70px;
  height: 50px;
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.line-height {
  font-weight: 500;
}
</style>
