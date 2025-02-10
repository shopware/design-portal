---
pageClass: p-tokens
sidebar: true
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
    <template #label>All Components</template>
    <template #title>Meteor UI Components</template>
    <template #content><p>Explore our library of UI components — everything you need to kickstart development for your next project. <span class="soon-a">Available soon.</span></p></template>

</SwagTokensHero>
<div class="flex p-0 m-0 mt-5 gap-12 gap-y-4 my-30 md:max-w-3/6">
<SwagBtn href="https://www.figma.com/community/file/1032569283566168066/meteor-admin-foundations-shopware" class="--contrast" icon="long-arrow-right" icon-at="end"><SwagIcon icon="figma" type="solid"/>Preview in Figma</SwagBtn>
<SwagBtn href="https://github.com/shopware/meteor" class="--contrast" icon="long-arrow-right" icon-at="end"><SwagIcon icon="github" type="solid"/>Preview on GitHub</SwagBtn>
</div>

<section class="tokens--container md:max-w-12/12 mb-[72px]">
    <div class="design-tokens--container md:max-w-6/12">
        <div class="tokens-content">
        <Label><template #label>Soon</template></Label />
            <h2>Component Documentation</h2>
            <div class="tokens-copy">
                <p>Dive into comprehensive documentation for each of our ready-to-use UI components. Get ready to boost your projects with our straightforward UI guides covering everything from accessibility to dos and don'ts, and property definitions. <span>Available soon.</span></p>
            </div>
        </div>
    </div>
    <div class="tokens-pipeline--container md:max-w-6/12">
        <div class="tokens-content">
        <Label><template #label>Soon</template></Label />
            <h2>Copy. Paste. Commit.</h2>
            <div class="tokens-copy">
                <p>Meteor offers ready-to-use code snippets for <strong>60+</strong> UI components, designed for easy integration into your projects. From buttons to switches, get everything you need to enhance your extension's interface with a simple copy and paste. <span>Available soon.</span></p>
            </div>
            </div>
    </div>
</section>




<style lang="scss">
    span.soon-a {
        color: #808392;

        /* Inter/Desktop/Text/l/Medium */
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;
    }
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
            .dark & {
            background: linear-gradient(155deg, #1A1F26 15.93%, #1A1F26 84.78%);
            border: 1px solid #12141E;
         }

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
            .dark & {
            background: linear-gradient(155deg, #1A1F26 15.93%, #1A1F26 84.78%);
            border: 1px solid #12141E;
         }
        }

        .tokens-content {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 4px;
                align-self: stretch;
                padding: 0px 32px 8px;
                .dark & {
                    filter: invert(1) hue-rotate(-180deg);
                }

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