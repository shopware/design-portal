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
import SwagTokensFontPreview from '../components/tokens/SwagTokensFontPreview.vue';
</script>

# Font

## Usage

Semantic tokens represent the choices the design system made in regards to when to use each font value.

| Value                                          | Description                   | Token Name               |
| ---------------------------------------------- | ----------------------------- | ------------------------ |
| <SwagTokensFontPreview fontSize="0.75rem"/>    | Extra-extra-small font size   | `--font-size-2xs`        |
| <SwagTokensFontPreview fontSize="0.875rem"/>   | Extra-small font size         | `--font-size-xs`         |
| <SwagTokensFontPreview fontSize="1rem"/>       | Small font size               | `--font-size-s`          |
| <SwagTokensFontPreview fontSize="1.125rem"/>   | Medium font size              | `--font-size-m`          |
| <SwagTokensFontPreview fontSize="1.25rem"/>    | Large font size               | `--font-size-l`          |
| <SwagTokensFontPreview fontSize="1.5rem"/>     | Extra-large font size         | `--font-size-xl`         |
| <SwagTokensFontPreview fontSize="1.75rem"/>    | 2x extra-large font size      | `--font-size-2xl`        |
| <SwagTokensFontPreview fontSize="2rem"/>       | 3x extra-large font size      | `--font-size-3xl`        |
| <SwagTokensFontPreview fontWeight="400"/>      | Regular font weight           | `--font-weight-regular`  |
| <SwagTokensFontPreview fontWeight="500"/>      | Medium font weight            | `--font-weight-medium`   |
| <SwagTokensFontPreview fontWeight="600"/>      | Semibold font weight          | `--font-weight-semibold` |
| <SwagTokensFontPreview fontWeight="700"/>      | Bold font weight              | `--font-weight-bold`     |
| <SwagTokensFontPreview lineHeight="1.125rem"/> | Extra-extra-small line height | `--font-line-height-2xs` |
| <SwagTokensFontPreview lineHeight="1.375rem"/> | Extra-small line height       | `--font-line-height-xs`  |
| <SwagTokensFontPreview lineHeight="1.625rem"/> | Small line height             | `--font-line-height-s`   |
| <SwagTokensFontPreview lineHeight="1.75rem"/>  | Medium line height            | `--font-line-height-m`   |
| <SwagTokensFontPreview lineHeight="1.875rem"/> | Large line height             | `--font-line-height-l`   |
| <SwagTokensFontPreview lineHeight="2rem"/>     | Extra-large line height       | `--font-line-height-xl`  |
| <SwagTokensFontPreview lineHeight="2.25rem"/>  | 2x extra-large line height    | `--font-line-height-2xl` |
| <SwagTokensFontPreview lineHeight="2.5rem"/>   | 3x extra-large line height    | `--font-line-height-3xl` |

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
