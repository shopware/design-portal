---
title: Get started
pageClass: landing-768
sidebar: false
aside: false
page: true
#footer: false
editLink: false
stackOverflowLink: false
prev: false
next: false
swag:
  related: false
---

<script setup>
import SwagResourcesGetStarted from "../components/home/SwagResourcesGetStarted.vue";
import HowToIntegrateResources from "../components/getstarted/HowToIntegrateResources.vue";
</script>

<!-- HERO -->
# {{ $frontmatter.title }}

<div class="m-40">
<h2 class="h-homepage">Get started with the Meteor Design System ☄️</h2>
    <p>
    Meteor is Shopware’s open source design system – It is the basis of the Shopware Design Language, manifested in a unified system of components, styles, visuals and guidelines. It is therefore, the foundation for all of Shopware’s products. It helps us work together more efficiently and provides a unified process across teams to build empowering and delightful experiences for everyone.
    </p>
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="../foundations/getstarted/foundations-getstarted-intro@dark.png 4x">

  <img decoding="async" loading="lazy" alt="A sketch of the Accessibility icon. The image is tinted in shades of green." srcset="../foundations/getstarted/foundations-getstarted-intro.png 4x" src="../foundations/getstarted/foundations-getstarted-intro.png" width="100%" height="auto">
  </picture>



  <div class="m-40">
    <h2 class="h-homepage md:max-w-7/12">Learn about our Guidelines</h2>
    <p>
    Discover our comprehensive guidelines designed to foster user-centricity and innovation. Our guidelines encapsulate best practices, ensuring seamless collaboration and empowering our team to create inclusive, accessible, and impactful design solutions.
    </p>
    <SwagBtn href="/foundations/" class="--primary --sm" icon="long-arrow-right" icon-at="end">Learn more</SwagBtn>
  </div>

  <SwagResourcesGetStarted class="m-40" />

  <HowToIntegrateResources class="m-40" />

<div class="m-40">
  <h2 class="h-homepage md:max-w-7/12">Meteor’s mission</h2>
  <p>
    Meteor serves as the bedrock for all of Shopware's products, a unified system encompassing components, styles, visuals, and guidelines. It helps us work together more efficiently and provides a unified process across teams. This collective approach ensures the creation of empowering and delightful experiences for all merchants within the Shopware ecosystem.
  </p>
</div>
</div>
  

