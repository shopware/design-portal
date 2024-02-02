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
<SwagTeamHero class="my-30">
    <template #label>Our Crew</template>
    <template #title>Innovators. Rebels. Thinkers. Creators.</template>
    <template #content><p>At Shopware, we're not just a design team – we're a crew of passionate individuals driven by innovation, rebellion, deep thinking, and creativity. We are united by a common passion for pushing boundaries and redefining the norm of commerce.</p></template>
    <template #image>
    <picture>
    <source media="(prefers-color-scheme: dark)" srcset="/home/design-hero@dark.png 4x">
    <img decoding="async" loading="lazy" alt="A sketch of the Accessibility icon. The image is tinted in shades of green." srcset="/home/design-hero.png 4x" src="/home/design-hero.png" width="100%" height="auto">
    </picture>
    </template>
</SwagTeamHero>
<div style="margin-top:238px;"></div>

<SwagTeam />


<!--<div class="mt-[40px] mb-[40px] md:max-w-6/12">
  <div class="h-label">Design. Slay. Repeat.</div>
  <h2 class="h-homepage md:max-w-7/12">What we do.</h2>
  <p>
  At Shopware, our team values form the cornerstone of our approach. We prioritize collaboration, innovation, and user-centricity in everything we do. Integrity, inclusivity, and continuous improvement drive us to create exceptional designs that deliver value and inspire meaningful connections with our users.
  </p>
</div>
<div class="my-30">
  <SwagTeamValuesMarquee/>
</div>



<div class="mt-[40px] mb-[40px] md:max-w-6/12">
<div class="h-label">Our values</div>
<h2 class="h-homepage md:max-w-7/12">Delivering our values through design.</h2>
<p>
At Shopware, our team values form the cornerstone of our approach. We prioritize collaboration, innovation, and user-centricity in everything we do. Integrity, inclusivity, and continuous improvement drive us to create exceptional designs that deliver value and inspire meaningful connections with our users.
</p>
</div>-->

<section class="join-us mt-[40px] mb-[40px] md:max-w-12/12 cursor-you">
  <div class="left-join md:max-w-6/12">
    <h2>Designed in Schöppingen.<br> <span>And Frankfurt. Münster. <br>New York. Da Nang. <br>Cologne.</span></h2>
    <p>As a remote team, we embrace the idea that creativity knows no boundaries and flourishes in the diverse landscapes of inspiration. <span>Here, distance is not a limitation, but a canvas for innovation.</span></p>
    <p><span>From bustling urban environments to serene natural landscapes, our diverse work locations enrich our creativity.</span></p>
    <SwagBtn href="https://www.shopware.com/de/jobs/#open-positions" class="--contrast" icon="long-arrow-right" icon-at="end">See open positions</SwagBtn>
  </div>
  <SwagFigmaCursor/>
</section>

  <style lang="scss">
    .join-us {
      display: flex;
      padding: 16px 0px;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
      align-self: stretch;
      border-radius: 32px;
      border: 1px solid var(--slate-100, #F0F3FF);
      background: linear-gradient(155deg, #FAFBFE 15.93%, rgba(250, 252, 250, 0.00) 84.78%);
      position: relative;
      .dark & {
        filter: invert(1) hue-rotate(-180deg);
    }
    }
    .left-join {
        padding: 64px 72px;
        align-items: center;
        gap: 93px;
        
        h2 {
        color: var(--c-text);
        font-family: Poppins;
        font-size: 28px;
        font-style: normal;
        font-weight: 600;
        line-height: 44px; /* 157.143% */
        letter-spacing: -0.8px;
        width: 100%;
        text-wrap: pretty;
        
        span {
          color: var(--slate-600, #808392);
          font-family: Poppins;
          font-size: 28px;
          font-style: normal;
          font-weight: 500;
          line-height: 44px;
          letter-spacing: -0.8px;
        }
      }
      p {
          color: #2D2E32;

          /* Inter/Desktop/Text/l/Medium */
          font-family: Inter;
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: 140%; /* 28px */
          margin-bottom: 24px;

          span {
            color: var(--slate-600, #808392);

            /* Inter/Desktop/Text/l/Medium */
            font-family: Inter;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 140%;
          }
        }
      }    
  </style>