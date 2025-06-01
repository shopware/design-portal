<template>
  <div class="SwagLine">
    <ul>
      <li>Vue</li>
      <li>150+ Components</li>
      <li>750+ Icons</li>
      <li>Accessible</li>
      <li>Extensible</li>
      <li>Design Token Support</li>
      <li>Made for the world</li>
      <li>Open source</li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.SwagLine {
  border: 1px solid var(--vp-c-border);
  border-image-slice: 1;
  border-width: 1px 0px;
  display: flex;
  ul {
    @apply flex flex-wrap gap-3 gap-y-4 m-0 p-0 py-4 items-center;
    list-style-type: none;
    margin: 0 auto
  }
  li {
    @apply m-0 p-0 flex gap-3 items-center flex-row;
    font-family: Inter;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 1.05rem */
    & + li {
      @apply mt-0;
    }
    &:not(:last-child)::after {
      @apply flex;
      content: '・';
    }
  }
}
</style>