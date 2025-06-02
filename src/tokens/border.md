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
import SwagTokenBorderPreview from '../components/tokens/SwagTokensBorderPreview.vue'
import SwagCopyButton from '../components/tokens/SwagCopyButton.vue'
</script>

# Border

## Border radius

Define consistent border radii to establish rounded corners and maintain a cohesive visual style across UI elements.

| Value                                                | Description              | Token Name                                              |
| ---------------------------------------------------- | ------------------------ | ------------------------------------------------------- |
| <SwagTokenBorderPreview borderRadius="0.5rem"/>      | Card border radius       | <SwagCopyButton buttonText="--border-radius-card"/>     |
| <SwagTokenBorderPreview borderRadius="0.25rem"/>     | Overlay border radius    | <SwagCopyButton buttonText="--border-radius-overlay"/>  |
| <SwagTokenBorderPreview borderRadius="0.25rem"/>     | Button border radius     | <SwagCopyButton buttonText="--border-radius-button"/>   |
| <SwagTokenBorderPreview borderRadius="0.25rem"/>     | Checkbox border radius   | <SwagCopyButton buttonText="--border-radius-checkbox"/> |
| <SwagTokenBorderPreview borderRadius="0rem"/>        | No border radius         | <SwagCopyButton buttonText="--border-radius-none"/>     |
| <SwagTokenBorderPreview borderRadius="0.125rem"/>    | Extra-extra-small radius | <SwagCopyButton buttonText="--border-radius-2xs"/>      |
| <SwagTokenBorderPreview borderRadius="0.25rem"/>     | Extra-small radius       | <SwagCopyButton buttonText="--border-radius-xs"/>       |
| <SwagTokenBorderPreview borderRadius="0.375rem"/>    | Small radius             | <SwagCopyButton buttonText="--border-radius-s"/>        |
| <SwagTokenBorderPreview borderRadius="0.5rem"/>      | Medium radius            | <SwagCopyButton buttonText="--border-radius-m"/>        |
| <SwagTokenBorderPreview borderRadius="0.75rem"/>     | Large radius             | <SwagCopyButton buttonText="--border-radius-l"/>        |
| <SwagTokenBorderPreview borderRadius="1rem"/>        | Extra-large radius       | <SwagCopyButton buttonText="--border-radius-xl"/>       |
| <SwagTokenBorderPreview borderRadius="1.25rem"/>     | 2x extra-large radius    | <SwagCopyButton buttonText="--border-radius-2xl"/>      |
| <SwagTokenBorderPreview borderRadius="1.5rem"/>      | 3x extra-large radius    | <SwagCopyButton buttonText="--border-radius-3xl"/>      |
| <SwagTokenBorderPreview borderRadius="2rem"/>        | 4x extra-large radius    | <SwagCopyButton buttonText="--border-radius-4xl"/>      |
| <SwagTokenBorderPreview borderRadius="624.9375rem"/> | Fully rounded radius     | <SwagCopyButton buttonText="--border-radius-round"/>    |

<style scoped>
table, th, td {
  border: none;
  margin: 0;
  border-spacing: 0;
  border-collapse: collapse;
}
</style>
