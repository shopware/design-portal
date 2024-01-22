<!-- @todo move to global hub components -->
<template>
    <div class="package">
            <div class="left">
                <input class="package-copy font-mono" v-on:focus="$event.target.select()" ref="clone" readonly :value="package"/>
            </div>
            <div class="right">
                <SwagBtn class="--secondary --sm" @click.prevent="copyToClipboard" href="#!">
                    <SwagIcon type="solid" icon="copy-s" />

                    </SwagBtn>
            </div>      
    </div>
  </template>

<script setup>
const props = defineProps({
    package: {
      type: String
    },
  });

const copyToClipboard = function(event) {
    event.preventDefault();
    navigator.clipboard.writeText(props.package)
}
</script>

  
<style lang="scss">
.package {
    align-items: center;
    background-color: #F2F3F8;
    border-radius: 8px;
    //display: table;
    font-weight: 400;
    gap: 8px;
    padding: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;

    .package-copy {
        color: #2D2E32;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        min-width: 100%;
    }

    .left {
        display: flex;
        padding: 0px 16px;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
        flex: 1 0 0;
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