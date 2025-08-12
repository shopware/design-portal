<template>
  <div
    class="w-full flex flex-row justify-between border-t-0 border-l-0 border-r-0 border-b-1 border-solid border-[#091E42]/14"
  >
    <div class="flex flex-col m-t-16px gap-2 text-sm">
      <slot name="tokenName" />
      <slot name="tokenDescription" />
    </div>
    <div class="flex flex-row justify-between">
      <slot name="lightToken" />
      <slot name="darkToken" />
    </div>
  </div>
</template>