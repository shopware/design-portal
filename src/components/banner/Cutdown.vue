<!-- @todo move to global hub components -->
<template>
    <div class="banner--cutdown">
        <div class="cutdown_content">
            <picture>
            <source media="(prefers-color-scheme: dark)" :srcset="thumbnailIMG + '@dark.png 4x'">

            <img class="cutdown__thumbnail" decoding="async" loading="lazy" :alt="alt" :srcset="thumbnailIMG + '.png 4x'" :src="thumbnailIMG + '.png'" width="100%" height="auto">
            </picture>
            <div class="left">
                <div class="h-label"><slot name="eyebrow">{{ eyebrow }}</slot></div>
                <p><slot name="copy">{{ title }}</slot></p>
            </div>
            <div class="right">
                <SwagBtn :href="videoURL" class="--secondary --sm"><slot name="btnlabel"><!--<SwagIcon type="solid" icon="play"/>--> {{ btnlabel }}</slot></SwagBtn>
            </div>
        </div>        
    </div>
  </template>

<script setup>
const props = defineProps({
    title: {
      type: String
    },
    eyebrow: {
      type: String
    },
    btnlabel: {
      type: String
    },
    videoURL: {
    type: String
    },
    thumbnailIMG: {
    type: String
    },
    alt: {
    type: String
    }
  });
</script>

  
<style lang="scss">
.banner--cutdown {
    align-items: center;
    background-color: #F2F3F8;
    border-radius: 12px;
    display: flex;
    font-weight: 400;
    gap: 8px;
    margin: 2rem 0;
    padding: 20px;

    .cutdown__thumbnail {
        background-clip: padding-box;
        border: 1px solid #00000014;
        border-radius: 6px;
        height: 64px;
        width: auto;
        overflow: hidden;
        padding: 0;
        position: relative;
    }

    p {
        color: var(--zinc-50, #2D2E32);

        /* Inter/Desktop/Text/xs/Regular */
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%; /* 19.6px */
        margin: 0;
    }

    .cutdown_content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-self: stretch;
    }

    .left {
        display: flex;
        padding: 0px 16px;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
        flex: 1 0 0;

        .h-label {
            color: #696A6E;
        }
    }

    .right {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        margin-left: auto;
        position: absolute;
        right: 0;
        padding-right: 20px;
        .btn.--secondary, .vp-doc .btn.--secondary {
            box-shadow: 0 1px 2px #0000001a;
            border: 1px solid #00000014;
            background: #fff;
            color: #2D2E32;
            border-radius: 8px;
        }
    }
}
</style>