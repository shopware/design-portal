<!-- @todo move to global hub components -->
<template>
    <a :href="URL">
        <div class="banner--resource">
        <div class="resource_content">
            <div class="left">
                <div class="h-label"><slot name="eyebrow">{{ eyebrow }}</slot></div>
                <p><slot name="copy">{{ title }}</slot></p>
            </div>
            <div class="right">
                <SwagBtn :href="URL" class="--secondary --sm"><slot name="btnlabel">{{ btnlabel }}<SwagIcon type="solid" icon="chevron-right"/></slot></SwagBtn>
            </div>
        </div>        
    </div>
    </a>    
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
    URL: {
    type: String
    },
    alt: {
    type: String
    }
  });
</script>

  
<style scoped lang="scss">
:root[class~="dark"] .banner--resource {
  background-color: var(--sw-c-gray-dark-700);
  border: 1px solid var(--sw-c-gray-dark-800);
  
  p {
    color: #ababab;
  }
}
.banner--resource {
    align-items: center;
    background-color: #FAFBFE;
    border-radius: 12px;
    display: flex;
    font-weight: 400;
    gap: 8px;
    margin: 2rem 0;
    padding: 20px;
    border: 1px solid #F0F3FF;


    .resource__thumbnail {
        background-clip: padding-box;
        border: 1px solid #00000014;
        border-radius: 6px;
        height: 64px;
        width: 64px;
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
        line-height: 140% !important; /* 19.6px */
        margin: 0 !important;
        max-width: 540px;
    }

    .resource_content {
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