<template>
  <div class="SwagResources">
    <h2 class="h-homepage">Access our assets</h2>
    <p>At Shopware, Figma is our go-to platform for crafting a seamless design experience. Our Figma libraries and files for administration and storefront, including icon kits and tools, are easily accessible via our Figma community page. Each component is carefully documented with regular updates, ensuring alignment with our evolving platform.</p>
    <div class="SwagResources_grid">

      <a href="https://www.figma.com/@shopware" class="HomepageCard_item">
        <span class="HomepageCard_icon --is-orange">
          <SwagIcon icon="figma" type="solid" />
        </span>
        <span class="HomepageCard_heading">
          Figma libraries
          <SwagIcon icon="long-arrow-right" type="solid" />
        </span>
        <p>Our Figma libraries contains the latest foundations, components, and patterns. You’ll find all of them in our Figma community profile.</p>
      </a>

      <a href="/get-started/" class="HomepageCard_item --has-double-height special">
        <span class="HomepageCard_icon">
          <SwagIcon icon="bold" type="solid" />
        </span>
        <span class="HomepageCard_heading">
          Inter font
          <SwagIcon icon="long-arrow-right" type="solid" />
        </span>
        <p>Meteor requires you to use the Inter font designed by Rasmus Andersson.</p>
      </a>

      <a href="/product-experience/content/basics" class="HomepageCard_item --has-double-height special">
        <span class="HomepageCard_icon">
          <SwagIcon icon="comments" type="solid" />
        </span>
        <span class="HomepageCard_heading">
          Content guide
          <SwagIcon icon="long-arrow-right" type="solid" />
        </span>
        <p>Learn the tone of voice and the common grammar of our software.</p>
      </a>

      <a href="https://brand.shopware.com/document/1#/hi/logo" class="HomepageCard_item">
        <span class="HomepageCard_icon --is-blue">
          <SwagIcon icon="shopware" type="solid" />
        </span>
        <span class="HomepageCard_heading">
          Logo library
          <SwagIcon icon="long-arrow-right" type="solid" />
        </span>
        <p>Learn how to use our logo correctly.</p>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">

.special {
  display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    align-content: flex-end;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 12px;
}
.SwagResources {
  &_grid {
    @apply grid gap-7 md:grid-cols-2 lg:grid-cols-3;
    @media (min-width: 960px) {
      grid-template-columns: 2fr 1fr 1fr;
      gap: 12px;
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
    
    .dark & {
      background: #F88138;
    }
  }
  &.--is-blue {
    background: #189EFF;
    
    .dark & {
      background: #539BF5;
    }
  }
}
</style>
<script setup lang="ts">
</script>