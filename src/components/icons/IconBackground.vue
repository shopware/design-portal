<template>
  <div class="transparency-container">
    <div class="transparency-grid" ref="gridRef" :style="gridStyle"></div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";

const props = defineProps({
  value: {
    type: Number,
    required: false,
    default: 5,
  },
  backgroundColor: {
    type: String,
    required: false,
    default: "#f5f7f9",
  },
});

const gridRef = ref(null);
const parentWidth = ref(0);
const actualPixelSize = ref(0);

// Calculate grid size based on parent width
const calculateGridSize = () => {
  if (parentWidth.value <= 0) return 16;

  const desiredPercentage = parseFloat(props.value);
  const rawSize = (parentWidth.value * desiredPercentage) / 100;

  const squareCount = Math.floor(100 / desiredPercentage);
  const exactSize = parentWidth.value / squareCount;

  actualPixelSize.value = Math.round(exactSize);
  return exactSize;
};

// Compute grid style
const gridStyle = computed(() => {
  const size = calculateGridSize();
  return {
    backgroundSize: `${size}px ${size}px`,
    backgroundImage: `
    linear-gradient(45deg, ${props.backgroundColor} 25%, transparent 25%),
    linear-gradient(-45deg, ${props.backgroundColor} 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, ${props.backgroundColor} 75%),
    linear-gradient(-45deg, transparent 75%, ${props.backgroundColor} 75%)
  `,
    backgroundPosition: `
    0 0,
    0 ${size / 2}px,
    ${size / 2}px ${size / 2}px,
    ${size / 2}px 0
  `,
  };
});

// Update parent dimensions when resized
const updateDimensions = () => {
  if (gridRef.value && gridRef.value.parentElement) {
    parentWidth.value = gridRef.value.parentElement.clientWidth;
    calculateGridSize();
  }
};

watch(() => props.value, calculateGridSize);

onMounted(() => {
  updateDimensions();
  window.addEventListener("resize", updateDimensions);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateDimensions);
});
</script>

<style lang="css" scoped>
.transparency-container {
  width: 100%;
  height: 25rem;
  position: absolute;
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid #d3dce4;
}

.transparency-grid {
  flex-grow: 1;
  width: 100%;
  height: 100%;
  min-height: 200px;
  background-color: white;
}
</style>
