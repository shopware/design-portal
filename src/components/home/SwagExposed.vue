<template>
  <div class="SwagExposed">
    <div>
      <div class="h-label">Guides</div>
      <h2 class="h-homepage md:max-w-1/2">Check out these practical guides to help you understand how to design for
        Shopware</h2>
      <ul class="SwagExposed_links">
        <li><a href="#">Shopware Design Principles</a></li>
        <li><a href="#">Designing extensions for Shopware</a></li>
        <li><a href="#">Accessibility</a></li>
        <li><a href="#">Human-AI interactions</a></li>
      </ul>
    </div>
    <div>
      <div class="h-label">Product Experience</div>
      <h2 class="h-homepage md:max-w-1/2">We empower you to build the exceptional - Our Design System makes UX and UI
        easily accessible</h2>
      <ul class="SwagExposed_links">
        <li><a href="#">Shopware Design Principles</a></li>
      </ul>
    </div>
    <div class="SwagExposed_subgrid">
      <div>
        <div class="h-label">Brand</div>
        <h2 class="h-homepage">Learn how to apply and adhere to Shopware's visual identity</h2>
        <ul class="SwagExposed_links">
          <li><a href="#">Explore our brand</a></li>
        </ul>
      </div>
      <div>
        <div class="h-label">Content</div>
        <h2 class="h-homepage">Explore our tone of voice and the mechanics of our grammar and style</h2>
        <ul class="SwagExposed_links">
          <li><a href="#">Explore content guideance</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.SwagExposed {
  @apply grid gap-24;
  ul.SwagExposed_links {
    @apply flex p-0 m-0 mt-6 gap-12;
    list-style-type: none;

    li {
      @apply p-0 m-0;
      & + li {
        @apply mt-0;
      }
    }
  }

  &_subgrid {
    @apply grid gap-20 md:grid-cols-2;
  }
}
</style>

<script setup lang="ts">
</script>