<template>
  <div class="SwagResources">
    <div class="h-label">Resources</div>
    <h2 class="h-homepage">Browse our resources to get started designing with Shopware.</h2>
    <div class="SwagResources_grid">

      <a href="/themes.html" class="HomepageCard_item">
        <span class="HomepageCard_icon --is-orange">
          <SwagIcon icon="figma" type="solid" />
        </span>
        <span class="HomepageCard_heading">
          Figma libraries
          <SwagIcon icon="long-arrow-right" type="solid" />
        </span>
        <p>Our Figma libraries contains the latest foundations, components, and patterns. You’ll find all of them in our Figma community profile.</p>
      </a>

      <a href="/themes.html" class="HomepageCard_item --has-double-height">
        <span class="HomepageCard_icon">
          <SwagIcon icon="bold" type="solid" />
        </span>
        <span class="HomepageCard_heading">
          Fonts
          <SwagIcon icon="long-arrow-right" type="solid" />
        </span>
        <p>To use our admin and storefront libraries you’ll also need the Inter font designed by Rasmus Andersson. Get your copy over at Google fonts.</p>
      </a>

      <a href="/themes.html" class="HomepageCard_item --has-double-height">
        <span class="HomepageCard_icon">
          <SwagIcon icon="comments" type="solid" />
        </span>
        <span class="HomepageCard_heading">
          Language and grammar
          <SwagIcon icon="long-arrow-right" type="solid" />
        </span>
        <p>Learn the tone of voice and the common grammar of our software.</p>
      </a>

      <a href="/themes.html" class="HomepageCard_item">
        <span class="HomepageCard_icon --is-blue">
          <SwagIcon icon="shopware" type="solid" />
        </span>
        <span class="HomepageCard_heading">
          Logo library
          <SwagIcon icon="long-arrow-right" type="solid" />
        </span>
        <p>Some text about our logo library.</p>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
.SwagResources {
  &_grid {
    @apply grid gap-7 md:grid-cols-2 lg:grid-cols-3;
    @media (min-width: 960px) {
      grid-template-columns: 2fr 1fr 1fr;
    }
  }

  .--has-double-height {
    @media (min-width: 960px) {
      @apply row-span-2;
    }
  }
}
.HomepageCard_icon {
  &.--is-orange {
    background: #E89069;
  }
  &.--is-blue {
    background: #189EFF;
  }
}
</style>
<script setup lang="ts">
</script>