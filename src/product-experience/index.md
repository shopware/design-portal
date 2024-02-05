---
sidebar: true
aside: false
page: true
#footer: false
editLink: false
stackOverflowLink: false
prev: false
next: false
swag:
  related: false
---

# Product Experience

## Content Guideance

<div class="flex gap-8 section-thumbnails mb-[42px] md:max-w-12/12">
    <a href="content/index" class="section-thumbnails--card md:max-w-1/3">
<picture class="section-thumbnails--image">
<source media="(prefers-color-scheme: dark)" srcset="/product-experience/content-experience-intro@dark.png 4x">

<img class="class" decoding="async" loading="lazy" alt="A sketch of the Accessibility icon. The image is tinted in shades of green." srcset="/product-experience/content-experience-intro.png 4x" src="/product-experience/content-experience-intro.png" width="100%" height="auto">
</picture>
        <h3>Content Experience</h3>
        <p>Understand the topic you’re writing about. Use simple words and sentences.</p>
</a>
   <a href="content/inclusive-language" class="section-thumbnails--card md:max-w-1/3">
<picture class="section-thumbnails--image">
<source media="(prefers-color-scheme: dark)" srcset="/product-experience/inclusive-language-intro@dark.png 4x">

<img class="class" decoding="async" loading="lazy" alt="A sketch of the Accessibility icon. The image is tinted in shades of green." srcset="/product-experience/inclusive-language-intro.png 4x" src="/product-experience/inclusive-language-intro.png" width="100%" height="auto">
</picture>
        <h3>Inclusive Language</h3>
        <p>Before you start writing, ask yourself: What purpose does this serve? Who is going to read it? What do they need to know?</p>
</a>

<a href="content/abbreviations-and-acronyms" class="section-thumbnails--card md:max-w-1/3">
<picture class="section-thumbnails--image">
<source media="(prefers-color-scheme: dark)" srcset="/product-experience/section-thumbnails-useful@dark.png 4x">

<img class="class" decoding="async" loading="lazy" alt="A sketch of the Accessibility icon. The image is tinted in shades of green." srcset="/product-experience/section-thumbnails-useful.png 4x" src="/product-experience/section-thumbnails-useful.png" width="100%" height="auto">
</picture>
        <h3>Abbreviations and acronyms</h3>
        <p>Before you start writing, ask yourself: What purpose does this serve? Who is going to read it? What do they need to know?</p>
</a>
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