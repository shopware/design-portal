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

# Frequently Asked Questions

## General Questions

### What is Meteor Design System?

Meteor is Shopware's open-source design system that provides a unified collection of components, design tokens, icons, and guidelines. It helps create consistent, accessible, and delightful user experiences across all Shopware products and extensions.

### Is Meteor free to use?

Yes! Meteor is completely free and open-source under the MIT license. You can use it for personal, commercial, or any other projects without restrictions.

### Which frameworks does Meteor support?

Meteor components are built specifically for Vue.js 3+. However, the design tokens and icon kit can be used with any framework or vanilla JavaScript/CSS.

## Installation & Setup

### How do I install Meteor in my project?

For Vue.js projects:
```bash
npm install @shopware-ag/meteor-component-library
```

For design tokens only:
```bash
npm install @shopware-ag/meteor-tokens
```

See our [Installation Guide](/get-started/installation) for detailed instructions.

### Do I need to install all packages?

No, you can install only what you need:
- `@shopware-ag/meteor-component-library` - Vue.js components (includes icons and basic tokens)
- `@shopware-ag/meteor-icon-kit` - Icons only
- `@shopware-ag/meteor-tokens` - Design tokens only

### Why aren't my components styled correctly?

Make sure you've imported the required CSS files:

```js
import "@shopware-ag/meteor-component-library/styles.css";
import "@shopware-ag/meteor-component-library/font.css";
```

## Components

### Can I use Meteor components with Vue 2?

No, Meteor components require Vue.js 3 or higher. If you're using Vue 2, you'll need to upgrade to Vue 3 first.

### How do I customize component styles?

You can customize components using:

1. **CSS custom properties**: Override Meteor design tokens
2. **CSS classes**: Use specific class selectors
3. **Slots**: Replace component content with your own

```css
/* Override design tokens */
:root {
  --color-primary-default: #your-brand-color;
}

/* Override specific component */
.mt-button--primary {
  background-color: #your-custom-color;
}
```

### Are Meteor components accessible?

Yes, all Meteor components are built with accessibility in mind, following WCAG 2.1 AA guidelines. They include proper ARIA attributes, keyboard navigation, and screen reader support.

## Design Tokens

### What are design tokens?

Design tokens are named values that represent design decisions like colors, spacing, typography, and shadows. They ensure consistency across your application and make it easy to update your design system.

### How do I use design tokens in my CSS?

Import the tokens and use them as CSS custom properties:

```css
@import "@shopware-ag/meteor-tokens/css/tokens.css";

.my-component {
  color: var(--color-text-primary);
  margin: var(--spacing-4);
}
```

### Can I create custom tokens?

Yes, you can extend Meteor tokens with your own:

```css
:root {
  /* Your custom tokens */
  --my-brand-color: #ff6b35;
  --my-custom-spacing: 24px;
  
  /* Override Meteor tokens */
  --color-primary-default: var(--my-brand-color);
}
```

## Icons

### How many icons are available?

The Meteor Icon Kit includes 850+ icons covering common UI needs, system functions, and e-commerce specific use cases.

### Can I add my own icons?

While you can't add icons to the official Meteor icon kit, you can:

1. Use custom SVG icons alongside Meteor icons
2. Create your own icon component
3. Contribute new icons to the project via GitHub

### How do I request new icons?

[Open an issue on GitHub](https://github.com/shopware/meteor/issues) with:
- Icon name and description
- Use case explanation
- Visual reference if possible

## Development

### Can I contribute to Meteor?

Absolutely! We welcome contributions. See our [Contribution Guidelines](/foundations/contributions) to get started.

### How do I report bugs?

[Open an issue on GitHub](https://github.com/shopware/meteor/issues) with:
- Clear description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

### Is there a Storybook for components?

Yes! You can view all components and their variations in our Storybook, which is embedded in the component documentation on this site.

## TypeScript

### Does Meteor support TypeScript?

Yes, Meteor includes full TypeScript definitions. No additional setup is required.

### Are there type definitions for props?

Yes, all component props, events, and slots are fully typed:

```typescript
import { MtButton } from '@shopware-ag/meteor-component-library';
import type { MtButtonVariant } from '@shopware-ag/meteor-component-library/types';
```

## Performance

### Will Meteor increase my bundle size?

Meteor is designed to be tree-shakable. Only import the components you actually use:

```js
// Good - only imports specific components
import { MtButton, MtTextfield } from '@shopware-ag/meteor-component-library';

// Avoid - imports everything
import * from '@shopware-ag/meteor-component-library';
```

### How can I optimize Meteor for production?

1. Use tree shaking to eliminate unused code
2. Import only necessary components
3. Use CSS custom properties efficiently
4. Consider lazy loading components in large applications

## Browser Support

### Which browsers does Meteor support?

Meteor supports all modern browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Does Meteor work on mobile?

Yes, all Meteor components are responsive and touch-friendly, designed to work well on mobile devices.

## Migration

### I'm using old Shopware components. How do I migrate?

Check our [Migration Guide](/get-started/migration) for step-by-step instructions on migrating from legacy Shopware components to Meteor.

### Can I use Meteor alongside existing components?

Yes, Meteor is designed to work alongside existing components. You can gradually migrate your application over time.

## Getting Help

### Where can I get support?

- [GitHub Issues](https://github.com/shopware/meteor/issues) for bugs and feature requests
- [Slack Community](https://shopwarecommunity.slack.com/archives/C02BM1MMG2Z) for quick questions
- [Shopware Developer Documentation](https://developer.shopware.com/) for comprehensive guides
- [Admin SDK Documentation](https://developer.shopware.com/resources/admin-extension-sdk/) for Admin SDK development
- [Contact us](/get-started/contact-us) for direct support

### Can I book a consultation?

Yes, you can [book a 30-minute Community Check-in](https://outlook.office.com/bookwithme/user/01fed3b3b0884457b2420426d262e39c@shopware.com/meetingtype/EHFP9RsuA0e3LbHn1yQwjA2?anonymous&ep=mlink) with Dennis Mader, Head of UX at Shopware.

## Licensing

### Can I use Meteor in commercial projects?

Yes, Meteor is released under the MIT license, which allows commercial use without restrictions.

### Do I need to credit Shopware?

While not required, we appreciate attribution when you use Meteor in your projects. You can link to [shopware.design](https://shopware.design) or mention that you're using Shopware's Meteor Design System.

---

**Didn't find your answer?** [Contact us](/get-started/contact-us) or [join our Slack community](https://shopwarecommunity.slack.com/archives/C02BM1MMG2Z).
