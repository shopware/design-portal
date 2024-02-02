---
pageClass: p-tokens
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
import SwagTokensHero from "../components/tokens/SwagTokensHero.vue";
import Label from "../components/interaction/Label.vue";
</script>

<SwagTokensHero class="mb-[40px] mt-[40px]">
    <template #label>Design Tokens</template>
    <template #title>Refining our design language.</template>
    <template #content><p>Design Tokens are the heartbeat of our design system. They encapsulate the essential elements of your design language – colors, typography, spacing, and beyond – into a unified, flexible format that speaks directly to both designers and developers. Stay tuned for the unveiling of Design Tokens in Meteor.</p></template>
    
</SwagTokensHero>

<section class="tokens--container md:max-w-12/12 mb-[72px]">
    <div class="design-tokens--container md:max-w-6/12">
        <div class="tokens-content">
        <Label />
            <h2>Design Tokens</h2>
            <div class="tokens-copy">
                <p>Design Tokens are landing in Meteor soon! These tiny pieces of design DNA encode design decisions like colors, typography, spacing, and more, making them reusable and scalable. <span>Available soon.</span></p>
            </div>
        </div>
        <div class="tokens-image">
        <picture>
    <source media="(prefers-color-scheme: dark)" srcset="/tokens/design-tokens-pills@dark.png 2x">
    <img decoding="async" loading="lazy" alt="A sketch of the Accessibility icon. The image is tinted in shades of green." srcset="/tokens/design-tokens-pills.png 2x" src="/tokens/design-tokens-pills.png" width="100%" height="auto">
    </picture>
        </div>
    </div>
    <div class="tokens-pipeline--container md:max-w-6/12">
        <div class="tokens-content">
        <Label />
            <h2>Token Pipeline</h2>
            <div class="tokens-copy">
                <p>We're going to open-source our token pipeline! Soon, sync Design Tokens from Figma to GitHub effortlessly, making your design decisions available across your Shopware projects. Available soon. <span>Available soon.</span></p>
            </div>
            </div>
            <div class="tokens-image">
        <picture>
    <source media="(prefers-color-scheme: dark)" srcset="/tokens/design-sync-tools@dark.png 2x">
    <img decoding="async" loading="lazy" alt="A sketch of the Accessibility icon. The image is tinted in shades of green." srcset="/tokens/design-sync-tools.png 2x" src="/tokens/design-sync-tools.png" width="100%" height="auto">
    </picture>
        </div>
    </div>
</section>




<style lang="scss">
    .tokens--container {
        display: flex;
        align-items: flex-start;
        gap: 24px;
        align-self: stretch;

        .design-tokens--container {
            display: flex;
            padding: 90px 0px 42px 0px;
            flex-direction: column;
            align-items: center;
            gap: 32px;
            flex: 1 0 0;
            align-self: stretch;
            border-radius: 32px;
            border: 1px solid #E4E1FF;
            background: linear-gradient(155deg, #FFF 15.93%, rgba(250, 252, 250, 0.00) 84.78%);

            .tokens-content {
                padding-bottom: 55px;
            }
        }
        .tokens-pipeline--container {
            display: flex;
            padding: 90px 0px 24px 0px;
            flex-direction: column;
            align-items: center;
            gap: 32px;
            flex: 1 0 0;
            align-self: stretch;
            border-radius: 32px;
            border: 1px solid #E4E1FF;
            background: linear-gradient(155deg, #FFF 15.93%, rgba(250, 252, 250, 0.00) 84.78%);
        }

        .tokens-content {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 4px;
                align-self: stretch;
                padding: 0px 32px 8px;

                h2 {
                color: #1E293B;
                text-align: center;
                font-family: Poppins;
                font-size: 28px;
                font-style: normal;
                font-weight: 600;
                line-height: normal;
                letter-spacing: -0.8px;
                }
                .tokens-copy {
                    display: flex;
                    padding-top: 32px;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;

                    p {
                    color: #2D2E32;
                    /* Inter/Desktop/Text/l/Medium */
                    font-family: Inter;
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 140%; /* 28px */

                        span {
                            color: #808392;

                            /* Inter/Desktop/Text/l/Medium */
                            font-family: Inter;
                            font-size: 20px;
                            font-style: normal;
                            font-weight: 500;
                            line-height: 140%;
                        }
                    }
                }
            }
    }
</style>