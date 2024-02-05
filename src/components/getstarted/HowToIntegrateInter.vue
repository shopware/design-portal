<template>
    <div class="HowToIntegrateInter">
      <div>
      <h2 class="h-homepage">How to install Inter</h2>
      <p>
      Meteor uses Inter as the default typeface. It’s 100% free to use in all kinds of projects — both personal and commercial.
        Inter is an free, open-source sans-serif typeface designed by Swedish designer/programmer Rasmus Andersson. It was designed to work well on screens as a UI font and features a large x-height. The family is available in nine weights with matching italics, as well as a variable font version.</p>
      <picture>
        <source media="(prefers-color-scheme: dark)" srcset="/foundations/getstarted/foundations-getstarted-inter--download@dark.png 4x">

        <img decoding="async" loading="lazy" alt="A sketch of the Accessibility icon. The image is tinted in shades of green." srcset="/foundations/getstarted/foundations-getstarted-inter--download.png 4x" src="/foundations/getstarted/foundations-getstarted-inter--download.png" width="100%" height="auto">
      </picture>
      <p>Figma also gives you access to a catalog of Google Web Fonts, which you can use in Figma without having to install anything.</p>
      <a href="https://rsms.me/inter/">Download Inter -></a>
    </div>
    </div>
  </template>
  
  <style scoped lang="scss">
  .HowToIntegrateInter {
    @apply grid gap-12;
    gap: 12px;
    grid-template-columns: 100%;
    h2 {
        border-top: 0px;
    }
    ul.HowToIntegrateInter_links {
      @apply flex p-0 m-0 mt-5 gap-12 gap-y-4 flex-wrap;
      list-style-type: none;
  
      li {
        @apply p-0 m-0;
        & + li {
          @apply mt-0;
        }
      }
      a {
        font-feature-settings: 'ss02' on;
        font-family: Inter;
        font-size: 1rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
    }
  
    &_subgrid {
      @apply grid gap-20 md:grid-cols-2;
      gap: 12px;
    }
  }
  </style>
  
  <script setup lang="ts">
  </script>