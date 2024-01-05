<template>
    <div class="SwagLine">
      <ul>
        <li>Dennis</li>
      </ul>
    </div>
  </template>
  
  <style lang="scss">
  .SwagLine {
    border: 1px solid var(--sw-c-gray-200);
    border-width: 1px 0;
  
    ul {
      @apply flex flex-wrap gap-3 gap-y-4 m-0 p-0 py-4 items-center;
      list-style-type: none;
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