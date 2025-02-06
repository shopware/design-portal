<template>
    <div class="swag-tokens-font-preview">
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
        }
    },
    computed: {
        fontStyles() {
            return {
                fontSize: this.fontSize,
                fontWeight: `${this.fontWeight} !important`
            };
        }
    }
};
</script>

<style scoped>
.swag-tokens-font-preview {
    min-height: 40px;
    width: 100%;
    text-align: left;
}
.line-height {
    font-weight: 500;
}
</style>
