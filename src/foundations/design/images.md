---
title: Images
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

## How we export images

Exporting images for our products or platforms like <a href="https://shopware.com">shopware.com</a> requires special attention to detail.
This guide outlines the process for exporting images and optimizing them to meet Shopware's standards.

<div class="flex gap-8 section-thumbnails mb-[12px]">
    <div class="section-thumbnails--card  md:max-w-1/2">
<picture class="section-thumbnails--image">
<source media="(prefers-color-scheme: dark)" srcset="/foundations/design/images/foundations-images--export@dark.png 4x">

<img decoding="async" loading="lazy" alt="A sketch of the Accessibility icon. The image is tinted in shades of green." srcset="/foundations/design/images/foundations-images--export.png 4x" src="/foundations/design/images/foundations-images--export.png" width="100%" height="auto">
</picture>

### Export settings
<p>We export all vectors at <code>4x</code>, resulting in 4k resolution. For some of our platforms and products, we also export adjusted darkmode assets and append the suffix <code>@dark</code> to the filename.</p>

::: tip Export for motion
For TV, video content and slide decks we export assets in <code>8x</code> (8k resolution).
:::

</div>
    <div class="section-thumbnails--card  md:max-w-1/2">
<picture class="section-thumbnails--image">
<source media="(prefers-color-scheme: dark)" srcset="/foundations/design/images/foundations-images--photoshop@dark.png 2x">

<img decoding="async" loading="lazy" alt="A sketch of the Accessibility icon. The image is tinted in shades of green." srcset="/foundations/design/images/foundations-images--photoshop.png 2x" src="/foundations/design/images/foundations-images--photoshop.png" width="100%" height="auto">
</picture>

### Optimise assets
<p>To optimise assets for our products and platforms we aim to reduce file size while preserving at least <code>90%+</code> of the original quality.</p><p> To add the "Shopware-look" to assets, open your exported assets in <code>Photoshop</code>.</p>
</div>
</div>

<div class="flex gap-8 section-thumbnails mb-[12px]">
    <div class="section-thumbnails--card  md:max-w-1/2">
<picture class="section-thumbnails--image">
<source media="(prefers-color-scheme: dark)" srcset="/foundations/design/images/foundations-images--smart@dark.png 2x">

<img decoding="async" loading="lazy" alt="A sketch of the Accessibility icon. The image is tinted in shades of green." srcset="/foundations/design/images/foundations-images--smart.png 2x" src="/foundations/design/images/foundations-images--smart.png" width="100%" height="auto">
</picture>

### Smart object
<p>Through the Layers panel, convert your asset into a Smart Object. This step is crucial for preserving quality during further modifications.</p>
        
</div>
    <div class="section-thumbnails--card  md:max-w-1/2">
<picture class="section-thumbnails--image">
<source media="(prefers-color-scheme: dark)" srcset="/foundations/design/images/foundations-images--size@dark.png 2x">

<img decoding="async" loading="lazy" alt="A sketch of the Accessibility icon. The image is tinted in shades of green." srcset="/foundations/design/images/foundations-images--size.png 2x" src="/foundations/design/images/foundations-images--size.png" width="100%" height="auto">
</picture>

### Resize
<p>Change the image size and use <code>/2</code>. Open this panel with <code>CMD + Option + I</code> on MacOS.</p>

::: tip Higher resolution
If your asset was exported in <code>8x</code>, resize by <code>/4</code> in Photoshop.
:::

</div>
</div>
<div class="flex gap-8 section-thumbnails mb-[12px]">
    <div class="section-thumbnails--card  md:max-w-1/2">
<picture class="section-thumbnails--image">
<source media="(prefers-color-scheme: dark)" srcset="/foundations/design/images/foundations-images--merge@dark.png 2x">

<img decoding="async" loading="lazy" alt="A sketch of the Accessibility icon. The image is tinted in shades of green." srcset="/foundations/design/images/foundations-images--merge.png 2x" src="/foundations/design/images/foundations-images--merge.png" width="100%" height="auto">
</picture>

### Merge
<p>Duplicate the layer and merge both layers. This enhances the crispness of your asset.</p>
        
</div>
    <div class="section-thumbnails--card  md:max-w-1/2">
<picture class="section-thumbnails--image">
<source media="(prefers-color-scheme: dark)" srcset="/foundations/design/images/foundations-images--grain@dark.png 2x">

<img decoding="async" loading="lazy" alt="A sketch of the Accessibility icon. The image is tinted in shades of green." srcset="/foundations/design/images/foundations-images--grain.png 2x" src="/foundations/design/images/foundations-images--grain.png" width="100%" height="auto">
</picture>

### Add noise ✨
<p>Open <code>Filter</code>, and add <code>Noise</code>. Ensure you select <code>Gaussian</code> and <code>Monochromatic</code>. At Shopware, we add <code>0,6</code> noise.</p>

::: tip Noise
Adding noise to assets makes them look sharp and clear and adds a subtle haptic effect, as we aim for a premium vibe.
:::

</div>
</div>

<style lang="scss">
/* Card Thumbnail */
  .section-thumbnails {
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

        h3 {
            color: #0A0D0F;
            font-family: Inter;
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            margin-top: 8px;
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
}
</style>