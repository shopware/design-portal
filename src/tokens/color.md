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
import SwagSwatch from '../components/tokens/SwagTokenSwatch.vue'
import CodeSnippet from '../components/codesnippet/CodeSnippet.vue'
</script>

# Color

## Interaction

This list defines interaction color tokens for primary, secondary, and critical actions across different states, ensuring consistency and accessibility in the design system.

| Value                                     | Description                            | Token Name                                                            |
| ----------------------------------------- | -------------------------------------- | --------------------------------------------------------------------- |
| <SwagSwatch value="#0870ff"></SwagSwatch> | Primary interaction color (default)    | <CodeSnippet buttonText="--color-interaction-primary-default"/>    |
| <SwagSwatch value="#0042a0"></SwagSwatch> | Primary interaction color (hover)      | <CodeSnippet buttonText="--color-interaction-primary-hover"/>      |
| <SwagSwatch value="#76aaff"></SwagSwatch> | Primary interaction color (disabled)   | <CodeSnippet buttonText="--color-interaction-primary-disabled"/>   |
| <SwagSwatch value="#005cd7"></SwagSwatch> | Primary interaction color (pressed)    | <CodeSnippet buttonText="--color-interaction-primary-pressed"/>    |
| <SwagSwatch value="#ffffff"></SwagSwatch> | Secondary interaction color (default)  | <CodeSnippet buttonText="--color-interaction-secondary-default"/>  |
| <SwagSwatch value="#f2f3f8"></SwagSwatch> | Secondary interaction color (hover)    | <CodeSnippet buttonText="--color-interaction-secondary-hover"/>    |
| <SwagSwatch value="#e2e3e9"></SwagSwatch> | Secondary interaction color (disabled) | <CodeSnippet buttonText="--color-interaction-secondary-disabled"/> |
| <SwagSwatch value="#f2f3f8"></SwagSwatch> | Secondary interaction color (dark)     | <CodeSnippet buttonText="--color-interaction-secondary-dark"/>     |
| <SwagSwatch value="#e2262a"></SwagSwatch> | Critical interaction color (default)   | <CodeSnippet buttonText="--color-interaction-critical-default"/>   |
| <SwagSwatch value="#90000e"></SwagSwatch> | Critical interaction color (hover)     | <CodeSnippet buttonText="--color-interaction-critical-hover"/>     |
| <SwagSwatch value="#ffa9a0"></SwagSwatch> | Critical interaction color (disabled)  | <CodeSnippet buttonText="--color-interaction-critical-disabled"/>  |
| <SwagSwatch value="#c20017"></SwagSwatch> | Critical interaction color (pressed)   | <CodeSnippet buttonText="--color-interaction-critical-pressed"/>   |

## Elevation

This list defines elevation surface tokens for different UI layers, ensuring depth, hierarchy, and visual clarity across the design system.

| Value                                     | Description                  | Token Name                                                        |
| ----------------------------------------- | ---------------------------- | ----------------------------------------------------------------- |
| <SwagSwatch value="#fafbfe"></SwagSwatch> | Elevation surface (sunken)   | <CodeSnippet buttonText="--color-elevation-surface-sunken"/>   |
| <SwagSwatch value="#ffffff"></SwagSwatch> | Elevation surface (default)  | <CodeSnippet buttonText="--color-elevation-surface-default"/>  |
| <SwagSwatch value="#cdced4"></SwagSwatch> | Elevation surface (selected) | <CodeSnippet buttonText="--color-elevation-surface-selected"/> |
| <SwagSwatch value="#e2e3e9"></SwagSwatch> | Elevation surface (hover)    | <CodeSnippet buttonText="--color-elevation-surface-hover"/>    |
| <SwagSwatch value="#ffffff"></SwagSwatch> | Elevation surface (raised)   | <CodeSnippet buttonText="--color-elevation-surface-raised"/>   |
| <SwagSwatch value="#ffffff"></SwagSwatch> | Elevation surface (overlay)  | <CodeSnippet buttonText="--color-elevation-surface-overlay"/>  |
| <SwagSwatch value="#fafbfe"></SwagSwatch> | Elevation surface (frame)    | <CodeSnippet buttonText="--color-elevation-surface-frame"/>    |
| <SwagSwatch value="#101013"></SwagSwatch> | Elevation surface (backdrop) | <CodeSnippet buttonText="--color-elevation-surface-backdrop"/> |
| <SwagSwatch value="#26262b"></SwagSwatch> | Elevation surface (floating) | <CodeSnippet buttonText="--color-elevation-surface-floating"/> |
| <SwagSwatch value="#101013"></SwagSwatch> | Elevation shadow (default)   | <CodeSnippet buttonText="--color-elevation-shadow-default"/>   |

## Background

Define consistent background colors for different UI elements, enhancing visual harmony and accessibility.

| Value                                     | Description                            | Token Name                                                          |
| ----------------------------------------- | -------------------------------------- | ------------------------------------------------------------------- |
| <SwagSwatch value="#fafbfe"></SwagSwatch> | Background color (primary - default)   | <CodeSnippet buttonText="--color-background-primary-default"/>   |
| <SwagSwatch value="#f2f3f8"></SwagSwatch> | Background color (primary - disabled)  | <CodeSnippet buttonText="--color-background-primary-disabled"/>  |
| <SwagSwatch value="#f0f6ff"></SwagSwatch> | Background color (brand - default)     | <CodeSnippet buttonText="--color-background-brand-default"/>     |
| <SwagSwatch value="#fff2f0"></SwagSwatch> | Background color (critical - default)  | <CodeSnippet buttonText="--color-background-critical-default"/>  |
| <SwagSwatch value="#fff2f0"></SwagSwatch> | Background color (critical - dark)     | <CodeSnippet buttonText="--color-background-critical-dark"/>     |
| <SwagSwatch value="#fff3e3"></SwagSwatch> | Background color (attention - default) | <CodeSnippet buttonText="--color-background-attention-default"/> |
| <SwagSwatch value="#e1ffe0"></SwagSwatch> | Background color (positive - default)  | <CodeSnippet buttonText="--color-background-positive-default"/>  |
| <SwagSwatch value="#e4e1ff"></SwagSwatch> | Background color (accent - default)    | <CodeSnippet buttonText="--color-background-accent-default"/>    |

## Icon

Standardize icon colors to maintain consistency, visibility, and accessibility across different themes and states.

| Value                                     | Description                      | Token Name                                                    |
| ----------------------------------------- | -------------------------------- | ------------------------------------------------------------- |
| <SwagSwatch value="#3d3e42"></SwagSwatch> | Icon color (primary - default)   | <CodeSnippet buttonText="--color-icon-primary-default"/>   |
| <SwagSwatch value="#cdced4"></SwagSwatch> | Icon color (primary - disabled)  | <CodeSnippet buttonText="--color-icon-primary-disabled"/>  |
| <SwagSwatch value="#0870ff"></SwagSwatch> | Icon color (brand - default)     | <CodeSnippet buttonText="--color-icon-brand-default"/>     |
| <SwagSwatch value="#0042a0"></SwagSwatch> | Icon color (brand - hover)       | <CodeSnippet buttonText="--color-icon-brand-hover"/>       |
| <SwagSwatch value="#76aaff"></SwagSwatch> | Icon color (brand - disabled)    | <CodeSnippet buttonText="--color-icon-brand-disabled"/>    |
| <SwagSwatch value="#e2262a"></SwagSwatch> | Icon color (critical - default)  | <CodeSnippet buttonText="--color-icon-critical-default"/>  |
| <SwagSwatch value="#90000e"></SwagSwatch> | Icon color (critical - hover)    | <CodeSnippet buttonText="--color-icon-critical-hover"/>    |
| <SwagSwatch value="#ff7f74"></SwagSwatch> | Icon color (critical - disabled) | <CodeSnippet buttonText="--color-icon-critical-disabled"/> |
| <SwagSwatch value="#fbaf18"></SwagSwatch> | Icon color (attention - default) | <CodeSnippet buttonText="--color-icon-attention-default"/> |
| <SwagSwatch value="#36d046"></SwagSwatch> | Icon color (positive - default)  | <CodeSnippet buttonText="--color-icon-positive-default"/>  |
| <SwagSwatch value="#633bc6"></SwagSwatch> | Icon color (accent - default)    | <CodeSnippet buttonText="--color-icon-accent-default"/>    |
| <SwagSwatch value="#ffffff"></SwagSwatch> | Icon color (static - default)    | <CodeSnippet buttonText="--color-icon-static-default"/>    |
| <SwagSwatch value="#101013"></SwagSwatch> | Icon color (static - dark)       | <CodeSnippet buttonText="--color-icon-static-dark"/>       |
| <SwagSwatch value="#fafbfe"></SwagSwatch> | Icon color (inverse - default)   | <CodeSnippet buttonText="--color-icon-inverse-default"/>   |

## Border

Establish uniform border colors to create clear separations, enhance structure, and improve usability.

| Value                                     | Description                        | Token Name                                                      |
| ----------------------------------------- | ---------------------------------- | --------------------------------------------------------------- |
| <SwagSwatch value="#cdced4"></SwagSwatch> | Border color (primary - default)   | <CodeSnippet buttonText="--color-border-primary-default"/>   |
| <SwagSwatch value="#0870ff"></SwagSwatch> | Border color (brand - selected)    | <CodeSnippet buttonText="--color-border-brand-selected"/>    |
| <SwagSwatch value="#00296a"></SwagSwatch> | Border color (brand - default)     | <CodeSnippet buttonText="--color-border-brand-default"/>     |
| <SwagSwatch value="#76aaff"></SwagSwatch> | Border color (brand - disabled)    | <CodeSnippet buttonText="--color-border-brand-disabled"/>    |
| <SwagSwatch value="#c20017"></SwagSwatch> | Border color (critical - default)  | <CodeSnippet buttonText="--color-border-critical-default"/>  |
| <SwagSwatch value="#90000e"></SwagSwatch> | Border color (critical - hover)    | <CodeSnippet buttonText="--color-border-critical-hover"/>    |
| <SwagSwatch value="#ff7f74"></SwagSwatch> | Border color (critical - disabled) | <CodeSnippet buttonText="--color-border-critical-disabled"/> |
| <SwagSwatch value="#f0f6ff"></SwagSwatch> | Border color (attention - default) | <CodeSnippet buttonText="--color-border-attention-default"/> |
| <SwagSwatch value="#36d046"></SwagSwatch> | Border color (positive - default)  | <CodeSnippet buttonText="--color-border-positive-default"/>  |
| <SwagSwatch value="#6f47c1"></SwagSwatch> | Border color (accent - default)    | <CodeSnippet buttonText="--color-border-accent-default"/>    |

## Text

Ensure legible and accessible typography by defining consistent text colors for various contexts and contrast levels.

| Value                                     | Description                       | Token Name                                                     |
| ----------------------------------------- | --------------------------------- | -------------------------------------------------------------- |
| <SwagSwatch value="#2d2e32"></SwagSwatch> | Text color (primary - default)    | <CodeSnippet buttonText="--color-text-primary-default"/>    |
| <SwagSwatch value="#b9babf"></SwagSwatch> | Text color (primary - disabled)   | <CodeSnippet buttonText="--color-text-primary-disabled"/>   |
| <SwagSwatch value="#696a6e"></SwagSwatch> | Text color (secondary - default)  | <CodeSnippet buttonText="--color-text-secondary-default"/>  |
| <SwagSwatch value="#b9babf"></SwagSwatch> | Text color (secondary - disabled) | <CodeSnippet buttonText="--color-text-secondary-disabled"/> |
| <SwagSwatch value="#696a6e"></SwagSwatch> | Text color (tertiary - default)   | <CodeSnippet buttonText="--color-text-tertiary-default"/>   |
| <SwagSwatch value="#0870ff"></SwagSwatch> | Text color (brand - default)      | <CodeSnippet buttonText="--color-text-brand-default"/>      |
| <SwagSwatch value="#0042a0"></SwagSwatch> | Text color (brand - hover)        | <CodeSnippet buttonText="--color-text-brand-hover"/>        |
| <SwagSwatch value="#76aaff"></SwagSwatch> | Text color (brand - disabled)     | <CodeSnippet buttonText="--color-text-brand-disabled"/>     |
| <SwagSwatch value="#e2262a"></SwagSwatch> | Text color (critical - default)   | <CodeSnippet buttonText="--color-text-critical-default"/>   |
| <SwagSwatch value="#90000e"></SwagSwatch> | Text color (critical - hover)     | <CodeSnippet buttonText="--color-text-critical-hover"/>     |
| <SwagSwatch value="#ff7f74"></SwagSwatch> | Text color (critical - disabled)  | <CodeSnippet buttonText="--color-text-critical-disabled"/>  |
| <SwagSwatch value="#5e0006"></SwagSwatch> | Text color (critical - dark)      | <CodeSnippet buttonText="--color-text-critical-dark"/>      |
| <SwagSwatch value="#533600"></SwagSwatch> | Text color (attention - default)  | <CodeSnippet buttonText="--color-text-attention-default"/>  |
| <SwagSwatch value="#00470a"></SwagSwatch> | Text color (positive - default)   | <CodeSnippet buttonText="--color-text-positive-default"/>   |
| <SwagSwatch value="#633bc6"></SwagSwatch> | Text color (accent - default)     | <CodeSnippet buttonText="--color-text-accent-default"/>     |
| <SwagSwatch value="#ffffff"></SwagSwatch> | Text color (static - default)     | <CodeSnippet buttonText="--color-text-static-default"/>     |
| <SwagSwatch value="#101013"></SwagSwatch> | Text color (static - dark)        | <CodeSnippet buttonText="--color-text-static-dark"/>        |
| <SwagSwatch value="#fafbfe"></SwagSwatch> | Text color (inverse - default)    | <CodeSnippet buttonText="--color-text-inverse-default"/>    |

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
