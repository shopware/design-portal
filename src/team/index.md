---
pageClass: p-careers
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
import SwagFigmaCursor from "../components/team/SwagFigmaCursor.vue";
import SwagTeamValuesMarquee from "../components/team/SwagTeamValuesMarquee.vue";
</script>

<!-- HERO -->
<SwagTeamHero class="my-8 md:my-16 lg:my-30">
    <template #label>Our Crew</template>
    <template #title>Innovators. Rebels. Thinkers. Creators.</template>
    <template #content><p>At Shopware, we're not just a design team – we're a crew of passionate individuals driven by innovation, rebellion, deep thinking, and creativity. We are united by a common passion for pushing boundaries and redefining the norm of commerce.</p></template>
    <template #image>
    <picture>
    <source media="(prefers-color-scheme: dark)" srcset="/careers/sticker.png 4x">
    <img class="sticker w-full max-w-[200px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[410px] h-auto ml-0 sm:ml-[8%] md:ml-[10%] lg:ml-[12%]" decoding="async" loading="lazy" alt="A sketch of the Accessibility icon. The image is tinted in shades of green." srcset="/careers/sticker.png 4x" src="/careers/sticker.png">
    </picture>
    </template>
</SwagTeamHero>

<!-- TEAM OVERVIEW -->
<section class="mt-16 sm:mt-24 md:mt-32 lg:mt-40 mb-16 sm:mb-24 md:mb-32">
  <SwagTeam />
</section>

<!-- WHAT WE DO -->
<section class="mb-16 sm:mb-24 md:mb-32">
  <div class="mb-[40px] md:max-w-6/12">
    <div class="h-label">Design. Slay. Repeat.</div>
    <h2 class="h-homepage md:max-w-7/12">What we do.</h2>
    <p>
    At Shopware, our team values form the cornerstone of our approach. We prioritize collaboration, innovation, and user-centricity in everything we do. Integrity, inclusivity, and continuous improvement drive us to create exceptional designs that deliver value and inspire meaningful connections with our users.
    </p>
  </div>
  
  <div class="my-16">
    <SwagTeamValuesMarquee/>
  </div>
</section>

<!-- HOW WE THINK -->
<section class="mb-16 sm:mb-24 md:mb-32">
  <div class="md:max-w-8/12">
    <div class="h-label">Philosophy. Principles. Purpose.</div>
    <h2 class="h-homepage md:max-w-9/12">How we think about design.</h2>
    <p class="mb-6">
    Our design principles guide every decision we make. From accessibility and inclusivity to ethical design practices – these foundations shape how we build products that put people and the planet first.
    </p>
    <p>
      <a href="/foundations/">Explore our design principles →</a>
    </p>
  </div>
</section>

<!-- JOIN US CTA -->
<section class="join-us relative flex flex-col p-4 sm:p-6 md:p-8 lg:p-16 mb-16 sm:mb-20 md:mb-24 lg:mb-32 rounded-2xl lg:rounded-[32px] border border-slate-100 bg-gradient-to-br from-slate-50 to-transparent cursor-you overflow-hidden dark:border-slate-800 dark:from-slate-900 dark:to-transparent">
  <div class="left-join w-full lg:w-1/2 relative z-20 mb-8 lg:mb-0 lg:pr-8">
    <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-[28px] font-semibold lg:font-semibold leading-tight lg:leading-[44px] tracking-tight lg:tracking-[-0.8px] mb-4 lg:mb-6 text-slate-900 dark:text-slate-100">
      Designed in Schöppingen.<br> 
      <span class="text-slate-600 dark:text-slate-400 font-medium">And Frankfurt. Münster. <br class="hidden sm:block">New York. Da Nang. <br class="hidden sm:block">Cologne.</span>
    </h2>
    <div class="space-y-4 lg:space-y-6 mb-6 lg:mb-8">
      <p class="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-slate-800 dark:text-slate-200">
        As a remote team, we embrace the idea that creativity knows no boundaries and flourishes in the diverse landscapes of inspiration. 
        <span class="text-slate-600 dark:text-slate-400">Here, distance is not a limitation, but a canvas for innovation.</span>
      </p>
      <p class="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-slate-800 dark:text-slate-200">
        <span class="text-slate-600 dark:text-slate-400">From bustling urban environments to serene natural landscapes, our diverse work locations enrich our creativity.</span>
      </p>
    </div>
    <SwagBtn href="https://www.shopware.com/de/jobs/#open-positions" class="--contrast" icon="long-arrow-right" icon-at="end">See open positions</SwagBtn>
  </div>
  <div class="hidden sm:block absolute inset-0 z-30 pointer-events-none">
    <SwagFigmaCursor/>
  </div>
  <div class="figma--interface hidden lg:block absolute bottom-0 right-0 w-1/2 max-w-[610px] z-10">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="/careers/figma@dark.png">
      <img class="w-full h-auto rounded-bl-[32px]" decoding="async" loading="lazy" alt="The image shows a sketch of Figma's UI." srcset="/careers/figma.png" src="/careers/figma.png">
    </picture>
  </div>
</section>

  <style scoped lang="scss">
    .sticker {
      @apply block;
    }
    
    .figma--interface {
      img {
        // Remove the filter invert, let the picture element handle dark mode
      }
    }
    
    .join-us {
      // Remove the filter invert, use proper dark mode classes instead
    }
  </style>