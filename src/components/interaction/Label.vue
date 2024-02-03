<!-- @todo move to global hub components -->
<template>
    <div class="label">
        <span><slot name="label">Soon</slot></span>     
    </div>
  </template>

<script setup>
const props = defineProps({
    label: {
      type: String
    }
  });

</script>

  
<style lang="scss">
.label {
    display: inline-flex;
    padding: 1px 7px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 3px;
    background: #2D2E32;

    span {
        color: #FFF;
        text-align: center;
        font-family: Inter;
        font-size: 12px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        letter-spacing: 0.218px;
        text-transform: uppercase;
    }
}
</style>