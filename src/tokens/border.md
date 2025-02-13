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
table {
  width: 100%;
  border-collapse: collapse;
  border: white !important;
  margin-bottom: 100px;
}

th {
  border: white !important;
  background: white !important;
  border-bottom: rgb(224,230,235) !important;
}

tr {
  background: white !important;
  border: 1px solid white !important;
}

td {
  border-left: white !important;
  border-right: white !important;
}

td:first-child {
  width: 30% !important;
}

td:nth-child(2) {
  width: 40% !important;
}

td:last-child {
  width: 20% !important;
}
</style>
