<template>
    <a :href="page">
        <div class="banner--contribute">
            <div class="content">
                <div class="left">
                    <h2><slot name="title">{{ title }}</slot></h2>
                    <p><slot name="copy">{{ copy }}</slot></p>
                </div>
                <div class="right">
                    <div class="arrow" v-if="btn === 'true'" :href="page">-></div>
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
    copy: {
      type: String
    },
    btn: {
      type: String
    },
    page: {
    type: String
    }
  });
</script>

  
<style scoped lang="scss">
.banner--contribute {
    width: 100%;
    display: flex;
    background: url(../../components/banner/contributing/background.png);
    background-size: cover;
    background-repeat: no-repeat;   
    border-radius: 8px;
    padding: 42px 48px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
    margin: 24px 0px;
    .dark & {
        filter: invert(1) hue-rotate(-180deg);
    }

    h2 {
        color: #00296A !important;
        font-family: Poppins;
        font-size: 24px;
        font-style: normal;
        font-weight: 600 !important;
        line-height: 140%; /* 28px */
    }

    p {
        color: #00296A;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%; /* 19.6px */
    }

    .arrow {
        color: #00296A;
        font-family: Inter;
        font-size: 48px;
        font-style: normal;
        font-weight: 500;
        line-height: 100%; /* 48px */
        letter-spacing: -1.44px;
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