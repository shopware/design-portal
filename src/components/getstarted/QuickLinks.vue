<template>
  <div class="QuickLinks">
    <h2 class="h-homepage">Quick Links</h2>
    <p>Get started quickly with these essential resources and guides to help you make the most of Meteor Design System.</p>
    <div class="QuickLinks_grid">

      <a href="/get-started/installation" class="HomepageCard_item">
        <span class="HomepageCard_icon --is-green">
          <SwagIcon icon="download" type="solid" />
        </span>
        <span class="HomepageCard_heading">
          Installation Guide
          <SwagIcon icon="long-arrow-right" type="solid" />
        </span>
        <p>Step-by-step instructions for setting up Meteor in your project with all required dependencies.</p>
      </a>

      <a href="/get-started/migration" class="HomepageCard_item">
        <span class="HomepageCard_icon --is-purple">
          <SwagIcon icon="refresh" type="solid" />
        </span>
        <span class="HomepageCard_heading">
          Migration Guide
          <SwagIcon icon="long-arrow-right" type="solid" />
        </span>
        <p>Migrate from legacy components to Meteor with automated tools and best practices.</p>
      </a>

      <a href="/get-started/faq" class="HomepageCard_item">
        <span class="HomepageCard_icon --is-blue">
          <SwagIcon icon="help-circle" type="solid" />
        </span>
        <span class="HomepageCard_heading">
          FAQ
          <SwagIcon icon="long-arrow-right" type="solid" />
        </span>
        <p>Common questions and troubleshooting tips for development and implementation issues.</p>
      </a>

      <a href="/get-started/meteor-101" class="HomepageCard_item">
        <span class="HomepageCard_icon --is-orange">
          <SwagIcon icon="graduation-cap" type="solid" />
        </span>
        <span class="HomepageCard_heading">
          Meteor 101
          <SwagIcon icon="long-arrow-right" type="solid" />
        </span>
        <p>Learn the basics of Meteor Design System, its mission, and key features.</p>
      </a>



    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.QuickLinks {
  &_grid {
    display: grid;
    gap: 1.75rem;
    grid-template-columns: 1fr;
    
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @media (min-width: 960px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.75rem;
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
    background: #0EA5E9;
    
    .dark & {
      background: #38BDF8;
    }
  }

  &.--is-green {
    background: #10B981;
    
    .dark & {
      background: #34D399;
    }
  }

  &.--is-purple {
    background: #8B5CF6;
    
    .dark & {
      background: #A78BFA;
    }
  }
}
</style>
