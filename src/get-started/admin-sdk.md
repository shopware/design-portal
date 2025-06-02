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

# Admin SDK

The Meteor Admin SDK allows you to build powerful applications and extensions for the Shopware 6 Administration using modern web technologies and Meteor Design System components.

::: info Official Documentation
For comprehensive guides, API reference, and detailed examples, visit the official [Shopware Admin Extension SDK Documentation](https://developer.shopware.com/resources/admin-extension-sdk/).
:::

## What is the Admin SDK?

The Admin SDK is a comprehensive toolkit that enables developers to:

- **Create Admin Apps**: Build standalone applications that integrate seamlessly with Shopware 6 Administration
- **Extend Existing Views**: Add custom functionality to existing admin pages
- **Access Shopware APIs**: Interact with Shopware's data and functionality
- **Use Meteor Components**: Leverage the full Meteor Design System in your apps

## Key Features

### 🔧 **Easy Integration**
- Pre-configured development environment
- Hot module replacement for fast development
- Built-in TypeScript support

### 🎨 **Design System Integration**
- Full access to Meteor components
- Consistent styling with Shopware Administration
- Dark mode support out of the box

### 🔌 **Shopware Integration**
- Access to Shopware's HTTP client
- Repository pattern for data access
- Event system for communication

### 📱 **Modern Development**
- Vue.js 3 and Composition API
- TypeScript with full type definitions
- Modern build tools (Vite)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Access to a Shopware 6 instance
- Basic knowledge of Vue.js and TypeScript

### Installation

<NPM package="@shopware-ag/meteor-admin-sdk" />

### Create Your First App

```bash
# Clone the example app
git clone https://github.com/shopware/meteor.git
cd meteor/examples/admin-sdk-app

# Install dependencies
npm install

# Start development server
npm run dev
```

## Basic Example

Here's a simple Admin SDK app:

```typescript
// main.ts
import { createApp } from 'vue';
import { createAdminSdk } from '@shopware-ag/meteor-admin-sdk';
import App from './App.vue';

// Import Meteor styles
import '@shopware-ag/meteor-component-library/styles.css';
import '@shopware-ag/meteor-component-library/font.css';

const app = createApp(App);

// Initialize Admin SDK
const sdk = createAdminSdk({
  location: 'main-module',
  displaySearchBar: true,
  displayLanguageSwitch: true,
});

app.use(sdk);
app.mount('#app');
```

```vue
<!-- App.vue -->
<template>
  <div class="admin-app">
    <MtCard>
      <template #header>
        <h1>My Custom Admin App</h1>
      </template>
      
      <MtButton 
        variant="primary" 
        @click="fetchData"
      >
        Load Data
      </MtButton>
      
      <MtDataTable 
        v-if="data.length"
        :columns="columns"
        :data="data"
      />
    </MtCard>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useAdminSdk } from '@shopware-ag/meteor-admin-sdk';
import { MtCard, MtButton, MtDataTable } from '@shopware-ag/meteor-component-library';

const { repository, notification } = useAdminSdk();
const data = ref([]);

const columns = [
  { property: 'name', label: 'Name' },
  { property: 'email', label: 'Email' },
  { property: 'createdAt', label: 'Created' },
];

const fetchData = async () => {
  try {
    const result = await repository.search('customer', {
      page: 1,
      limit: 25,
    });
    
    data.value = result.data;
    notification.dispatch({
      title: 'Success',
      message: 'Data loaded successfully',
      variant: 'success',
    });
  } catch (error) {
    notification.dispatch({
      title: 'Error',
      message: 'Failed to load data',
      variant: 'error',
    });
  }
};

onMounted(() => {
  fetchData();
});
</script>
```

## API Reference

### createAdminSdk(options)

Initialize the Admin SDK with configuration options:

```typescript
interface AdminSdkOptions {
  location: 'main-module' | 'dashboard' | 'settings';
  displaySearchBar?: boolean;
  displayLanguageSwitch?: boolean;
  displayUserMenu?: boolean;
}
```

### useAdminSdk()

Composable that provides access to Shopware functionality:

```typescript
const {
  // Data access
  repository,
  
  // Notifications
  notification,
  
  // Navigation
  router,
  
  // User context
  context,
  
  // HTTP client
  httpClient,
} = useAdminSdk();
```

## Common Use Cases

### 1. Custom Data Management

```typescript
// Create a custom entity manager
const productRepository = repository.create('product');

// Search products
const products = await productRepository.search({
  filter: [{ type: 'equals', field: 'active', value: true }],
  associations: ['manufacturer', 'categories'],
});

// Create new product
const newProduct = await productRepository.save({
  name: 'New Product',
  productNumber: 'SW-001',
  price: [{ currencyId: 'EUR', gross: 99.99 }],
});
```

### 2. Custom Settings Page

```vue
<template>
  <MtCard>
    <template #header>
      <h2>Custom Settings</h2>
    </template>
    
    <form @submit.prevent="saveSettings">
      <MtTextfield
        v-model="settings.apiKey"
        label="API Key"
        required
      />
      
      <MtSwitch
        v-model="settings.enabled"
        label="Enable Feature"
      />
      
      <MtButton type="submit" variant="primary">
        Save Settings
      </MtButton>
    </form>
  </MtCard>
</template>

<script setup lang="ts">
const { systemConfig } = useAdminSdk();

const settings = ref({
  apiKey: '',
  enabled: false,
});

const saveSettings = async () => {
  await systemConfig.save('MyPlugin.config', settings.value);
};
</script>
```

### 3. Dashboard Widget

```vue
<template>
  <MtCard class="dashboard-widget">
    <template #header>
      <div class="flex justify-between items-center">
        <h3>Sales Overview</h3>
        <MtIcon name="chart-line" />
      </div>
    </template>
    
    <div class="stats-grid">
      <div class="stat">
        <span class="value">{{ stats.totalSales }}</span>
        <span class="label">Total Sales</span>
      </div>
      <div class="stat">
        <span class="value">{{ stats.orders }}</span>
        <span class="label">Orders</span>
      </div>
    </div>
  </MtCard>
</template>
```

## Deployment

### Building for Production

```bash
# Build the app
npm run build

# Upload to your Shopware app
# The built files go in the /public directory
```

### App Manifest

Your app needs a manifest file for Shopware:

```xml
<!-- manifest.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<manifest xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="https://raw.githubusercontent.com/shopware/platform/trunk/src/Core/Framework/App/Manifest/Schema/manifest-1.0.xsd">
    <meta>
        <name>my-admin-app</name>
        <label>My Admin App</label>
        <description>Custom admin application</description>
        <author>Your Company</author>
        <copyright>Your Company</copyright>
        <version>1.0.0</version>
        <license>MIT</license>
    </meta>
    
    <admin>
        <action-button action="my-app" entity="product" view="detail" url="/admin/my-app">
            <label>Open My App</label>
        </action-button>
        
        <module name="my-app" parent="sw-dashboard">
            <label>My App</label>
            <color>#ff6b35</color>
            <source>index.html</source>
        </module>
    </admin>
</manifest>
```

## Examples and Resources

### Example Apps

- **[Basic Admin App](https://github.com/shopware/meteor/tree/main/examples/admin-sdk-app)**: Simple app demonstrating core concepts
- **[Product Manager](https://github.com/shopware/meteor-examples/tree/main/product-manager)**: Advanced product management interface
- **[Analytics Dashboard](https://github.com/shopware/meteor-examples/tree/main/analytics)**: Custom analytics and reporting

### Documentation

- **[Official Admin Extension SDK Documentation](https://developer.shopware.com/resources/admin-extension-sdk/)**: Complete API reference and guides
- **[Getting Started Guide](https://developer.shopware.com/resources/admin-extension-sdk/getting-started/)**: Installation and usage instructions
- **[API Reference](https://developer.shopware.com/resources/admin-extension-sdk/api-reference/)**: Detailed API documentation
- **[Shopware App Development](https://developer.shopware.com/docs/guides/plugins/apps/)**: Official Shopware app development guide
- **[Component Library](/meteor-components/)**: Meteor component documentation

## Troubleshooting

### Common Issues

**App not loading**: Check that your manifest.xml is correctly configured and the app is activated in Shopware.

**Styling issues**: Ensure you've imported Meteor CSS files in your main application file.

**API errors**: Verify your app has the necessary permissions in the manifest.xml file.

### Getting Help

- [GitHub Issues](https://github.com/shopware/meteor/issues)
- [Shopware Community Slack](https://shopwarecommunity.slack.com/)
- [Official Shopware Documentation](https://developer.shopware.com/)
- [Admin Extension SDK Documentation](https://developer.shopware.com/resources/admin-extension-sdk/)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/shopware) with `shopware` tag

## Next Steps

- [Explore Components](/meteor-components/)
- [Learn about Design Tokens](/tokens/)
- [Read Migration Guide](/get-started/migration)
- [View Examples](https://github.com/shopware/meteor/tree/main/examples)
