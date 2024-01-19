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
import LearnMore from "./components/banner/LearnMore.vue";
</script>

<!-- HERO -->
<SwagHero class="my-30">
    <template #label>Meteor Design System</template>
    <template #title>Build the exceptional. Open Source. Ecommerce.</template>
    <template #content><p>Meteor is Shopware’s open source design system – The Shopware Design Language builds it’s foundation, the system helps us create elegant, delightful, and accessible personal experiences that empower and inspire all of Shopware's merchants and shoppers.</p></template>
    <template #links>
    <SwagBtn href="/get-started/" class="--primary --sm" icon="long-arrow-right" icon-at="end">Get started</SwagBtn>
    <SwagBtn href="/what-is-new.html" class="--primary --subtle --with-border --sm --transparent">See what's new</SwagBtn>
    </template>
    <template #image><img src="/home/hub-hero-min.png" /></template>
</SwagHero>

<SwagLine />

<SwagExposed class="my-30" />

<LearnMore
    title="Accessibility made simple"
    copy="Everything you need to know to eliminate barriers for your users and meet new regulatory requirements."
    btnlabel="Learn more"
    page="/foundations/accessibility"
/>

<SwagResources class="my-30" />

