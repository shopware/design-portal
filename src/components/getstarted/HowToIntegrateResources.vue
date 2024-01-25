<template>
    <div class="HowToIntegrateResources">
      <div>
      <h2 class="h-homepage">How to integrate our Figma Assets</h2>
      <p>
      <h3>Download the Library</h3> 
      You can access and download the kit directly from our Figma account. Make sure you're signed in to Figma to download the file.
      </p>
      <picture>
        <source media="(prefers-color-scheme: dark)" srcset="/foundations/getstarted/foundations-getstarted-figma--download@dark.png 4x">

        <img decoding="async" loading="lazy" alt="A sketch of the Accessibility icon. The image is tinted in shades of green." srcset="/foundations/getstarted/foundations-getstarted-figma--download.png 4x" src="/foundations/getstarted/foundations-getstarted-figma--download.png" width="100%" height="auto">
      </picture>
    </div>
      <div class="HowToIntegrateResources_subgrid">
        <div>
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="/foundations/getstarted/foundations-getstarted-figma--integrate@dark.png 2x">

          <img decoding="async" loading="lazy" alt="A sketch of the Accessibility icon. The image is tinted in shades of green." srcset="/foundations/getstarted/foundations-getstarted-figma--integrate.png 2x" src="/foundations/getstarted/foundations-getstarted-figma--integrate.png" width="100%" height="auto">
        </picture>
        <p>
          <h3>Publish library to your workspace</h3> 
          Publish the library you would like to use to your workspace.
        </p>
        </div>
        <div>
          <picture>
            <source media="(prefers-color-scheme: dark)" srcset="/foundations/getstarted/foundations-getstarted-figma--customize@dark.png 2x">

            <img decoding="async" loading="lazy" alt="A sketch of the Accessibility icon. The image is tinted in shades of green." srcset="/foundations/getstarted/foundations-getstarted-figma--customize.png 2x" src="/foundations/getstarted/foundations-getstarted-figma--customize.png" width="100%" height="auto">
          </picture>
          <p>
          <h3>Add library to your design files</h3> 
          Connect the Meteor libraries through the asset settings of your design files. When designing, you can easily replace or customize library components with your preferred styles to adjust design files to your needs.
        </p>
        </div>
      </div>
    </div>
  </template>
  
  <style lang="scss">
  .HowToIntegrateResources {
    @apply grid gap-12;
    gap: 12px;
    grid-template-columns: 100%;
    h2 {
        border-top: 0px;
    }
    ul.HowToIntegrateResources_links {
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