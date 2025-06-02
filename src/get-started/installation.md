---
pageClass: p-landing-768
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

<script setup>
import NPM from "../components/interaction/NPM.vue";
</script>

# Installation Guide

This guide will help you get started with Meteor Design System in your project, whether you're using Vue.js, or just need the design tokens and icons.

## Prerequisites

Before you begin, ensure you have:
- Node.js 16+ installed
- A package manager (npm, yarn, or pnpm)
- A Vue.js 3+ project (for component library)

## Component Library

### Install the package

<NPM package="@shopware-ag/meteor-component-library" />

### Import styles

Import the required CSS files in your main application file:

```js
// main.js or app.js
import "@shopware-ag/meteor-component-library/styles.css";
import "@shopware-ag/meteor-component-library/font.css";
```

### Using components

Import and use components in your Vue.js application:

```vue
<template>
  <div>
    <MtButton variant="primary">Click me!</MtButton>
    <MtBanner variant="success">Operation completed successfully</MtBanner>
  </div>
</template>

<script setup>
import { MtButton, MtBanner } from "@shopware-ag/meteor-component-library";
</script>
```

## Icon Kit

### Install the package

<NPM package="@shopware-ag/meteor-icon-kit" />

### Usage

```vue
<template>
  <div>
    <!-- Using with Meteor components -->
    <MtIcon name="check" />
    
    <!-- Direct SVG usage -->
    <svg>
      <use :href="`#meteor-icon-check`"></use>
    </svg>
  </div>
</template>

<script setup>
import { MtIcon } from "@shopware-ag/meteor-component-library";
// Icon kit is automatically included when you import the component library
</script>
```

## Design Tokens

### Install the package

<NPM package="@shopware-ag/meteor-tokens" />

### Usage in CSS

```css
/* Import tokens as CSS custom properties */
@import "@shopware-ag/meteor-tokens/css/tokens.css";

.my-component {
  color: var(--color-text-primary);
  background: var(--color-bg-primary);
  border-radius: var(--border-radius-default);
  padding: var(--spacing-4) var(--spacing-6);
}
```

### Usage in JavaScript

```js
import tokens from "@shopware-ag/meteor-tokens";

// Access token values programmatically
const primaryColor = tokens.color.text.primary;
const defaultSpacing = tokens.spacing[4];
```

## Framework Integration

### Vue.js 3

Meteor is built for Vue.js 3 and works out of the box:

```js
// main.js
import { createApp } from 'vue';
import "@shopware-ag/meteor-component-library/styles.css";
import "@shopware-ag/meteor-component-library/font.css";

const app = createApp(App);
app.mount('#app');
```

### Nuxt 3

For Nuxt applications, create a plugin:

```js
// plugins/meteor.client.js
import "@shopware-ag/meteor-component-library/styles.css";
import "@shopware-ag/meteor-component-library/font.css";
```

### Other Frameworks

While Meteor components are built for Vue.js, you can still use the design tokens and icons in any framework:

```bash
# Install only tokens and icons
npm install @shopware-ag/meteor-tokens @shopware-ag/meteor-icon-kit
```

## TypeScript Support

Meteor includes full TypeScript definitions. No additional setup required:

```typescript
import { MtButton } from "@shopware-ag/meteor-component-library";
import type { MtButtonVariant } from "@shopware-ag/meteor-component-library/types";

const variant: MtButtonVariant = "primary";
```

## Troubleshooting

### Common Issues

**Styles not loading**: Ensure you've imported both `styles.css` and `font.css` in your main application file.

**Components not found**: Make sure you've installed the component library package and imported components correctly.

**TypeScript errors**: Verify you're using Vue.js 3+ and TypeScript 4.5+.

### Getting Help

- Check our [GitHub Issues](https://github.com/shopware/meteor/issues)
- Join our [Slack Community](https://shopwarecommunity.slack.com/archives/C02BM1MMG2Z)
- [Contact us](/get-started/contact-us) directly
- View [Official Shopware Documentation](https://developer.shopware.com/) for comprehensive guides

## Next Steps

- [Explore Components](/meteor-components/)
- [Learn about Design Tokens](/tokens/)
- [Browse Icons](/icons/)
- [Read Meteor 101](/get-started/meteor-101)
