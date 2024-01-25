---
pageClass: p-home--design
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
import SwagDesignHero from "./components/home/SwagDesignHero.vue";
import SwagExposed from "./components/home/SwagExposed.vue";
import SwagResources from "./components/home/SwagResources.vue";
import LearnMore from "./components/banner/LearnMore.vue";
import TargetGroup from "./components/banner/TargetGroup.vue";
import NPM from "./components/interaction/NPM.vue";
</script>

<!-- HERO -->
<SwagDesignHero class="my-30">
    <template #label>Open-Source</template>
    <template #title>Meteor design system.</template>
    <template #subtitle>Build the extraordinary.</template>
    <template #content><p>Meteor is Shopware’s open-source design system that drives our commerce solutions. Extend and customise every aspect of Shopware – create elegant, delightful, and accessible experiences. There are no limits to your imagination.</p></template>
    <template #links>
    <TargetGroup
    btnlabelleft="For designers."
    pageleft="/getstarted/#designers"
    btnlabelright="For developers."
    pageright="/getstarted/#developers"
    />
    </template>
    <template #image>
    <picture>
    <source media="(prefers-color-scheme: dark)" srcset="/home/design-hero@dark.png 4x">
    <img decoding="async" loading="lazy" alt="A sketch of the Accessibility icon. The image is tinted in shades of green." srcset="/home/design-hero.png 4x" src="/home/design-hero.png" width="100%" height="auto">
    </picture>
    </template>
</SwagDesignHero>

<SwagLine />

<SwagExposed class="my-30" />

<SwagResources class="my-30" />


<!-- TEST @todo move to icon overview, add copy to clipboard function -->
<div class="flex p-0 m-0 mt-5 gap-12 gap-y-4 my-30">
 <SwagBtn href="#" class="--primary developers w-fill-flex h-fit-flex" icon="long-arrow-right" icon-at="end"><SwagIcon icon="figma"/>Open in Figma</SwagBtn> 

  <NPM package="npm i @shopware/meteor-icon-kit"/>
</div>