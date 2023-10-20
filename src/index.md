---
sidebar: false
aside: false
page: true
#footer: false
editLink: false
stackOverflowLink: false
prev: false
next: false
---

<script setup>
import SwagLine from "./components/home/SwagLine.vue";
import SwagExposed from "./components/home/SwagExposed.vue";
import SwagResources from "./components/home/SwagResources.vue";
</script>

<!-- HERO -->
<SwagHero class="my-30">
    <template #label>Meteor Design System</template>
    <template #title>Build the exceptional. Open Source. Ecommerce.</template>
    <template #content><p>Shopware, the leading open commerce platform, powers exceptional online stores and thrives with a global community of developers, agencies and merchants. With our API and App-centric approach, we are committed to providing you with the tools and resources needed to create outstanding online stores. Our comprehensive documentation empowers your journey with step-by-step guidance, making everything smoother. Documentation at your service!</p></template>
    <template #links>
    <SwagBtn href="#GetToKnow" class="--primary --sm" icon="long-arrow-right" icon-at="end">Get started</SwagBtn>
    <SwagBtn href="/docs/" class="--primary --subtle --with-border --sm --transparent">View developer docs</SwagBtn>
    </template>
    <template #image><img src="/home/hub-hero-min.png" /></template>
</SwagHero>

<SwagLine />

<SwagExposed class="my-30" />

<SwagResources class="my-30" />
