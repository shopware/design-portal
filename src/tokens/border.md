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
import CodeSnippet from '../components/codesnippet/CodeSnippet.vue'
</script>

# Border

## Border radius

Define consistent border radii to establish rounded corners and maintain a cohesive visual style across UI elements.

| Value                                                | Description              | Token Name                                              |
| ---------------------------------------------------- | ------------------------ | ------------------------------------------------------- |
| <SwagTokenBorderPreview borderRadius="0.5rem"/>      | Card border radius       | <CodeSnippet buttonText="--border-radius-card"/>     |
| <SwagTokenBorderPreview borderRadius="0.25rem"/>     | Overlay border radius    | <CodeSnippet buttonText="--border-radius-overlay"/>  |
| <SwagTokenBorderPreview borderRadius="0.25rem"/>     | Button border radius     | <CodeSnippet buttonText="--border-radius-button"/>   |
| <SwagTokenBorderPreview borderRadius="0.25rem"/>     | Checkbox border radius   | <CodeSnippet buttonText="--border-radius-checkbox"/> |
| <SwagTokenBorderPreview borderRadius="0rem"/>        | No border radius         | <CodeSnippet buttonText="--border-radius-none"/>     |
| <SwagTokenBorderPreview borderRadius="0.125rem"/>    | Extra-extra-small radius | <CodeSnippet buttonText="--border-radius-2xs"/>      |
| <SwagTokenBorderPreview borderRadius="0.25rem"/>     | Extra-small radius       | <CodeSnippet buttonText="--border-radius-xs"/>       |
| <SwagTokenBorderPreview borderRadius="0.375rem"/>    | Small radius             | <CodeSnippet buttonText="--border-radius-s"/>        |
| <SwagTokenBorderPreview borderRadius="0.5rem"/>      | Medium radius            | <CodeSnippet buttonText="--border-radius-m"/>        |
| <SwagTokenBorderPreview borderRadius="0.75rem"/>     | Large radius             | <CodeSnippet buttonText="--border-radius-l"/>        |
| <SwagTokenBorderPreview borderRadius="1rem"/>        | Extra-large radius       | <CodeSnippet buttonText="--border-radius-xl"/>       |
| <SwagTokenBorderPreview borderRadius="1.25rem"/>     | 2x extra-large radius    | <CodeSnippet buttonText="--border-radius-2xl"/>      |
| <SwagTokenBorderPreview borderRadius="1.5rem"/>      | 3x extra-large radius    | <CodeSnippet buttonText="--border-radius-3xl"/>      |
| <SwagTokenBorderPreview borderRadius="2rem"/>        | 4x extra-large radius    | <CodeSnippet buttonText="--border-radius-4xl"/>      |
| <SwagTokenBorderPreview borderRadius="624.9375rem"/> | Fully rounded radius     | <CodeSnippet buttonText="--border-radius-round"/>    |

<style scoped>
table, th, td {
  border: none;
  margin: 0;
  border-spacing: 0;
  border-collapse: collapse;
}

.vp-doc table {
  table-layout: auto;
  width: 100%;
  border-collapse: collapse;
  border: 1px solid var(--c-white-200) !important;
  margin-bottom: 20px;
  border-radius: 10px;
}

.vp-doc th {
  border: none !important;
  background-color: var(--c-white-100) !important;
  border-bottom: 1px solid var(--c-white-200) !important;
}

.vp-doc td {
  width: 25% !important;
}

.vp-doc tr {
  background: white !important;
  border: none !important;
  border-bottom: 1px solid var(--c-white-200) !important;
}

.vp-doc tr:last-child {
  border-bottom: none !important;
}
</style>
