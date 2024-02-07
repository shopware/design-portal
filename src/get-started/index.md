---
pageClass: p-landing-768
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
import HowToIntegrateInter from "../components/getstarted/HowToIntegrateInter.vue";
import Contribute from "../components/banner/Contribute.vue";
import Cutdown from "../components/banner/Cutdown.vue";
import NPM from "../components/interaction/NPM.vue";
</script>

<!-- HERO -->
# Get started
<div class="Tabs_Design--custom">
<Tabs>
  <Tab title="For designers" id="designers" icon="image">
  <div class="mt-[20px] mb-[20px]">
  <h2 class="h-homepage">Get started with Meteor for Figma</h2>
  <p>
  Meteor is Shopware’s open source design system – It is the basis of the Shopware Design Language, manifested in a unified system of components, styles, visuals and guidelines. It is therefore, the foundation for all of Shopware’s products. It helps us work together more efficiently and provides a unified process across teams to build empowering and delightful experiences for everyone.
  </p>
  <picture>
  <source media="(prefers-color-scheme: dark)" srcset="/foundations/getstarted/foundations-getstarted-intro@dark.png 4x">

  <img decoding="async" loading="lazy" alt="A sketch of the Accessibility icon. The image is tinted in shades of green." srcset="/foundations/getstarted/foundations-getstarted-intro.png 4x" src="/foundations/getstarted/foundations-getstarted-intro.png" width="100%" height="auto">
  </picture>



  <div class="mt-[40px] mb-[40px]">
  <h2 class="h-homepage md:max-w-7/12">Learn about Meteor</h2>
  <p>
  Discover our comprehensive guidelines designed to foster user-centricity and innovation. Our guidelines encapsulate best practices, ensuring seamless collaboration and empowering our team to create inclusive, accessible, and impactful design solutions.
  </p>
  <SwagBtn href="/foundations/" class="--primary --sm" icon="long-arrow-right" icon-at="end">Learn more</SwagBtn>
  </div>

  <SwagResourcesGetStarted class="mt-[40px] mb-[40px]" />

  <HowToIntegrateResources class="mt-[40px] mb-[40px]" />
  <HowToIntegrateInter class="mt-[40px] mb-[40px]" />
  
  </div>
  </Tab>
  <Tab title="For developers" id="developers" icon="code">
  <div class="mt-[20px] mb-[20px]">
  <h2 class="h-homepage">Get started with Meteor components</h2>
  <p>
  Add the Meteor component package to your project.
  </p>
    <div class="flex p-0 m-0 gap-12 gap-y-4">
      <NPM package="npm i @shopware-ag/meteor-component-library"/>
    </div>
  <p>Import the <code>style.css</code> for general styling like fonts, etc. in the root file of your application or in your root styling file.</p>
  <div class="flex p-0 m-0 gap-12 gap-y-4">
      <NPM package="import '@shopware-ag/meteor-component-library/dist/style.css';"/>
    </div>

  <h2 class="h-homepage mt-[20px] mb-[20px]">Meteor Icon Kit</h2>
  <p>
  To also use the Icon Kit, add the package to your project.
  </p>
    <div class="flex p-0 m-0 gap-12 gap-y-4">
      <NPM package="npm i @shopware-ag/meteor-icon-kit"/>
    </div>
  </div>
  </Tab>

</Tabs>
</div>
<div class="mt-[20px]">
  <h2 class="h-homepage md:max-w-7/12">Meteor’s mission</h2>
  <p>
  Meteor serves as the bedrock for all of Shopware's products, a unified system encompassing components, styles, visuals, and guidelines. It helps us work together more efficiently and provides a unified process across teams. This collective approach ensures the creation of empowering and delightful experiences for all merchants within the Shopware ecosystem.
  </p>
</div>

<Contribute
title="Be part of Meteor"
copy="We believe in Open-Source software – we listen to our Community and build Meteor in collaboration with merchants. The best and brightest ideas come from you. If you wish to contribute to the Meteor Design System, please read our contributing guidelines for a smooth start."
btn="true"
page="/foundations/contibutions"
/>

