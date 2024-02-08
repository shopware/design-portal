<!-- @todo move to global hub components -->
<template>
    <div class="announcement--container mt-[80px]">
        <div class="content">
            <div class="left">
                <div class="label"><slot name="label">{{ label }}</slot></div>
                <h4><slot name="title">{{ title }}</slot></h4>
            </div>
            <div class="right"><SwagBtn :href="page" :target="target" style="height:32px;padding:0px 14px;" class="--primary --sm" icon="long-arrow-right" icon-at="end"><slot name="btnlabel">{{ btnlabel }}</slot></SwagBtn>
            </div>
        </div>
    </div>
  </template>

<script setup>
const props = defineProps({
    title: {
      type: String
    },
    label: {
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

  
<style scoped lang="scss">
.announcement--container {
    display: flex;
    padding: 12px 16px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
    border-radius: 12px;
    background: #141418;

    .content {
        display: flex;
        align-items: center;
        gap: 103px;
        align-self: stretch;

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            flex: 1 0 0;

            h4 {
                color: #FAFBFE;
                font-family: Inter;
                font-size: 16px;
                font-style: normal;
                font-weight: 500;
                line-height: 140%;
            }
            .label {
                display: flex;
                padding: 1px 7px;
                justify-content: center;
                align-items: center;
                gap: 10px;
                border-radius: 3px;
                background: #007818;
                color: var(--green-50, #E1FFE0);
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
        .right {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
        }
    }
}

</style>