---
pageClass: p-tokens
sidebar: true
aside: true
page: true
#footer: false
editLink: false
stackOverflowLink: false
prev: false
next: false
---

<script setup lang="ts">
import SwagTokensFontPreview from '../components/tokens/SwagTokensFontPreview.vue';
import SwagCopyButton from '../components/tokens/SwagCopyButton.vue'
</script>

# Font

## Size

Define scalable and consistent text sizes to ensure readability and typographic hierarchy.

| Value                                        | Description                 | Token Name                                     |
| -------------------------------------------- | --------------------------- | ---------------------------------------------- |
| <SwagTokensFontPreview fontSize="0.75rem"/>  | Extra-extra-small font size | <SwagCopyButton buttonText="--font-size-2xs"/> |
| <SwagTokensFontPreview fontSize="0.875rem"/> | Extra-small font size       | <SwagCopyButton buttonText="--font-size-xs"/>  |
| <SwagTokensFontPreview fontSize="1rem"/>     | Small font size             | <SwagCopyButton buttonText="--font-size-s"/>   |
| <SwagTokensFontPreview fontSize="1.125rem"/> | Medium font size            | <SwagCopyButton buttonText="--font-size-m"/>   |
| <SwagTokensFontPreview fontSize="1.25rem"/>  | Large font size             | <SwagCopyButton buttonText="--font-size-l"/>   |
| <SwagTokensFontPreview fontSize="1.5rem"/>   | Extra-large font size       | <SwagCopyButton buttonText="--font-size-xl"/>  |
| <SwagTokensFontPreview fontSize="1.75rem"/>  | 2x extra-large font size    | <SwagCopyButton buttonText="--font-size-2xl"/> |
| <SwagTokensFontPreview fontSize="2rem"/>     | 3x extra-large font size    | <SwagCopyButton buttonText="--font-size-3xl"/> |

## Weight

Standardize font weights to convey emphasis, structure, and visual balance.

| Value                                     | Description          | Token Name                                            |
| ----------------------------------------- | -------------------- | ----------------------------------------------------- |
| <SwagTokensFontPreview fontWeight="400"/> | Regular font weight  | <SwagCopyButton buttonText="--font-weight-regular"/>  |
| <SwagTokensFontPreview fontWeight="500"/> | Medium font weight   | <SwagCopyButton buttonText="--font-weight-medium"/>   |
| <SwagTokensFontPreview fontWeight="600"/> | Semibold font weight | <SwagCopyButton buttonText="--font-weight-semibold"/> |
| <SwagTokensFontPreview fontWeight="700"/> | Bold font weight     | <SwagCopyButton buttonText="--font-weight-bold"/>     |

## Line height

Ensure proper spacing between lines of text for optimal readability and accessibility.

| Value                                          | Description                   | Token Name                                            |
| ---------------------------------------------- | ----------------------------- | ----------------------------------------------------- |
| <SwagTokensFontPreview lineHeight="1.125rem"/> | Extra-extra-small line height | <SwagCopyButton buttonText="--font-line-height-2xs"/> |
| <SwagTokensFontPreview lineHeight="1.375rem"/> | Extra-small line height       | <SwagCopyButton buttonText="--font-line-height-xs"/>  |
| <SwagTokensFontPreview lineHeight="1.625rem"/> | Small line height             | <SwagCopyButton buttonText="--font-line-height-s"/>   |
| <SwagTokensFontPreview lineHeight="1.75rem"/>  | Medium line height            | <SwagCopyButton buttonText="--font-line-height-m"/>   |
| <SwagTokensFontPreview lineHeight="1.875rem"/> | Large line height             | <SwagCopyButton buttonText="--font-line-height-l"/>   |
| <SwagTokensFontPreview lineHeight="2rem"/>     | Extra-large line height       | <SwagCopyButton buttonText="--font-line-height-xl"/>  |
| <SwagTokensFontPreview lineHeight="2.25rem"/>  | 2x extra-large line height    | <SwagCopyButton buttonText="--font-line-height-2xl"/> |
| <SwagTokensFontPreview lineHeight="2.5rem"/>   | 3x extra-large line height    | <SwagCopyButton buttonText="--font-line-height-3xl"/> |

<style scoped>
table, th, td {
  border: none;
  margin: 0;
  border-spacing: 0;
  border-collapse: collapse;
}
</style>
