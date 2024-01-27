<template>
    <div class="grid gap-8 mb-[16px] md:max-w-12/12">
    <div class="usage-block">
      <div class="correct-block correct md:max-w-6/12">
        <div class="usage-block-heading correct">
          <div class="usage-icon">
            <SwagIcon type="solid" icon="check-circle"/>
          </div>
          <h3 class="correct">Do</h3>
        </div>
        <slot name="correct"></slot>
      </div>
  
      <div class="incorrect-block incorrect md:max-w-6/12" v-if="hasIncorrectSlot">
        <div class="usage-block-heading incorrect">
          <div class="usage-icon">
            <SwagIcon type="solid" icon="times-circle"/>
          </div>
          <h3 class="incorrect">Don't</h3>
        </div>
        <slot name="incorrect"></slot>
      </div>
    </div>
    </div>
  </template>
  
  <script>
    export default {
      computed: {
        hasIncorrectSlot() {
            return !!this.$slots.incorrect || !!this.$scopedSlots.incorrect;
        }
      }
    }
    </script>
  
  <style lang="scss" scoped>
  .usage-block {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    gap: 16px;
    flex: 1 0 0;
    flex-wrap: nowrap;
  
    ul {
      padding: 0px;
      li {
        padding: 12px 0px;
        list-style: none;
        list-style-position: inside;
        border-bottom: 1px solid #d1d9e0;
        
        &:last-child {
          border: 0;
        }
      }
    }
  
  .usage-block-heading {
    padding: 4px 12px 4px 4px;
    border-radius: 20px;
    align-items: center;
    display: flex;
    font-weight: 400;
    line-height: 26px; /* 162.5% */
    letter-spacing: 0.08px;
    &.correct {
        background: #00470A;
        color: #E1FFE0;
      }
      &.incorrect {
        background: #5E0006;
        color: #FFF2F0;
      }
  
    h3 {
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 0.08px;
        text-transform: uppercase;
    }
  }
  
    .usage-icon {
      display: inline-flex;
      flex: 0 0 auto;
      justify-content: center;
      margin-right: 8px;
      width: 24px;
      height: 24px;
      align-items: center;

      .SwagIcon {
        width: 16px;
        height: 16px;
      }
  
      &.correct {
        background: #c3f1c8;
        color: #37d046;
        border: 1px solid #37d046;
      }
      &.incorrect {
        background: #f5bfc9;
        color: #de294c;
        border: 1px solid #de294c;
      }
    }
  
    .correct-block, .incorrect-block {
      padding: 24px;
      border-radius: 8px;
      border: 1px solid #F0F3FF;
      background: #FAFBFE;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
  
      &.correct {
        display: flex;
        padding: 24px;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        flex: 1 0 0;
      }
      &.incorrect {
        display: flex;
        padding: 24px;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        flex: 1 0 0;

      }
    }
  }
  </style>
  