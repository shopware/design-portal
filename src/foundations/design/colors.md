---
title: Colors
sidebar: true
aside: true
page: true
#footer: false
editLink: false
stackOverflowLink: false
prev: false
next: false
swag:
  related: false
---


# {{ $frontmatter.title }}

<div class="flex gap-8 mb-[48px]">
    <div class="md:max-w-1/2">
<picture class="section-thumbnails--image">
<source media="(prefers-color-scheme: dark)" srcset="/foundations/design/colors/shopware-ui.png 2x">

<img class="class" decoding="async" loading="lazy" alt="A sketch of the Accessibility icon. The image is tinted in shades of green." srcset="/foundations/design/colors/shopware-ui.png 2x" src="/foundations/design/colors/shopware-ui.png" width="100%" height="auto">
</picture>
</div>
    <div class="md:max-w-1/2">
        <h3>Clean and simple</h3>
        <p>The Administration and other Shopware services and products use an overall minimalist and clean design, reserving colors only for the most important elements. This allows for good focus with minimal distraction.</p>
</div>
</div>
<div class="flex gap-8 mb-[48px]">
    <div class="md:max-w-1/2">
        <h3>Signal colors</h3>
        <p>Signal colors used in Shopware products follow familiar patterns, making them simple and straightforward. Red is used for critical actions, orange is used to get the users attention, and green is used to highlight positive events.</p>
</div>
    <div class="md:max-w-1/2">
<picture class="section-thumbnails--image">
<source media="(prefers-color-scheme: dark)" srcset="/foundations/design/colors/signal-colors.png 2x">

<img class="class" decoding="async" loading="lazy" alt="A sketch of the Accessibility icon. The image is tinted in shades of green." srcset="/foundations/design/colors/signal-colors.png 2x" src="/foundations/design/colors/signal-colors.png" width="100%" height="auto">
</picture>
</div>
</div>
<div class="flex gap-8 mb-[48px]">
    <div class="md:max-w-1/2">
<picture class="section-thumbnails--image">
<source media="(prefers-color-scheme: dark)" srcset="/foundations/design/colors/primary-color.png 2x">

<img class="class" decoding="async" loading="lazy" alt="A sketch of the Accessibility icon. The image is tinted in shades of green." srcset="/foundations/design/colors/primary-color.png 2x" src="/foundations/design/colors/primary-color.png" width="100%" height="auto">
</picture>
</div>
    <div class="md:max-w-1/2">
        <h3>Primary color</h3>
        <p>Blue is the main color used for primary actions such as Save, Next, or Install. We also use it to indicate checked states for checkboxes, radio buttons, and buttons. Lists and tabs also follow a similar blue flow with a light blue hover effect.</p>
</div>
</div>

<style scoped lang="scss">
/* Card Thumbnail */
a.section-thumbnails {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    align-self: stretch;
    
    &--card {
        display: flex;
        padding: 20px;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
        flex: 1 0 0;
        align-self: stretch;
        border-radius: 12px;
        border: 1px solid #F0F3FF;
        background: #FAFBFE;
        .dark & {
        filter: invert(1) hue-rotate(-180deg);
    }

        h3 {
            color: #0A0D0F;
            font-family: Inter;
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
        }

        p {
            color: #64748B;
            font-family: Inter;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 26px; /* 162.5% */
            letter-spacing: 0.08px;
            margin: 0px;
        }
        
        &--image {
            align-self: stretch;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 16px;
            z-index: 2;
        }
    }
    .section-thumbnails {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    align-self: stretch;
    }
}
</style>