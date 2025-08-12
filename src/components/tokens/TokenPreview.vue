<template>
  <div
    class="w-full flex flex-row justify-between border-t-0 border-l-0 border-r-0 border-b-1 border-solid border-[#091E42]/14"
  >
    <div class="m-16px">
      <slot name="tokenName" />
    </div>
    <div class="flex flex-row justify-between">
      <slot name="lightToken" />
      <slot name="darkToken" />
    </div>
  </div>
</template>