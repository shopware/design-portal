<template>
  <div class="SwagExposed">
    <div>
      <div class="h-label">Guides</div>
      <h2 class="h-homepage md:max-w-1/2">Check out these practical guides to help you understand how to design for
        Shopware.</h2>
      <ul class="SwagExposed_links">
        <li><a href="/foundations/">Shopware Design Principles -></a></li>
        <!--<li><a href="#">Designing extensions for Shopware -></a></li>-->
        <li><a href="/foundations/accessibility">Accessibility -></a></li>
        <li><a href="/foundations/human-ai-interation">Human-AI interactions -></a></li>
      </ul>
    </div>
    <!--<div>
      <div class="h-label">Product Experience</div>
      <h2 class="h-homepage md:max-w-7/12">Crafting seamless experiences — Explore how we approach cohesive and user-centric solutions.</h2>
      <ul class="SwagExposed_links">
        <li><a href="#">Shopware Design Principles -></a></li>
      </ul>
    </div>-->
    <div class="SwagExposed_subgrid">
      <div>
        <div class="h-label">Brand</div>
        <h2 class="h-homepage">Learn how to apply and adhere to Shopware's visual identity.</h2>
        <ul class="SwagExposed_links">
          <li><a href="https://brand.shopware.com/">Explore our brand -></a></li>
        </ul>
      </div>
      <div>
        <div class="h-label">Content</div>
        <h2 class="h-homepage">Explore our tone of voice and the mechanics of our grammar and style.</h2>
        <ul class="SwagExposed_links">
          <li><a href="product-experience/content/">Explore content guideance -></a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.SwagExposed {
  @apply grid gap-24;
  grid-template-columns: 100%;
  ul.SwagExposed_links {
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
  }
}
h2 {
      border-top: 0px;
    }
</style>

<script setup lang="ts">
</script>