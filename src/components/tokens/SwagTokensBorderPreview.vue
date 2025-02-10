<template>
    <div class="swag-tokens-border-preview">
        <div class="border-preview" :style="{borderRadius: borderRadius}"></div>
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
.swag-tokens-font-preview {
    min-height: 40px;
    width: 100%;
    text-align: left;
}
.border-preview {
    width: 50px;
    height: 50px;
    background: #2D2E32;
}
</style>
