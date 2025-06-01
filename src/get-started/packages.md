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

# Packages Overview

Meteor Design System is distributed as multiple packages to give you flexibility in choosing what you need for your project.

## Core Packages

### @shopware-ag/meteor-component-library

The main package containing all Vue.js components, icons, and basic tokens.

<NPM package="@shopware-ag/meteor-component-library" />

**What's included:**
- 145+ Vue.js 3 components
- Full TypeScript definitions
- Basic design tokens (CSS custom properties)
- Icon components
- Font imports (Inter)
- Dark mode support

**Use when:**
- Building Vue.js applications
- Need complete component library
- Want everything in one package

### @shopware-ag/meteor-icon-kit

Standalone icon package with 850+ icons.

<NPM package="@shopware-ag/meteor-icon-kit" />

**What's included:**
- 850+ SVG icons
- Vue.js icon components
- Multiple formats (SVG, Vue)
- TypeScript definitions

**Use when:**
- Only need icons
- Using non-Vue.js frameworks
- Building custom icon systems

### @shopware-ag/meteor-tokens

Complete design token package with all Meteor design values.

<NPM package="@shopware-ag/meteor-tokens" />

**What's included:**
- 200+ design tokens
- Multiple formats (CSS, SCSS, JSON, JS)
- Dark and light theme variants
- Platform-specific outputs

**Use when:**
- Building custom components
- Need design tokens in specific formats
- Creating consistent styling across platforms

### @shopware-ag/meteor-admin-sdk

SDK for building Shopware 6 Administration apps and extensions.

<NPM package="@shopware-ag/meteor-admin-sdk" />

**What's included:**
- Development framework for admin apps
- Shopware API integrations
- Hot module replacement
- Built-in Meteor components

**Use when:**
- Building Shopware admin extensions
- Creating custom admin interfaces
- Need Shopware-specific functionality

## Package Relationships

```
@shopware-ag/meteor-component-library
├── Uses @shopware-ag/meteor-icon-kit
├── Includes basic tokens from @shopware-ag/meteor-tokens
└── Provides Vue.js components

@shopware-ag/meteor-admin-sdk
├── Extends @shopware-ag/meteor-component-library
├── Adds Shopware-specific APIs
└── Provides admin app framework

@shopware-ag/meteor-tokens
└── Standalone design tokens

@shopware-ag/meteor-icon-kit
└── Standalone icon library
```

## Installation Strategies

### Strategy 1: Full Component Library (Recommended for Vue.js)

Install the complete component library for Vue.js projects:

```bash
npm install @shopware-ag/meteor-component-library
```

This gives you everything you need for Vue.js applications.

### Strategy 2: Tokens + Icons Only

For non-Vue.js projects or when building custom components:

```bash
npm install @shopware-ag/meteor-tokens @shopware-ag/meteor-icon-kit
```

### Strategy 3: Shopware Admin Development

For building Shopware administration extensions:

```bash
npm install @shopware-ag/meteor-admin-sdk
```

This includes the component library and Shopware-specific functionality.

### Strategy 4: Individual Packages

Pick exactly what you need:

```bash
# Only icons
npm install @shopware-ag/meteor-icon-kit

# Only design tokens  
npm install @shopware-ag/meteor-tokens

# Components without admin SDK
npm install @shopware-ag/meteor-component-library
```

## Framework Compatibility

| Package | Vue.js 3 | Vue.js 2 | Angular | Vanilla JS |
|---------|----------|----------|---------|------------|
| `meteor-component-library` | ✅ | ❌ | ❌ | ❌ |
| `meteor-admin-sdk` | ✅ | ❌ | ❌ | ❌ |
| `meteor-icon-kit` | ✅ | ⚠️ | ⚠️ | ✅ |
| `meteor-tokens` | ✅ | ✅ | ✅ | ✅ |

**Legend:**
- ✅ Full support
- ⚠️ Limited support (SVG/CSS only)
- ❌ Not supported

## Version Compatibility

All Meteor packages follow semantic versioning and are designed to work together:

### Current Versions (June 2025)

- `@shopware-ag/meteor-component-library`: `^4.12.1`
- `@shopware-ag/meteor-icon-kit`: `^5.4.0`
- `@shopware-ag/meteor-tokens`: `^0.3.0`
- `@shopware-ag/meteor-admin-sdk`: `^2.1.0`

### Compatibility Matrix

| Component Library | Icon Kit | Tokens | Admin SDK |
|-------------------|----------|--------|-----------|
| 4.12.x | 5.4.x | 0.3.x | 2.1.x |
| 4.11.x | 5.3.x | 0.2.x | 2.0.x |
| 4.10.x | 5.2.x | 0.2.x | 1.9.x |

## Bundle Size Impact

Understanding the size impact of each package:

### Component Library
- **Full bundle**: ~850KB (gzipped: ~280KB)
- **Tree-shaken**: Varies by usage
- **CSS**: ~180KB (gzipped: ~45KB)

### Icon Kit Only
- **Full bundle**: ~120KB (gzipped: ~35KB)
- **Individual icons**: ~2-5KB each

### Tokens Only
- **CSS**: ~25KB (gzipped: ~8KB)
- **JSON**: ~15KB (gzipped: ~5KB)

### Optimization Tips

1. **Import specific components only**:
   ```js
   // Good
   import { MtButton, MtTextfield } from '@shopware-ag/meteor-component-library';
   
   // Avoid
   import * from '@shopware-ag/meteor-component-library';
   ```

2. **Use tree shaking**:
   ```js
   // webpack.config.js
   module.exports = {
     optimization: {
       usedExports: true,
     },
   };
   ```

3. **Load icons on demand**:
   ```js
   // Dynamic icon loading
   const iconName = computed(() => props.icon);
   const IconComponent = computed(() => 
     defineAsyncComponent(() => import(`@shopware-ag/meteor-icon-kit/icons/${iconName.value}`))
   );
   ```

## Migration Between Versions

### Automated Migration

Use the Meteor CLI for automated migration:

```bash
npx @shopware-ag/meteor-cli migrate
```

### Manual Migration

Follow our [Migration Guide](/get-started/migration) for manual updates.

## Support and Maintenance

### Long-term Support (LTS)

- **Current LTS**: Component Library 4.x (until June 2026)
- **Previous LTS**: Component Library 3.x (until December 2025)

### Support Policy

- **Latest version**: Full support and new features
- **LTS versions**: Security fixes and critical bug fixes
- **Previous versions**: Community support only

## Getting Help

- **[Installation Guide](/get-started/installation)**: Detailed setup instructions
- **[Migration Guide](/get-started/migration)**: Upgrade between versions
- **[Shopware Developer Documentation](https://developer.shopware.com/)**: Official development guides
- **[Admin SDK Documentation](https://developer.shopware.com/resources/admin-extension-sdk/)**: Admin extension development
- **[GitHub Issues](https://github.com/shopware/meteor/issues)**: Bug reports and feature requests
- **[FAQ](/get-started/faq)**: Common questions and troubleshooting
