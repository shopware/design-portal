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
import SwagSwatch from '../components/tokens/SwagTokenSwatch.vue'
</script>

# Color

## Usage

Semantic tokens represent the choices the design system made in regards to when to use each color value.

| Value                                     | Description                            | Token Name                               |
| ----------------------------------------- | -------------------------------------- | ---------------------------------------- |
| <SwagSwatch value="#0870ff"></SwagSwatch> | Primary interaction color (default)    | `--color-interaction-primary-default`    |
| <SwagSwatch value="#0042a0"></SwagSwatch> | Primary interaction color (hover)      | `--color-interaction-primary-hover`      |
| <SwagSwatch value="#76aaff"></SwagSwatch> | Primary interaction color (disabled)   | `--color-interaction-primary-disabled`   |
| <SwagSwatch value="#005cd7"></SwagSwatch> | Primary interaction color (pressed)    | `--color-interaction-primary-pressed`    |
| <SwagSwatch value="#ffffff"></SwagSwatch> | Secondary interaction color (default)  | `--color-interaction-secondary-default`  |
| <SwagSwatch value="#f2f3f8"></SwagSwatch> | Secondary interaction color (hover)    | `--color-interaction-secondary-hover`    |
| <SwagSwatch value="#e2e3e9"></SwagSwatch> | Secondary interaction color (disabled) | `--color-interaction-secondary-disabled` |
| <SwagSwatch value="#f2f3f8"></SwagSwatch> | Secondary interaction color (dark)     | `--color-interaction-secondary-dark`     |
| <SwagSwatch value="#e2262a"></SwagSwatch> | Critical interaction color (default)   | `--color-interaction-critical-default`   |
| <SwagSwatch value="#90000e"></SwagSwatch> | Critical interaction color (hover)     | `--color-interaction-critical-hover`     |
| <SwagSwatch value="#ffa9a0"></SwagSwatch> | Critical interaction color (disabled)  | `--color-interaction-critical-disabled`  |
| <SwagSwatch value="#c20017"></SwagSwatch> | Critical interaction color (pressed)   | `--color-interaction-critical-pressed`   |
| <SwagSwatch value="#fafbfe"></SwagSwatch> | Elevation surface (sunken)             | `--color-elevation-surface-sunken`       |
| <SwagSwatch value="#ffffff"></SwagSwatch> | Elevation surface (default)            | `--color-elevation-surface-default`      |
| <SwagSwatch value="#cdced4"></SwagSwatch> | Elevation surface (selected)           | `--color-elevation-surface-selected`     |
| <SwagSwatch value="#e2e3e9"></SwagSwatch> | Elevation surface (hover)              | `--color-elevation-surface-hover`        |
| <SwagSwatch value="#ffffff"></SwagSwatch> | Elevation surface (raised)             | `--color-elevation-surface-raised`       |
| <SwagSwatch value="#ffffff"></SwagSwatch> | Elevation surface (overlay)            | `--color-elevation-surface-overlay`      |
| <SwagSwatch value="#fafbfe"></SwagSwatch> | Elevation surface (frame)              | `--color-elevation-surface-frame`        |
| <SwagSwatch value="#101013"></SwagSwatch> | Elevation surface (backdrop)           | `--color-elevation-surface-backdrop`     |
| <SwagSwatch value="#26262b"></SwagSwatch> | Elevation surface (floating)           | `--color-elevation-surface-floating`     |
| <SwagSwatch value="#101013"></SwagSwatch> | Elevation shadow (default)             | `--color-elevation-shadow-default`       |
| <SwagSwatch value="#fafbfe"></SwagSwatch> | Background color (primary - default)   | `--color-background-primary-default`     |
| <SwagSwatch value="#f2f3f8"></SwagSwatch> | Background color (primary - disabled)  | `--color-background-primary-disabled`    |
| <SwagSwatch value="#f0f6ff"></SwagSwatch> | Background color (brand - default)     | `--color-background-brand-default`       |
| <SwagSwatch value="#fff2f0"></SwagSwatch> | Background color (critical - default)  | `--color-background-critical-default`    |
| <SwagSwatch value="#fff2f0"></SwagSwatch> | Background color (critical - dark)     | `--color-background-critical-dark`       |
| <SwagSwatch value="#fff3e3"></SwagSwatch> | Background color (attention - default) | `--color-background-attention-default`   |
| <SwagSwatch value="#e1ffe0"></SwagSwatch> | Background color (positive - default)  | `--color-background-positive-default`    |
| <SwagSwatch value="#e4e1ff"></SwagSwatch> | Background color (accent - default)    | `--color-background-accent-default`      |
| <SwagSwatch value="#3d3e42"></SwagSwatch> | Icon color (primary - default)         | `--color-icon-primary-default`           |
| <SwagSwatch value="#cdced4"></SwagSwatch> | Icon color (primary - disabled)        | `--color-icon-primary-disabled`          |
| <SwagSwatch value="#0870ff"></SwagSwatch> | Icon color (brand - default)           | `--color-icon-brand-default`             |
| <SwagSwatch value="#0042a0"></SwagSwatch> | Icon color (brand - hover)             | `--color-icon-brand-hover`               |
| <SwagSwatch value="#76aaff"></SwagSwatch> | Icon color (brand - disabled)          | `--color-icon-brand-disabled`            |
| <SwagSwatch value="#e2262a"></SwagSwatch> | Icon color (critical - default)        | `--color-icon-critical-default`          |
| <SwagSwatch value="#90000e"></SwagSwatch> | Icon color (critical - hover)          | `--color-icon-critical-hover`            |
| <SwagSwatch value="#ff7f74"></SwagSwatch> | Icon color (critical - disabled)       | `--color-icon-critical-disabled`         |
| <SwagSwatch value="#fbaf18"></SwagSwatch> | Icon color (attention - default)       | `--color-icon-attention-default`         |
| <SwagSwatch value="#36d046"></SwagSwatch> | Icon color (positive - default)        | `--color-icon-positive-default`          |
| <SwagSwatch value="#633bc6"></SwagSwatch> | Icon color (accent - default)          | `--color-icon-accent-default`            |
| <SwagSwatch value="#ffffff"></SwagSwatch> | Icon color (static - default)          | `--color-icon-static-default`            |
| <SwagSwatch value="#101013"></SwagSwatch> | Icon color (static - dark)             | `--color-icon-static-dark`               |
| <SwagSwatch value="#fafbfe"></SwagSwatch> | Icon color (inverse - default)         | `--color-icon-inverse-default`           |
| <SwagSwatch value="#cdced4"></SwagSwatch> | Border color (primary - default)       | `--color-border-primary-default`         |
| <SwagSwatch value="#0870ff"></SwagSwatch> | Border color (brand - selected)        | `--color-border-brand-selected`          |
| <SwagSwatch value="#00296a"></SwagSwatch> | Border color (brand - default)         | `--color-border-brand-default`           |
| <SwagSwatch value="#76aaff"></SwagSwatch> | Border color (brand - disabled)        | `--color-border-brand-disabled`          |
| <SwagSwatch value="#e2262a"></SwagSwatch> | Border color (critical - default)      | `--color-border-critical-default`        |
| <SwagSwatch value="#5e0006"></SwagSwatch> | Border color (critical - dark)         | `--color-border-critical-dark`           |
| <SwagSwatch value="#ff7f74"></SwagSwatch> | Border color (critical - disabled)     | `--color-border-critical-disabled`       |
| <SwagSwatch value="#fbaf18"></SwagSwatch> | Border color (attention - default)     | `--color-border-attention-default`       |
| <SwagSwatch value="#36d046"></SwagSwatch> | Border color (positive - default)      | `--color-border-positive-default`        |
| <SwagSwatch value="#a694ff"></SwagSwatch> | Border color (accent - default)        | `--color-border-accent-default`          |
| <SwagSwatch value="#2d2e32"></SwagSwatch> | Text color (primary - default)         | `--color-text-primary-default`           |
| <SwagSwatch value="#b9babf"></SwagSwatch> | Text color (primary - disabled)        | `--color-text-primary-disabled`          |
| <SwagSwatch value="#696a6e"></SwagSwatch> | Text color (secondary - default)       | `--color-text-secondary-default`         |
| <SwagSwatch value="#b9babf"></SwagSwatch> | Text color (secondary - disabled)      | `--color-text-secondary-disabled`        |
| <SwagSwatch value="#696a6e"></SwagSwatch> | Text color (tertiary - default)        | `--color-text-tertiary-default`          |
| <SwagSwatch value="#0870ff"></SwagSwatch> | Text color (brand - default)           | `--color-text-brand-default`             |
| <SwagSwatch value="#0042a0"></SwagSwatch> | Text color (brand - hover)             | `--color-text-brand-hover`               |
| <SwagSwatch value="#76aaff"></SwagSwatch> | Text color (brand - disabled)          | `--color-text-brand-disabled`            |
| <SwagSwatch value="#e2262a"></SwagSwatch> | Text color (critical - default)        | `--color-text-critical-default`          |
| <SwagSwatch value="#90000e"></SwagSwatch> | Text color (critical - hover)          | `--color-text-critical-hover`            |
| <SwagSwatch value="#ff7f74"></SwagSwatch> | Text color (critical - disabled)       | `--color-text-critical-disabled`         |
| <SwagSwatch value="#5e0006"></SwagSwatch> | Text color (critical - dark)           | `--color-text-critical-dark`             |
| <SwagSwatch value="#533600"></SwagSwatch> | Text color (attention - default)       | `--color-text-attention-default`         |
| <SwagSwatch value="#00470a"></SwagSwatch> | Text color (positive - default)        | `--color-text-positive-default`          |
| <SwagSwatch value="#633bc6"></SwagSwatch> | Text color (accent - default)          | `--color-text-accent-default`            |
| <SwagSwatch value="#ffffff"></SwagSwatch> | Text color (static - default)          | `--color-text-static-default`            |
| <SwagSwatch value="#101013"></SwagSwatch> | Text color (static - dark)             | `--color-text-static-dark`               |
| <SwagSwatch value="#fafbfe"></SwagSwatch> | Text color (inverse - default)         | `--color-text-inverse-default`           |

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
  margin-bottom: 100px;
  border-radius: 10px;
}

.vp-doc th {
  border: none !important;
  background-color: var(--c-white-100) !important;
  border-bottom: 1px solid var(--c-white-200) !important;
}

.vp-doc td {
  width: 1%;
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