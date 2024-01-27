<!-- @todo move to global hub components -->
<template>
    <div class="banner--learn-more">
        <div class="content">
            <div class="left">
                <h2><slot name="title">{{ title }}</slot></h2>
                <p><slot name="copy">{{ copy }}</slot></p>
            </div>
            <div class="right">
                <SwagBtn :href="page" :target="target" class="--primary --sm" icon="long-arrow-right" icon-at="end"><slot name="btnlabel">{{ btnlabel }}</slot></SwagBtn>
            </div>
        </div>        
    </div>
  </template>

<script setup>
const props = defineProps({
    title: {
      type: String
    },
    copy: {
      type: String
    },
    btnlabel: {
      type: String
    },
    page: {
    type: String
    },
    target: {
    type: String
    }
  });
</script>

  
<style lang="scss">
.banner--learn-more {
    width: 100%;
    display: flex;
    background: #12141E;
    border-radius: 8px;
    padding: 42px 48px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
    margin: 24px 0px;

    h2 {
        color: #FFF;

        /* Inter/Desktop/Text/l/Semibold */
        font-family: Poppins;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 140%; /* 28px */
    }

    p {
        color: var(--zinc-50, #FAFBFE);

        /* Inter/Desktop/Text/xs/Regular */
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%; /* 19.6px */
    }

    .content {
        display: flex;
        align-items: center;
        gap: 103px;
        align-self: stretch;
    }

    .left {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
        flex: 1 0 0;
    }

    .right {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
    }
}
</style>