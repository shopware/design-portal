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

<script setup lang="ts">
import SwagTokenBorderPreview from '../components/tokens/SwagTokensBorderPreview.vue'
</script>

# Border

## Usage

Semantic tokens represent the choices the design system made in regards to when to use each border value.

| Value                                                | Description              | Token Name                 |
| ---------------------------------------------------- | ------------------------ | -------------------------- |
| <SwagTokenBorderPreview borderRadius="0.5rem"/>      | Card border radius       | `--border-radius-card`     |
| <SwagTokenBorderPreview borderRadius="0.25rem"/>     | Overlay border radius    | `--border-radius-overlay`  |
| <SwagTokenBorderPreview borderRadius="0.25rem"/>     | Button border radius     | `--border-radius-button`   |
| <SwagTokenBorderPreview borderRadius="0.25rem"/>     | Checkbox border radius   | `--border-radius-checkbox` |
| <SwagTokenBorderPreview borderRadius="0rem"/>        | No border radius         | `--border-radius-none`     |
| <SwagTokenBorderPreview borderRadius="0.125rem"/>    | Extra-extra-small radius | `--border-radius-2xs`      |
| <SwagTokenBorderPreview borderRadius="0.25rem"/>     | Extra-small radius       | `--border-radius-xs`       |
| <SwagTokenBorderPreview borderRadius="0.375rem"/>    | Small radius             | `--border-radius-s`        |
| <SwagTokenBorderPreview borderRadius="0.5rem"/>      | Medium radius            | `--border-radius-m`        |
| <SwagTokenBorderPreview borderRadius="0.75rem"/>     | Large radius             | `--border-radius-l`        |
| <SwagTokenBorderPreview borderRadius="1rem"/>        | Extra-large radius       | `--border-radius-xl`       |
| <SwagTokenBorderPreview borderRadius="1.25rem"/>     | 2x extra-large radius    | `--border-radius-2xl`      |
| <SwagTokenBorderPreview borderRadius="1.5rem"/>      | 3x extra-large radius    | `--border-radius-3xl`      |
| <SwagTokenBorderPreview borderRadius="2rem"/>        | 4x extra-large radius    | `--border-radius-4xl`      |
| <SwagTokenBorderPreview borderRadius="624.9375rem"/> | Fully rounded radius     | `--border-radius-round`    |

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
  border: 1px solid var(--c-white-200);
  margin-bottom: 100px;
  border-radius: 10px;
}

.vp-doc th {
  border: none !important;
  background-color: var(--c-white-100);
  border-bottom: 1px solid var(--c-white-200) !important;
}

.vp-doc td {
  width: 1%;
}

.vp-doc tr {
  background: white;
  border: none;
  border-bottom: 1px solid var(--c-white-200);
}

.vp-doc tr:last-child {
  border-bottom: none;
}
</style>
