---
pageClass: careers
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
import SwagTeam from "../components/team/SwagTeam.vue";
import SwagTeamHero from "../components/team/SwagTeamHero.vue";
import SwagTeamValuesMarquee from "../components/team/SwagTeamValuesMarquee.vue";
</script>

<!-- HERO -->
<SwagTeamHero class="my-30">
    <template #label>Our Crew</template>
    <template #title>Innovators. Rebels. Thinkers. Creators.</template>
    <template #content><p>At Shopware, we're not just a design team – we're a crew of passionate individuals driven by innovation, rebellion, deep thinking, and creativity. We are united by a common passion for pushing boundaries and redefining the norm of commerce.</p></template>
    <template #image>
    <picture>
    <source media="(prefers-color-scheme: dark)" srcset="../home/design-hero@dark.png 4x">
    <img decoding="async" loading="lazy" alt="A sketch of the Accessibility icon. The image is tinted in shades of green." srcset="../home/design-hero.png 4x" src="../home/design-hero.png" width="100%" height="auto">
    </picture>
    </template>
</SwagTeamHero>
<div style="margin-top:238px;"></div>

<SwagTeam />


<div class="m-40 md:max-w-6/12">
  <div class="h-label">Design. Slay. Repeat.</div>
  <h2 class="h-homepage md:max-w-7/12">What we do.</h2>
  <p>
  At Shopware, our team values form the cornerstone of our approach. We prioritize collaboration, innovation, and user-centricity in everything we do. Integrity, inclusivity, and continuous improvement drive us to create exceptional designs that deliver value and inspire meaningful connections with our users.
  </p>
</div>
<div class="my-30">
  <SwagTeamValuesMarquee/>
</div>

<div class="m-40 md:max-w-6/12">
<div class="h-label">Our values</div>
<h2 class="h-homepage md:max-w-7/12">Delivering our values through design.</h2>
<p>
At Shopware, our team values form the cornerstone of our approach. We prioritize collaboration, innovation, and user-centricity in everything we do. Integrity, inclusivity, and continuous improvement drive us to create exceptional designs that deliver value and inspire meaningful connections with our users.
</p>
</div>

