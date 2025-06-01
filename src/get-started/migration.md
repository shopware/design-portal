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

# Migration Guide

This guide helps designers and frontend developers transition to Meteor Design System from existing Shopware projects or other design systems.

## From Legacy Shopware Admin Components

If you're working on Shopware 6 Administration or extensions using older components, here's how to transition to Meteor:

### Visual Changes to Expect

Moving to Meteor brings a fresh, modern look:

- **Refined Colors**: Updated color palette with better accessibility
- **Improved Typography**: Enhanced readability with optimized font sizes and spacing
- **Consistent Spacing**: Harmonized spacing system across all components
- **Modern Interactions**: Smoother animations and better hover states

### Component Updates

Most components have direct equivalents in Meteor:

| Previous Component | Meteor Component | Visual Changes |
|-------------------|------------------|----------------|
| `sw-button` | `MtButton` | Refined styling, better focus states |
| `sw-text-field` | `MtTextfield` | Cleaner borders, improved validation states |
| `sw-card` | `MtCard` | Modernized shadows and borders |
| `sw-banner` | `MtBanner` | Enhanced color variants and typography |
| `sw-checkbox` | `MtCheckbox` | Improved accessibility and visual feedback |

### Design Token Migration

Meteor uses a comprehensive design token system. Here's how to map common values:

#### Colors
```css
/* Before: Custom CSS variables */
--color-shopware-blue: #189eff;
--color-success: #37d046;
--color-warning: #ffbd5d;

/* After: Meteor tokens */
--color-primary-default: #189eff;
--color-success-default: #37d046;  
--color-warning-default: #ffbd5d;
```

#### Spacing
```css
/* Before: Inconsistent spacing */
margin: 8px 16px;
padding: 12px 20px;

/* After: Meteor spacing tokens */
margin: var(--spacing-2) var(--spacing-4);
padding: var(--spacing-3) var(--spacing-5);
```

## From Admin Extension SDK to Meteor Admin SDK

::: warning Deprecated Package
The `@shopware-ag/admin-extension-sdk` package was archived in March 2024. It has been replaced by the new Meteor Admin SDK.
:::

::: info Official Documentation
For detailed migration guides and complete API documentation, visit the [Shopware Admin Extension SDK Documentation](https://developer.shopware.com/resources/admin-extension-sdk/).
:::

### What Changed

- **Package name**: `@shopware-ag/admin-extension-sdk` → `@shopware-ag/meteor-admin-sdk`
- **Better integration**: Native Meteor component support
- **Improved DX**: Better TypeScript support and documentation
- **Modern architecture**: Built for Vue 3 and modern development practices

### Simple Migration Steps

1. **Update your package.json**:
```bash
# Remove old package
npm uninstall @shopware-ag/admin-extension-sdk

# Install new Meteor Admin SDK  
npm install @shopware-ag/meteor-admin-sdk
```

2. **Update imports**:
```js
// Before
import { notification } from '@shopware-ag/admin-extension-sdk';

// After  
import { useAdminSdk } from '@shopware-ag/meteor-admin-sdk';
const { notification } = useAdminSdk();
```

## Design System Migration

### From Custom CSS to Design Tokens

If you've been using custom CSS variables, Meteor tokens provide better consistency:

```css
/* Custom approach */
:root {
  --my-primary: #1a73e8;
  --my-spacing: 16px;
  --my-radius: 8px;
}

/* Meteor approach */
@import "@shopware-ag/meteor-tokens/css/tokens.css";

.my-component {
  color: var(--color-primary-default);
  padding: var(--spacing-4);
  border-radius: var(--border-radius-default);
}
```

### From Icon Fonts to SVG Icons

Meteor uses modern SVG icons instead of icon fonts:

```html
<!-- Before: Icon fonts -->
<i class="icon-checkmark"></i>

<!-- After: Meteor icons -->
<MtIcon name="check" />
```

## Framework Considerations

### Vue 2 to Vue 3

Meteor requires Vue 3. If you're on Vue 2:

1. **Plan your Vue 3 migration first**
2. **Update component syntax** (Composition API recommended)
3. **Install Meteor components** after Vue 3 migration

### Design Tool Integration

#### Figma Libraries

Replace old Shopware libraries with Meteor:

1. **Remove old libraries** from your Figma files
2. **Add Meteor libraries** from [Figma Community](https://www.figma.com/@shopware)
3. **Update component instances** using Figma's swap functionality

#### Design Handoff

With Meteor, design-to-code handoff becomes easier:

- **Consistent naming**: Component names match between Figma and code
- **Token references**: Design tokens provide exact values
- **Better documentation**: Each component has clear usage guidelines

## Common Migration Scenarios

### Updating an Existing Admin Extension

**For Designers:**
- Update your Figma designs to use Meteor components
- Review color and spacing consistency  
- Test designs in both light and dark modes

**For Developers:**
- Replace legacy components with Meteor equivalents
- Update styling to use design tokens
- Test functionality with new component APIs

### Building New Features

Start fresh with Meteor from day one:

- **Use Figma libraries** for design work
- **Follow component documentation** for implementation
- **Leverage design tokens** for custom styling

### Maintaining Legacy Projects

You can gradually migrate:

- **Keep existing styles** while introducing Meteor components
- **Use CSS specificity** to avoid conflicts
- **Migrate page by page** rather than all at once

## Testing Your Migration

### Visual Testing

- **Compare before/after screenshots** to ensure visual consistency
- **Test in different browsers** and screen sizes
- **Verify dark mode** appearance if applicable

### Accessibility Testing

- **Run accessibility audits** (Meteor improves accessibility)
- **Test keyboard navigation** with new components
- **Verify screen reader compatibility**

## Getting Design Support

### Resources

- **[Component Documentation](/meteor-components/)**: See all available components
- **[Design Tokens](/tokens/)**: Browse available design tokens
- **[Figma Libraries](https://www.figma.com/@shopware)**: Access design resources

### Community Support

- **[Slack Community](https://shopwarecommunity.slack.com/archives/C02BM1MMG2Z)**: Ask questions and get help
- **[GitHub Issues](https://github.com/shopware/meteor/issues)**: Report bugs or request features
- **[Book a Session](https://outlook.office.com/bookwithme/user/01fed3b3b0884457b2420426d262e39c@shopware.com/meetingtype/EHFP9RsuA0e3LbHn1yQwjA2?anonymous&ep=mlink)**: 30-minute consultation with UX team

---

**Need help with your migration?** [Contact us](/get-started/contact-us) for personalized support.
