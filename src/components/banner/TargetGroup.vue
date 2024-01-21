<template>
    <div class="TargetGroup">
        <SwagBtn :href="pageleft" class="--primary design" icon="long-arrow-right" icon-at="end"><SwagIcon icon="figma"/><slot name="btnlabel">{{ btnlabelleft }}</slot></SwagBtn>
        <SwagBtn :href="pageright" class="--primary developers" icon="long-arrow-right" icon-at="end"><SwagIcon icon="github"/><slot name="btnlabel">{{ btnlabelright }}</slot></SwagBtn>      
    </div>
  </template>

  <script setup>
  const props = defineProps({
      btnlabelleft: {
        type: String
      },
      pageleft: {
      type: String
      },
      btnlabelright: {
        type: String
      },
      pageright: {
      type: String
      }
    });
  </script>

<style lang="scss">
.TargetGroup {
    display: flex;
    padding-top: 8px;
    align-items: flex-start;
    gap: 12px;
    align-self: stretch;
}
.design {
    border-radius: 8px!important;
    background: #0870FF!important;
    display: flex!important;
    padding: 20px 24px!important;
    align-items: center!important;
    color: #FFF;
    /* Inter/Desktop/Text/l/Medium */
    font-family: Inter!important;
    font-size: 20px!important;
    font-style: normal!important;
    font-weight: 500!important;
    line-height: 140%!important; /* 28px */    
}
.developers {
    border-radius: 8px!important;
    background: #1E293B!important;
    display: flex!important;
    padding: 20px 24px!important;
    align-items: center!important;
    color: #FFF;
    /* Inter/Desktop/Text/l/Medium */
    font-family: Inter!important;
    font-size: 20px!important;
    font-style: normal!important;
    font-weight: 500!important;
    line-height: 140%!important; /* 28px */    
}

</style>